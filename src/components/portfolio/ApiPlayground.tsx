"use client";

import { useState } from "react";
import { Code, Copy, Check, Terminal, FileJson, Globe, ShieldCheck } from "lucide-react";

interface Endpoint {
  id: string;
  method: "GET" | "POST" | "DELETE" | "PUT";
  path: string;
  title: string;
  description: string;
  auth: string;
  headers: Record<string, string>;
  params?: Array<{ name: string; type: string; required: boolean; description: string }>;
  requestBody?: string;
  response: {
    status: number;
    statusText: string;
    body: string;
  };
  codeSnippets: {
    curl: string;
    typescript: string;
    python: string;
  };
}

const ENDPOINTS: Endpoint[] = [
  {
    id: "iih-essentials-tags",
    method: "GET",
    path: "/api/v2/iih/essentials/tags",
    title: "IIH Essentials API - Tag Ingestion Query",
    description: "Fetches live variable model definitions, archive flags, and connector metadata from IIH Essentials.",
    auth: "Bearer {ied_jwt_token}",
    headers: {
      "Authorization": "Bearer ied_jwt_98f41029a",
      "Accept": "application/json"
    },
    params: [
      { name: "connector", type: "string", required: false, description: "Filter tags by source connector ('s7plus', 'modbus', 'ethernetip', 'profinet')." },
      { name: "datatype", type: "string", required: false, description: "Filter by variable data type ('Float32', 'Bool', 'Int32')." }
    ],
    response: {
      status: 200,
      statusText: "OK",
      body: JSON.stringify(
        {
          total_tags: 2,
          tags: [
            {
              tag_id: "tag_s7_001",
              name: "Main_Press_Pressure_Bar",
              connector: "s7plus",
              datatype: "Float32",
              archive_enabled: true,
              archive_interval_ms: 500
            },
            {
              tag_id: "tag_modbus_004",
              name: "Chiller_Coolant_Temp",
              connector: "modbus",
              datatype: "Float32",
              archive_enabled: true,
              archive_interval_ms: 1000
            }
          ]
        },
        null,
        2
      )
    },
    codeSnippets: {
      curl: `curl -X GET "https://ied-node-01.edge.local/api/v2/iih/essentials/tags?connector=s7plus" \\
  -H "Authorization: Bearer ied_jwt_98f41029a" \\
  -H "Accept: application/json"`,
      typescript: `import { IndustrialEdgeClient } from '@siemens/industrial-edge-sdk';

const edgeClient = new IndustrialEdgeClient({
  endpoint: 'https://ied-node-01.edge.local',
  authToken: process.env.IED_JWT_TOKEN
});

const tags = await edgeClient.iihEssentials.getTags({ connector: 's7plus' });
console.log('Ingested Tags:', tags.total_tags);`,
      python: `from siemens_industrial_edge import EdgeClient

client = EdgeClient(
    host="https://ied-node-01.edge.local",
    token="ied_jwt_98f41029a"
)

result = client.iih_essentials.get_tags(connector="s7plus")
for tag in result["tags"]:
    print(f"{tag['name']}: {tag['datatype']} (Archive: {tag['archive_enabled']})")`
    }
  },
  {
    id: "s7plus-subscribe",
    method: "POST",
    path: "/api/v1/s7plus/connectors/subscribe",
    title: "SIMATIC S7+ Connector - Symbolic Tag Subscription",
    description: "Subscribes to optimized symbolic variables in SIMATIC S7-1500 controllers and routes payloads to Databus.",
    auth: "Bearer {ied_jwt_token}",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer ied_jwt_98f41029a"
    },
    params: [
      { name: "connection_name", type: "string", required: true, description: "Unique identifier for PLC connection." },
      { name: "symbols", type: "array[string]", required: true, description: "List of symbolic TIA Portal DB tag paths." }
    ],
    requestBody: JSON.stringify(
      {
        connection_name: "S71500_Cell_01",
        plc_ip: "192.168.1.10",
        tls_security_level: "TLS_1_3",
        symbols: [
          "DB_ProductionData.Header.BatchNumber",
          "DB_ProductionData.Process.Temperature_Zone1",
          "DB_ProductionData.Process.Pressure_Bar"
        ],
        sampling_mode: "ON_CHANGE",
        cycle_time_ms: 50
      },
      null,
      2
    ),
    response: {
      status: 201,
      statusText: "Created",
      body: JSON.stringify(
        {
          subscription_id: "sub_s7p_90412a",
          status: "ACTIVE",
          databus_topic: "ie/m/j/simatic/v1/s71500/dp/r/S71500_Cell_01/#",
          symbol_count: 3
        },
        null,
        2
      )
    },
    codeSnippets: {
      curl: `curl -X POST https://ied-node-01.edge.local/api/v1/s7plus/connectors/subscribe \\
  -H "Authorization: Bearer ied_jwt_98f41029a" \\
  -H "Content-Type: application/json" \\
  -d '{
    "connection_name": "S71500_Cell_01",
    "plc_ip": "192.168.1.10",
    "symbols": ["DB_ProductionData.Process.Temperature_Zone1"]
  }'`,
      typescript: `import { IndustrialEdgeClient } from '@siemens/industrial-edge-sdk';

const edgeClient = new IndustrialEdgeClient({
  endpoint: 'https://ied-node-01.edge.local',
  authToken: process.env.IED_JWT_TOKEN
});

const sub = await edgeClient.s7plus.subscribe({
  connectionName: 'S71500_Cell_01',
  plcIp: '192.168.1.10',
  symbols: ['DB_ProductionData.Process.Temperature_Zone1']
});

console.log('Databus Topic:', sub.databus_topic);`,
      python: `from siemens_industrial_edge import EdgeClient

client = EdgeClient(
    host="https://ied-node-01.edge.local",
    token="ied_jwt_98f41029a"
)

sub = client.s7plus.subscribe(
    connection_name="S71500_Cell_01",
    plc_ip="192.168.1.10",
    symbols=["DB_ProductionData.Process.Temperature_Zone1"]
)

print(f"Subscribed: {sub['subscription_id']}")`
    }
  },
  {
    id: "eip-connector-subscribe",
    method: "POST",
    path: "/api/v1/eip/connectors/subscribe",
    title: "Ethernet IP Connector - CIP Tag Polling",
    description: "Configures tag acquisition from Rockwell Allen-Bradley ControlLogix/CompactLogix CIP controllers.",
    auth: "Bearer {ied_jwt_token}",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer ied_jwt_98f41029a"
    },
    params: [
      { name: "plc_ip_address", type: "string", required: true, description: "IP address of EtherNet/IP CIP controller." },
      { name: "slot", type: "integer", required: false, description: "Backplane slot number (default: 0)." }
    ],
    requestBody: JSON.stringify(
      {
        connection_name: "EIP_ControlLogix_Line1",
        plc_ip_address: "192.168.10.50",
        slot: 0,
        acquisition_cycle_ms: 100,
        tags: [
          {
            name: "Program:MainProgram.Conveyor_Speed_RPM",
            datatype: "REAL",
            alias: "Conveyor_Speed_RPM"
          }
        ]
      },
      null,
      2
    ),
    response: {
      status: 200,
      statusText: "OK",
      body: JSON.stringify(
        {
          connection_id: "conn_eip_88412",
          status: "CONNECTED",
          cip_session_handle: 1049281,
          databus_topic: "ie/m/j/simatic/v1/eip1/dp/r/EIP_ControlLogix_Line1/#"
        },
        null,
        2
      )
    },
    codeSnippets: {
      curl: `curl -X POST https://ied-node-01.edge.local/api/v1/eip/connectors/subscribe \\
  -H "Authorization: Bearer ied_jwt_98f41029a" \\
  -H "Content-Type: application/json" \\
  -d '{
    "connection_name": "EIP_ControlLogix_Line1",
    "plc_ip_address": "192.168.10.50"
  }'`,
      typescript: `import { IndustrialEdgeClient } from '@siemens/industrial-edge-sdk';

const edgeClient = new IndustrialEdgeClient({
  endpoint: 'https://ied-node-01.edge.local',
  authToken: process.env.IED_JWT_TOKEN
});

const conn = await edgeClient.ethernetIp.subscribe({
  connectionName: 'EIP_ControlLogix_Line1',
  plcIpAddress: '192.168.10.50'
});

console.log('Connection Status:', conn.status);`,
      python: `from siemens_industrial_edge import EdgeClient

client = EdgeClient(
    host="https://ied-node-01.edge.local",
    token="ied_jwt_98f41029a"
)

conn = client.ethernet_ip.subscribe(
    connection_name="EIP_ControlLogix_Line1",
    plc_ip_address="192.168.10.50"
)

print(f"EIP Status: {conn['status']}")`
    }
  }
];

