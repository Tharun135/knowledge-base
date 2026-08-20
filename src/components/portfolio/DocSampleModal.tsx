"use client";

import { X, FileText, Calendar, Tag, BookOpen, Download, Share2, Copy, Check, ExternalLink } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export interface DocSample {
  id: string;
  title: string;
  category: "API Reference" | "User Manual" | "Style Guide" | "Runbook & Ops" | "SDK Guide";
  description: string;
  format: string;
  readTime: string;
  updatedDate: string;
  tags: string[];
  portalUrl: string;
  contentMarkdown: string;
}

export const SAMPLE_DOCUMENTS: DocSample[] = [
  {
    id: "ethernet-ip-connector",
    title: "Ethernet IP Connector Technical Manual & Databus Payload Spec",
    category: "API Reference",
    description: "Technical guide and tag payload specification for connecting EtherNet/IP CIP controllers (Rockwell Allen-Bradley ControlLogix/CompactLogix) to Industrial Edge Databus.",
    format: "Fluid Topics • OpenAPI 3.1",
    readTime: "7 min read",
    updatedDate: "2024-11-12",
    tags: ["EtherNet/IP", "CIP Protocol", "Industrial Edge", "Databus"],
    portalUrl: "https://docs.industrial-operations-x.siemens.cloud/r/en-us/v4.2/ethernet-ip-connector",
    contentMarkdown: `
# Ethernet IP Connector Technical Manual & Databus Payload Spec

The **Ethernet IP Connector** enables Industrial Edge Devices (IED) to acquire tag data from EtherNet/IP CIP controllers (such as Allen-Bradley ControlLogix and CompactLogix PLCs) and publish telemetry payloads to the local **Databus**.

---

## 1. Protocol Architecture & Connection Parameters

Communication uses standard Common Industrial Protocol (CIP) over Encapsulated Ethernet IP (TCP port 44818 for explicit messaging, UDP port 2222 for implicit I/O messaging).

### Connection Properties:
- **Target PLC Type**: Rockwell Allen-Bradley ControlLogix / CompactLogix / Micro800
- **CIP Path**: \`1, 0\` (Backplane slot 0)
- **Max Tag Polling Batch Size**: 500 tags / request
- **Default Databus Payload Topic**: \`ie/m/j/simatic/v1/eip1/dp/r/<connection_name>/#\`

---

## 2. Tag Configuration Schema

Tag connections are provisioned via **Common Configurator** or submitted via JSON API:

\`\`\`json
{
  "connection_name": "EIP_ControlLogix_Line1",
  "plc_ip_address": "192.168.10.50",
  "slot": 0,
  "acquisition_cycle_ms": 100,
  "tags": [
    {
      "name": "Program:MainProgram.Conveyor_Speed_RPM",
      "datatype": "REAL",
      "alias": "Conveyor_Speed_RPM"
    },
    {
      "name": "Program:MainProgram.Emergency_Stop_Active",
      "datatype": "BOOL",
      "alias": "EStop_Status"
    }
  ]
}
\`\`\`

---

## 3. Databus Published MQTT Payload

When tag values update, the Ethernet IP Connector emits JSON payloads on the Databus:

\`\`\`json
{
  "seq": 10492,
  "vals": [
    {
      "id": "Conveyor_Speed_RPM",
      "val": 1750.25,
      "q": 192,
      "ts": "2024-11-12T14:22:00.104Z"
    },
    {
      "id": "EStop_Status",
      "val": false,
      "q": 192,
      "ts": "2024-11-12T14:22:00.104Z"
    }
  ]
}
\`\`\`
`
  },
  {
    id: "iec-60870-5-104-connector",
    title: "Connector for IEC 60870-5-104 Integration Manual",
    category: "User Manual",
    description: "Integration manual for configuring IEC 60870-5-104 telecontrol protocol communications with sub-station RTUs and smart grid control systems on Industrial Edge Devices.",
    format: "Fluid Topics • User Manual",
    readTime: "8 min read",
    updatedDate: "2024-11-08",
    tags: ["IEC 60870-5-104", "Smart Grid", "Telecontrol", "Industrial Edge"],
    portalUrl: "https://docs.industrial-operations-x.siemens.cloud/r/en-us/v2.0/connector-for-iec-60870-5-104",
    contentMarkdown: `
# Connector for IEC 60870-5-104 Integration Manual

This manual guides automation engineers in configuring the **Connector for IEC 60870-5-104** to establish reliable telecontrol communication between Industrial Edge Devices (IED) and Remote Terminal Units (RTUs).

---

## 1. Overview & Protocol Setup

IEC 60870-5-104 (IEC 104) is an international standard telecontrol protocol operating over TCP/IP (port 2404), widely used in power distribution, water management, and energy grids.

### Key Features:
- **ASDU Type Support**: Single Points (\`M_SP_NA_1\`), Measured Values Normalized (\`M_ME_NA_1\`), Floating Point (\`M_ME_NC_1\`).
- **Cause of Transmission (COT)**: Spontaneous (3), Cyclic (1), Interrogated (20).
- **Time Synchronization**: CP56Time2A 7-octet high-resolution timestamping.

---

## 2. Information Object Address (IOA) Mapping Table

| Information Object Address (IOA) | ASDU Type | Signal Description | Unit | Transmission Mode |
| :--- | :--- | :--- | :--- | :--- |
| **1001** | \`M_SP_NA_1\` | Circuit Breaker 1 Position Status | Boolean | Spontaneous (COT 3) |
| **2004** | \`M_ME_NC_1\` | Substation Busbar Voltage (Phase A) | kV (Float32) | Cyclic 1000ms |
| **2005** | \`M_ME_NC_1\` | Substation Transformer Active Power | MW (Float32) | Cyclic 1000ms |

---

## 3. Configuring Station Interrogation

To trigger a General Interrogation (GI) command upon initial connection startup:

\`\`\`yaml
iec104_connection:
  ip_address: "10.200.14.10"
  port: 2404
  common_address_asdu: 1
  k_value: 12  # APDU unacknowledged threshold
  w_value: 8   # APDU acknowledgement timeout
  t1_timeout_sec: 15
  auto_general_interrogation: true
\`\`\`
`
  },
  {
    id: "iih-essentials-api",
    title: "IIH Essentials REST & Data Modeling API Reference",
    category: "API Reference",
    description: "REST & GraphQL API specification for configuring IIH Essentials data model storage, tag ingestion pipelines, and historical archive data queries.",
    format: "Fluid Topics • OpenAPI 3.1",
    readTime: "9 min read",
    updatedDate: "2024-11-15",
    tags: ["IIH Essentials", "REST API", "Industrial Edge", "GraphQL"],
    portalUrl: "https://docs.industrial-operations-x.siemens.cloud/r/en-us/v2.6/iih-essentials-api",
    contentMarkdown: `
# IIH Essentials REST & Data Modeling API Reference

**IIH Essentials** (Industrial Information Hub) provides the core data persistence and semantic abstraction layer for Industrial Edge Devices (IED), storing live variable values and historical time-series data.

---

## 1. Authentication & Base Endpoint

All REST request calls require a Bearer token in the \`Authorization\` header:

\`\`\`
Base URL: https://<ied-ip-address>/api/v2/iih/essentials
\`\`\`

---

## 2. API Endpoints

### List Provisioned Variables
\`GET /api/v2/iih/essentials/tags\`

#### Query Parameters:
- \`connector\` *(optional, string)*: Filter by source connector (\`s7plus\`, \`modbus\`, \`profinet\`, \`ethernetip\`).
- \`datatype\` *(optional, string)*: Filter by type (\`Bool\`, \`Int32\`, \`Float32\`, \`String\`).

#### Response Example (HTTP 200 OK):
\`\`\`json
{
  "total_tags": 2,
  "tags": [
    {
      "tag_id": "tag_s7_001",
      "name": "Main_Press_Pressure_Bar",
      "connector": "s7plus",
      "datatype": "Float32",
      "archive_enabled": true,
      "archive_interval_ms": 500
    },
    {
      "tag_id": "tag_modbus_004",
      "name": "Chiller_Coolant_Temp",
      "connector": "modbus",
      "datatype": "Float32",
      "archive_enabled": true,
      "archive_interval_ms": 1000
    }
  ]
}
\`\`\`

---

### Query Historical Archive Time-Series Data
\`POST /api/v2/iih/essentials/archive/query\`

#### Request Payload:
\`\`\`json
{
  "tag_ids": ["tag_s7_001"],
  "start_time": "2024-11-15T00:00:00Z",
  "end_time": "2024-11-15T01:00:00Z",
  "aggregate": "AVERAGE",
  "sample_interval_sec": 60
}
\`\`\`
`
  },
  {
    id: "modbus-tcp-connector",
    title: "Modbus TCP Connector Parameter & Register Mapping Guide",
    category: "SDK Guide",
    description: "Developer quickstart and parameter guide for acquiring Modbus TCP holding registers, input registers, and coils from legacy PLC field devices.",
    format: "Fluid Topics • Developer Guide",
    readTime: "6 min read",
    updatedDate: "2024-11-01",
    tags: ["Modbus TCP", "Legacy PLCs", "Industrial Edge", "Databus"],
    portalUrl: "https://docs.industrial-operations-x.siemens.cloud/r/en-us/v1.0/modbus-tcp-connector",
    contentMarkdown: `
# Modbus TCP Connector Parameter & Register Mapping Guide

The **Modbus TCP Connector** allows Industrial Edge Devices (IED) to read and write registers across legacy Modbus TCP slave devices, energy meters, and sensor gateways.

---

## 1. Register Types & Address Mapping Convention

The connector maps standard Modbus 5-digit address conventions:

| Register Category | Modbus Address Range | Function Code | Data Access |
| :--- | :--- | :--- | :--- |
| **Coils** | \`00001 - 09999\` | FC 01 (Read), FC 05 (Write) | Read / Write (Bit) |
| **Discrete Inputs** | \`10001 - 19999\` | FC 02 (Read) | Read-Only (Bit) |
| **Input Registers** | \`30001 - 39999\` | FC 04 (Read) | Read-Only (16-bit Word) |
| **Holding Registers** | \`40001 - 49999\` | FC 03 (Read), FC 06/16 (Write) | Read / Write (16-bit Word) |

---

## 2. Byte Swapping & Endianness Configuration

For 32-bit (Float32 / Int32) values spanning two consecutive 16-bit registers:

\`\`\`yaml
endianness_modes:
  BIG_ENDIAN: "No swap (AB CD)"
  LITTLE_ENDIAN: "Byte & word swap (DC BA)"
  BIG_ENDIAN_BYTE_SWAP: "Byte swap only (BA DC)"
  LITTLE_ENDIAN_BYTE_SWAP: "Word swap only (CD AB)"
\`\`\`

---

## 3. Example JSON Config for Modbus Energy Meter

\`\`\`json
{
  "server_ip": "192.168.1.120",
  "port": 502,
  "unit_id": 1,
  "timeout_ms": 2000,
  "registers": [
    {
      "name": "Phase_1_Voltage",
      "register_type": "HOLDING_REGISTER",
      "address": 40001,
      "datatype": "Float32",
      "endianness": "BIG_ENDIAN_BYTE_SWAP",
      "scale_factor": 0.1
    }
  ]
}
\`\`\`
`
  },
  {
    id: "profinet-io-connector",
    title: "PROFINET IO Connector Function Manual",
    category: "User Manual",
    description: "Function manual for configuring real-time PROFINET IO cyclic data exchange between Siemens Industrial Edge Devices and PROFINET IO controllers.",
    format: "Fluid Topics • Function Manual",
    readTime: "8 min read",
    updatedDate: "2024-10-29",
    tags: ["PROFINET IO", "Real-Time", "Siemens IED", "Automation"],
    portalUrl: "https://docs.industrial-operations-x.siemens.cloud/r/en-us/v1.0/profinet-io-connector",
    contentMarkdown: `
# PROFINET IO Connector Function Manual

This function manual covers the deployment and configuration of the **PROFINET IO Connector** on Siemens Industrial Edge Devices (IED) equipped with dedicated PROFINET hardware interfaces.

---

## 1. System Integration Overview

The PROFINET IO Connector enables the IED to act as a PROFINET IO Device or IO Supervisor, directly exchanging cyclic process image data with SIMATIC S7-1500 controllers with sub-millisecond deterministic timing.

### System Topology:
\`\`\`
[ SIMATIC S7-1500 Controller ] <===( PROFINET IO Real-Time Bus )===> [ IED PROFINET Interface (X1/P1) ] ---> [ PROFINET IO Connector App ] ---> [ IIH Essentials ]
\`\`\`

---

## 2. GSDML File Import & Slot Configuration

To integrate the IED into a TIA Portal project:
1. Export the GSDML device description file from **PROFINET IO Connector**.
2. Import \`GSDML-V2.42-Siemens-IED-20241029.xml\` into TIA Portal Hardware Catalog.
3. Drag the IED sub-module onto the PROFINET subnet.
4. Configure cyclic I/O modules:

| Slot | Submodule Type | Direction | Length | Cycle Time |
| :--- | :--- | :--- | :--- | :--- |
| **Slot 1 / Subslot 1** | Input Module 64 Bytes | PLC -> IED | 64 Bytes | 2ms |
| **Slot 1 / Subslot 2** | Output Module 64 Bytes | IED -> PLC | 64 Bytes | 2ms |

---

## 3. Diagnostic Alarms & Status Codes

The connector exposes PROFINET Channel Diagnostics on the Databus:
- \`PROFINET_BUS_FAULT\` (Cable disconnect or physical layer signal loss)
- \`STATION_NAME_MISMATCH\` (Configured PROFINET device name does not match assigned MAC address)
`
  },
  {
    id: "simatic-s7plus-connector",
    title: "SIMATIC S7+ Connector High-Performance Specification",
    category: "API Reference",
    description: "High-performance connector specification for optimized symbolic tag access to SIMATIC S7-1200 and S7-1500 PLC controllers using S7+ protocol.",
    format: "Fluid Topics • OpenAPI 3.1",
    readTime: "9 min read",
    updatedDate: "2024-11-14",
    tags: ["SIMATIC S7+", "S7-1500", "Symbolic Tags", "Siemens PLC"],
    portalUrl: "https://docs.industrial-operations-x.siemens.cloud/r/en-us/v2.0/simatic-s7plus-connector",
    contentMarkdown: `
# SIMATIC S7+ Connector High-Performance Specification

The **SIMATIC S7+ Connector** provides high-throughput symbolic tag reading and writing for Siemens SIMATIC S7-1200, S7-1500, and Drive Controller PLCs over the optimized S7+ protocol.

---

## 1. Key Features & Advantages

Compared to legacy S7 communications (GET/PUT), S7+ protocol provides:
- **Symbolic Tag Browsing**: Access variables directly by TIA Portal symbol names without needing absolute DB memory offsets.
- **Optimized Data Block Access**: Read data from memory blocks configured with "Optimized block access" enabled in TIA Portal.
- **TLS Encrypted Transport**: Full integrity protection for S7-1500 firmware v2.9+ / v3.0+ security profiles.

---

## 2. TIA Portal Symbol Import (.aml / .zip)

To bulk-configure symbolic tags:
1. Export project symbols from TIA Portal using **Siemens TIA Openness** or export \`.aml\` file.
2. In **Common Configurator**, click **Import TIA File**.
3. Select target variables to subscribe to.

---

## 3. Subscribing to Symbolic Tags via REST API

\`POST /api/v1/s7plus/connectors/subscribe\`

#### Request Payload:
\`\`\`json
{
  "connection_name": "S71500_Cell_01",
  "plc_ip": "192.168.1.10",
  "tls_security_level": "TLS_1_3",
  "plc_user": "edge_read_user",
  "symbols": [
    "DB_ProductionData.Header.BatchNumber",
    "DB_ProductionData.Process.Temperature_Zone1",
    "DB_ProductionData.Process.Pressure_Bar"
  ],
  "sampling_mode": "ON_CHANGE",
  "cycle_time_ms": 50
}
\`\`\`
`
  },
  {
    id: "simatic-wincc-unified-runtime",
    title: "SIMATIC WinCC Unified Runtime Operations Runbook",
    category: "Runbook & Ops",
    description: "Operations runbook for deploying SIMATIC WinCC Unified HMI Runtime on Industrial Edge Devices, managing web visualization screens and alarms.",
    format: "Fluid Topics • Operations Runbook",
    readTime: "8 min read",
    updatedDate: "2024-11-04",
    tags: ["WinCC Unified", "HMI / SCADA", "Web Visualization", "Industrial Edge"],
    portalUrl: "https://docs.industrial-operations-x.siemens.cloud/r/en-us/v3.0/simatic-wincc-unified-runtime",
    contentMarkdown: `
# SIMATIC WinCC Unified Runtime Operations Runbook

Operational playbook for deploying, managing, and troubleshooting **SIMATIC WinCC Unified Runtime** applications hosted on Siemens Industrial Edge Devices (IED).

---

## 1. Overview & Architecture

SIMATIC WinCC Unified Runtime on Industrial Edge allows web-based HMI visualizations and SCADA dashboards to run directly on edge IPC hardware, accessible via any modern HTML5 web browser.

### Key Architecture Components:
- **HTML5 Web Client**: Scalable vector graphics (SVG) rendered client-side on browsers.
- **WinCC Unified Data Service**: Tag engine connected directly to IIH Essentials and S7+ Connector.
- **SQLite / PostgreSQL Alarm Archive**: Local persistent event and audit trail storage.

---

## 2. Deploying WinCC Unified Apps via IEM

1. Export the WinCC Unified project runtime package (\`.zip\`) from TIA Portal.
2. Upload package to **Industrial Edge Management (IEM)** App Repository.
3. Deploy to target Industrial Edge Device.
4. Access web visualization URL: \`https://<ied-ip-address>:8443/wincc-unified/\`.

---

## 3. Operational Troubleshooting Procedures

### Issue: HMI Screen displays "Tag Disconnected" indicators:
1. Verify S7+ Connector container status:
   \`\`\`bash
   docker ps | grep s7plus-connector
   \`\`\`
2. Test IIH Essentials tag routing:
   \`\`\`bash
   curl -k https://localhost/api/v2/iih/essentials/tags -H "Authorization: Bearer $TOKEN"
   \`\`\`
3. Restart WinCC Unified Runtime service container:
   \`\`\`bash
   docker restart edge-wincc-unified-runtime
   \`\`\`
`
  }
];