export function ApiPlayground() {
  const [selectedId, setSelectedId] = useState<string>("iih-essentials-tags");
  const [activeTab, setActiveTab] = useState<"params" | "response" | "code">("params");
  const [codeLang, setCodeLang] = useState<"curl" | "typescript" | "python">("curl");
  const [copied, setCopied] = useState(false);

  const endpoint = ENDPOINTS.find((e) => e.id === selectedId) || ENDPOINTS[0];

  const handleCopyCode = () => {
    const code = endpoint.codeSnippets[codeLang];
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMethodBadgeClass = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      case "POST":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "PUT":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      case "DELETE":
        return "bg-rose-500/10 text-rose-400 border-rose-500/30";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="flex flex-col gap-4 border border-border rounded-xl bg-surface/50 overflow-hidden shadow-lg">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-brand" />
          <span className="font-semibold text-sm">Industrial Edge APIs Explorer</span>
        </div>
        <span className="text-xs text-muted-foreground bg-brand/10 text-brand px-2.5 py-1 rounded-full font-mono font-medium">
          OpenAPI 3.1 • Industrial Operations X
        </span>
      </div>

      {/* Endpoint Selector Tabs */}
      <div className="px-4 pt-2 flex flex-wrap gap-2 border-b border-border/60">
        {ENDPOINTS.map((ep) => {
          const isSelected = ep.id === selectedId;
          return (
            <button
              key={ep.id}
              onClick={() => setSelectedId(ep.id)}
              className={`flex items-center gap-2 px-3 py-2 text-xs font-mono rounded-t-md transition-colors border-t border-x ${
                isSelected
                  ? "bg-background border-border text-foreground font-semibold -mb-px"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/40"
              }`}
            >
              <span
                className={`px-1.5 py-0.5 text-[10px] font-bold rounded border ${getMethodBadgeClass(
                  ep.method
                )}`}
              >
                {ep.method}
              </span>
              <span>{ep.path}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Endpoint Info Header */}
      <div className="p-4 flex flex-col gap-2 bg-background/50">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`px-2.5 py-1 text-xs font-bold font-mono rounded border ${getMethodBadgeClass(
              endpoint.method
            )}`}
          >
            {endpoint.method}
          </span>
          <span className="font-mono text-sm font-semibold">{endpoint.path}</span>
          <span className="text-xs text-muted-foreground flex items-center gap-1 ml-auto">
            <ShieldCheck className="h-3.5 w-3.5 text-brand" /> Auth: {endpoint.auth}
          </span>
        </div>
        <h4 className="font-semibold text-base text-foreground mt-1">{endpoint.title}</h4>
        <p className="text-xs text-muted-foreground">{endpoint.description}</p>
      </div>

      {/* Main Content Tabs */}
      <div className="px-4 border-b border-border/60 flex items-center justify-between bg-muted/20">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("params")}
            className={`px-3 py-2 text-xs font-medium border-b-2 transition-colors ${
              activeTab === "params"
                ? "border-brand text-brand font-semibold"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Parameters & Schema
          </button>
          <button
            onClick={() => setActiveTab("response")}
            className={`px-3 py-2 text-xs font-medium border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === "response"
                ? "border-brand text-brand font-semibold"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <FileJson className="h-3.5 w-3.5" />
            Response Schema (200 OK)
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-3 py-2 text-xs font-medium border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === "code"
                ? "border-brand text-brand font-semibold"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Code className="h-3.5 w-3.5" />
            SDK Code Snippets
          </button>
        </div>

        {activeTab === "code" && (
          <div className="flex items-center gap-2">
            {(["curl", "typescript", "python"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setCodeLang(lang)}
                className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${
                  codeLang === lang
                    ? "bg-brand/20 text-brand font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tab Panels */}
      <div className="p-4 bg-background">
        {activeTab === "params" && (
          <div className="flex flex-col gap-4">
            {endpoint.params && endpoint.params.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground font-mono">
                      <th className="py-2 px-2 font-medium">Parameter</th>
                      <th className="py-2 px-2 font-medium">Type</th>
                      <th className="py-2 px-2 font-medium">Required</th>
                      <th className="py-2 px-2 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {endpoint.params.map((p) => (
                      <tr key={p.name} className="hover:bg-muted/20">
                        <td className="py-2.5 px-2 font-mono text-brand font-medium">{p.name}</td>
                        <td className="py-2.5 px-2 font-mono text-muted-foreground">{p.type}</td>
                        <td className="py-2.5 px-2">
                          {p.required ? (
                            <span className="text-[10px] bg-rose-500/10 text-rose-400 px-1.5 py-0.5 rounded font-mono font-medium">
                              Required
                            </span>
                          ) : (
                            <span className="text-[10px] text-muted-foreground font-mono">Optional</span>
                          )}
                        </td>
                        <td className="py-2.5 px-2 text-muted-foreground">{p.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {endpoint.requestBody && (
              <div className="flex flex-col gap-2 mt-2">
                <span className="text-xs font-semibold text-muted-foreground font-mono">
                  Example Request Payload (JSON)
                </span>
                <pre className="p-3 bg-muted/40 rounded-lg border border-border text-xs font-mono text-foreground overflow-x-auto">
                  <code>{endpoint.requestBody}</code>
                </pre>
              </div>
            )}
          </div>
        )}

        {activeTab === "response" && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span className="text-xs font-mono font-semibold text-emerald-400">
                  {endpoint.response.status} {endpoint.response.statusText}
                </span>
              </div>
              <span className="text-[11px] text-muted-foreground font-mono">Content-Type: application/json</span>
            </div>
            <pre className="p-3 bg-muted/40 rounded-lg border border-border text-xs font-mono text-foreground overflow-x-auto">
              <code>{endpoint.response.body}</code>
            </pre>
          </div>
        )}

        {activeTab === "code" && (
          <div className="flex flex-col gap-2 relative">
            <button
              onClick={handleCopyCode}
              className="absolute top-2 right-2 flex items-center gap-1.5 px-2.5 py-1 text-xs bg-muted hover:bg-muted/80 text-foreground rounded border border-border transition-colors z-10"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Copy Snippet</span>
                </>
              )}
            </button>
            <pre className="p-4 bg-muted/40 rounded-lg border border-border text-xs font-mono text-brand-300 overflow-x-auto">
              <code>{endpoint.codeSnippets[codeLang]}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