export function DocSampleModal({
  sample,
  onClose
}: {
  sample: DocSample | null;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  if (!sample) return null;

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(sample.contentMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-surface border border-border rounded-xl shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-brand/10 text-brand rounded-full">
              {sample.category}
            </span>
            <span className="text-xs text-muted-foreground font-mono">{sample.format}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={sample.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-brand text-white rounded-md hover:bg-brand/90 transition-colors shadow-sm"
            >
              <span>Open in Fluid Topics</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Sub-header */}
        <div className="px-6 py-4 border-b border-border/60 bg-background/50 flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-foreground">{sample.title}</h2>
          <p className="text-sm text-muted-foreground">{sample.description}</p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-2">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-brand" /> Updated: {sample.updatedDate}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5 text-brand" /> {sample.readTime}
            </span>
            <div className="flex gap-1.5 ml-auto">
              {sample.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-[11px] font-mono">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Markdown Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-background">
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <ReactMarkdown>{sample.contentMarkdown}</ReactMarkdown>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-border bg-muted/20 text-xs text-muted-foreground">
          <span>Siemens Industrial Edge Documentation Showcase • Single Source of Truth</span>
          <a
            href={sample.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 bg-brand text-white font-medium rounded-md hover:bg-brand/90 transition-colors flex items-center gap-1.5"
          >
            Open Document in Fluid Topics Portal
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
