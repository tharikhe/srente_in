// Product data for Serente Electronics
// Categories: Resistors, Capacitors, ICs, Diodes, Connectors, Inductors, Transistors, Others

export interface Product {
    partNumber: string;
    description: string;
    category: string;
    manufacturer?: string;
    inStock: boolean;
    image?: string;
}

export const products: Product[] = [
    {
        "partNumber": "RC0603FR-07220RL",
        "description": "Thick Film Resistors - SMD; YAGEO; 220 Ohm; 0603; 1%",
        "category": "Resistors",
        "manufacturer": "YAGEO",
        "inStock": true
    },
    {
        "partNumber": "RC0603FR-0720KL",
        "description": "20 kOhms ±1% 0.1W, 1/10W Chip Resistor 0603 (1608 Metric) Moisture Resistant",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RC0603FR-07178KL",
        "description": "Res Thick Film 0603 178K Ohm 1% 0.1W(1/10W)",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RC0805FR-07120RL",
        "description": "Res Thick Film 0805 120 Ohm 1% 0.125W(1/8W)",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RC0805JR-070RL",
        "description": "GENERAL PURPOSE CHIP RESISTOR Metal Glaze/thick Film, 0.125W, 0ohm",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RC0805FR-071ML",
        "description": "Res Thick Film 0805 1M Ohm 1% 0.125W(1/8W)",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "CC0402KRX7R7BB101",
        "description": "Ceramic Capacitor, 16V, X7R, 0.0001uF, Surface Mount, 0402",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "GRM155C71A105KE11D",
        "description": "0402 1 uF 10 V ±10% Tolerance X7S",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "CC0603KRX7R9BB103",
        "description": "0603 10 nF 50 V ±10% Tolerance X7R SMT Multilayer Ceramic Chip Capacitor",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "SFR16S0008201FR500",
        "description": "Fixed Resistor, Metal Film, 0.5W, 8200ohm, 200V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "MFR50SFTE52-10R",
        "description": "Fixed Resistor, Metal Film, 0.5W, 10ohm, 300V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "MAL225977221E3",
        "description": "Cap Aluminum Lytic 220uF 450V 20% Snap-In",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "PPPC102LFBN-RC",
        "description": "Female Header, 20 C, Straight 100\"CC; 3.20mm Tail",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "SG73S2ATTD4701F",
        "description": "Res Thick Film 0805 4.7K Ohm 1% 0.25W Automotive",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "LM1117T-3.3/NOPB",
        "description": "Voltage Regulator, DC-DC, Linear, LDO, TO-220, 3.3V",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "LM324N",
        "description": "Operational Amplifier, Quad, 1 Mhz, 1.5V To 16V, Dip, 14",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "B32529C1222J189",
        "description": "Cap Film 0.0022uF 100V PET 5% Radial Stacked",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "B32912A3473M000",
        "description": "Film Capacitor, Polypropylene, 760V, 0.047uF, Through Hole",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "UF4007GP-TP",
        "description": "Rectifier Diode, 1000V, Silicon, 1 Phase, 1A, DO-41",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "SFR25H0001009FR500",
        "description": "Fixed Resistor, Metal Film, 0.5W, 10ohm, 350V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "PFR5221J100J11L4BULK",
        "description": "Film Capacitor, Polypropylene, 100V, 0.00022uF",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "561R10TCCQ22TR",
        "description": "Cap Ceramic Single 22pF 1000V C0G 5% Radial Disc",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "ROX3SJ18K",
        "description": "Rox Series, 18 Kohm, 3W, 5%, 350V, Axial Leaded",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "BU2032-1-HD-G",
        "description": "Heavy-duty socket w/ PC pins gold-plated High-grip CR2032",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "CC0805KKX5R6BB106",
        "description": "Ceramic Capacitor, 10uF, Surface Mount, 0805, 10V",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "TAJC106K035RNJ",
        "description": "Cap Tant Solid 10uF 35V C CASE 10%",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "C1206C226M8RACTU",
        "description": "CAPACITOR, 10 V, 1206, 22UF CERAMIC MULTILAYER",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "EEE-1CA100SR",
        "description": "ELECTROLYTIC CAPACITOR 16V Radial Can - SMD 10uF",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "PMEG2010AEJ,115",
        "description": "Schottky Rectifier Diode, 1 Phase, 1A, 20V",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "TLV1117-33IDCYR",
        "description": "Fixed 3.3V Positive Voltage Regulator LDO SOT-223",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "TLV1117-50IDCY",
        "description": "800-mA, 15-V, linear voltage regulator",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "B72214S0321K551",
        "description": "VARISTOR TVS 840V 50A 14mm 10% Radial",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "ESR10EZPF1005",
        "description": "Res Thick Film 0805 10M Ohm 1% 0.4W Automotive",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "MFR50SFTE52-680K",
        "description": "Fixed Resistor, Metal Film, 0.5W, 680k ohm, 300V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "ERJ-P06F8201V",
        "description": "Res Thick Film 0805 8.2K Ohm 1% 0.25W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "ERJ-P06F2703V",
        "description": "Res Thick Film 0805 270K Ohm 1% 0.25W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "CR0805-FX-3602ELF",
        "description": "Resistor, thick film, SMD 0805, 36 KΩ, 0.125 W, ±1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "KA431AZBU",
        "description": "V-Ref Adjustable 2.495V to 36V 100mA 3-Pin TO-92R",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "SP500208-3",
        "description": "8 Ohms General Purpose Speaker 5 W 220 Hz",
        "category": "Audio",
        "inStock": true
    },
    {
        "partNumber": "USB-A-D-VT",
        "description": "USB Connector, 4+4 Contact(s), Female, Straight",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "C0805C105J4RECTU",
        "description": "Ceramic Capacitor, Multilayer, 16V, X7R, 1uF, 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "ESK105M100AC3AA",
        "description": "CAPACITOR Radial aluminum electrolytic 20% 1uF 100V",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "LM339N",
        "description": "COMPARATOR; QUAD DIFFERENTIAL COMPARATOR; 36 V",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "C0805C102J4GACTU",
        "description": "SMD Comm C0G 0805 Ceramic Capacitor 1000pF",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "561R1DF0D10",
        "description": "Cap Ceramic 0.001uF 1000V Radial Disc",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "C0805C225J4RECTU",
        "description": "SMD/SMT 16V 2.2uF X7R 0805 5% MLCC",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "C0402C104K3RACTU",
        "description": "Ceramic Capacitor, 0.1uF, 25V, X7R, 0402",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "4609X-101-104LF",
        "description": "Res Thick Film NET 100K Ohm 2% 1.13W 9-Pin SIP",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "B32652A4104J189",
        "description": "Film Capacitor, Polypropylene, 400V, 0.1uF",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "MFR50SFTE52-2K2",
        "description": "Fixed Resistor, Metal Film, 0.5W, 2200ohm, 300V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "SFR16S0008201FR500",
        "description": "Fixed Resistor, Metal Film, 0.5W, 8200ohm, 200V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "MFS1/2DCT52R1002F",
        "description": "Fixed Resistor, Metal Film, 0.5W, 10000ohm, 350V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "D103M43Z5UL63L6R",
        "description": "Cap Ceramic Single 0.01uF 500V Z5U 20% Radial",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "AY1102M37Y5UC63L0",
        "description": "Cap Ceramic 0.001uF 1500V Y5U 20% Radial",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "4309R-101-103LF",
        "description": "Res Thick Film NET 10K Ohm 2% 1.13W Molded 9-Pin SIP",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "MCP42010T-I/ST",
        "description": "Digital Pot; 256 steps; SPI; 10kohms; dual channel",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "FKP2D002201D00JA00",
        "description": "Film Capacitor, Polypropylene, 100V, 0.00022uF",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "RCS08050000Z0EA",
        "description": "Zero Ohm Resistor, Jumper, 0805, 4A",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "IS42S16400J-7TLI",
        "description": "IC Sdram 64MBIT 143MHZ 54TSOP",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "C330C104KCR5TA",
        "description": "Cap Ceramic 0.1uF 500V X7R 10% Radial",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "VJ0805A102JXAAC",
        "description": "SMT Multilayer Ceramic 0805 1 nF 50V ±5% C0G/NP0",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "C0805C103J5GEC7210",
        "description": "Ceramic Capacitor, 0.01uF, 50V, C0G, 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "MFR50SFTE52-3K3",
        "description": "Fixed Resistor, Metal Film, 0.5W, 3300ohm, 300V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "ERJ-P06F2201V",
        "description": "Res Thick Film 0805 2.2K Ohm 1% 0.25W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "B32529C1224J289",
        "description": "Cap Film 0.22uF 100V PET 5% Radial",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "RK73H2ATTD6800F",
        "description": "Res Thick Film 0805 680 Ohm 1% 0.25W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "C0805C105K4RAC7210",
        "description": "Ceramic Capacitor, 16V, X7R, 1uF, 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "L7912CV",
        "description": "Fixed LDO Voltage Regulator, 7912, -12V, 1.5A",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "ATMEGA1609-AFR",
        "description": "MCU 8-Bit ATMEGA1609 AVR RISC 16KB Flash",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "RC0805FR-074K7L",
        "description": "Resistor, thick film, SMD 0805, 4.7 KΩ, 0.125 W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "0805YA102FAT2A",
        "description": "Multilayer Ceramic Capacitors 16V 1000pF C0G 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "ECA-1AM222",
        "description": "Cap Aluminum 2200uF 10V 20% Radial",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "MFR50SFTE52-100R",
        "description": "Fixed Resistor, Metal Film, 0.5W, 100ohm, 300V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "FKP1-100/2KV/5P15",
        "description": "Film Capacitors 100pF 2000 Volts 5%",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "RC0805FR-13220KL",
        "description": "220 kOhms 1% 0.125W Chip Resistor 0805",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RK73H2ATTD2202F",
        "description": "Res Thick Film 0805 22K Ohm 1% 0.25W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "C0805C223J3GEC7210",
        "description": "Ceramic Capacitor, 25V, C0G, 0.022uF, 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "PV36W202C01B00",
        "description": "Trimmer, Cermet, 0.5W, 2000ohm, 25 Turn",
        "category": "Potentiometers",
        "inStock": true
    },
    {
        "partNumber": "FDV304P",
        "description": "Transistor MOSFET P-Ch. -0.46A -25V SOT23",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "51296-4033",
        "description": "Conn FFC/FPC Connector SKT 40 POS 0.5mm",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "3296Y-1-102LF",
        "description": "Cermet trimmer 1 KΩ, 0.5 W, 25 turns",
        "category": "Potentiometers",
        "inStock": true
    },
    {
        "partNumber": "MFR50SFTE52-150K",
        "description": "Fixed Resistor, Metal Film, 0.5W, 150k ohm, 300V",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "0805YA103FAT2A",
        "description": "Ceramic Capacitor, 16V, 1%, 0.01uF, C0G, 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "KBU606G",
        "description": "Bridge Rectifier Diode, 1 Phase, 6A, 800V",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "MMK5103J100J01L4BULK",
        "description": "Cap Film 0.01uF 100V PET 5% Radial",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "CD5FC101JO3F",
        "description": "Cap Mica 100pF 300V 5% Radial",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "CD4066BM96",
        "description": "4-channel analog switch 14-SOIC, 20V",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "MFR50SFTE52-1K2",
        "description": "Fixed Resistor, Metal Film, 0.5W, 1200ohm, 300V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "BZX79C10",
        "description": "Zener Single Diode, 10 V, 500 Mw, DO-35",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "RK73H2ATTD1200F",
        "description": "Res Thick Film 0805 120 Ohm 1% 0.25W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RK73H2ATTD6801F",
        "description": "Res Thick Film 0805 6.8K Ohm 1% 0.25W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "SFR25H0001008FR500",
        "description": "Fixed Resistor, Metal Film, 0.5W, 1ohm, 350V",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "C0805C150F5GACTU",
        "description": "Cap Ceramic 15pF 50V C0G 1% 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "B32671L4104J",
        "description": "Film Capacitor, Polypropylene, 400V, 0.1uF",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "RB520S30T1G",
        "description": "Schottky Barrier Diode 30 V 1 uA Surface Mount",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "VJ0805A101JXAAC",
        "description": "Ceramic Capacitor, 50V, C0G, 0.0001uF, 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "LM324NSR",
        "description": "LM324 op amp buffer circuit 1200kHz",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "RC0805FR-1310RL",
        "description": "RC Series 0805 0.125 W 10 Ohm ±1% Thick Film",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "CRCW08050000Z0EA",
        "description": "CRCW Series 0805 0 Ohm Jumper",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "VJ1206Y105JXJTW1BC",
        "description": "Capacitor, ceramic, 1Uf, 16V, X7R, 1206",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "MF1/2DCT52R47R0F",
        "description": "Fixed Resistor, Metal Film, 0.5W, 47ohm, 350V",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "R82EC1220DQ50J",
        "description": "Cap Film 0.0022uF 100V PET 5% Radial",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "CRCW080515K0FKEAC",
        "description": "Res Thick Film 0805 15K Ohm 1% 0.125W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "CRGCQ0805J22R",
        "description": "Res Thick Film 0805 22 Ohm 5% 0.125W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "BS170-D75Z",
        "description": "N-Channel Small Signal MOSFET 60V, 500mA",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "SFR16S0005600FR500",
        "description": "Fixed Resistor, Metal Film, 0.5W, 560ohm, 200V",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "BZX85C10",
        "description": "Zener Diode, 10V, 1W, DO-204AL",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "3296W-1-102RLF",
        "description": "Trimmer, Cermet, 0.5W, 1000ohm, 25 Turn",
        "category": "Potentiometers",
        "inStock": true
    },
    {
        "partNumber": "SR-5-3.15A-BK",
        "description": "Fuse Cartridge Slow Blow 3.15A 250V",
        "category": "Fuses",
        "inStock": true
    },
    {
        "partNumber": "5499922-4",
        "description": "Conn Ejector Header 20 POS 2.54mm",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "796634-5",
        "description": "TERMINAL BLOCK CONNECTOR PLUG 5.08 MM 15 A",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "BS-7",
        "description": "Battery Holder 1 Cells Glass/Nylon",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "CEM-1606",
        "description": "16 mm, 6 Vo-p, 96 dB, Through Hole, Sealed, Magnetic Audio Transducer Buzzer",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "OPI1264C",
        "description": "Transistor Output Optocoupler, Isolation 10000V",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "5499922-9",
        "description": "Conn Ejector Header HDR 40 POS 2.54mm Solder ST Top Entry Thru-Hole Tray",
        "category": "Connectors",
        "manufacturer": "ST",
        "inStock": true
    },
    {
        "partNumber": "MFR-25FRF52-10R",
        "description": "Fixed Resistor, Metal Film, 0.25W, 10ohm, 250V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "MFR-25FRF52-330R",
        "description": "Fixed Resistor, Metal Film, 0.25W, 330ohm, 250V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "MFR-25FRF52-33R",
        "description": "Fixed Resistor, Metal Film, 0.25W, 33ohm, 250V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "MFR-25FRF52-270R",
        "description": "Fixed Resistor, Metal Film, 0.25W, 270ohm, 250V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "MFR-25FRF52-220R",
        "description": "Fixed Resistor, Metal Film, 0.25W, 220ohm, 250V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "MFR-25FRF52-2K74",
        "description": "Fixed Resistor, Metal Film, 0.25W, 2740ohm, 250V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "MFR-25FRF52-1K2",
        "description": "Fixed Resistor, Metal Film, 0.25W, 1200ohm, 250V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "MFR-25FRF52-240R",
        "description": "Fixed Resistor, Metal Film, 0.25W, 240ohm, 250V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "MFR-25FRF52-47R",
        "description": "Fixed Resistor, Metal Film, 0.25W, 47ohm, 250V, 1%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RMCF0805FT4K70",
        "description": "Res Thick Film 0805 4.7K Ohm 1% 0.125W Automotive",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RMCF0805ZTOR00",
        "description": "Res Thick Film 0805 0 Ohm Jumper 1/8W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RMCF0805FT150R",
        "description": "Res Thick Film 0805 150 Ohm 1% 0.125W Automotive",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RMCF0805JT1K00",
        "description": "Res Thick Film 0805 1K Ohm 5% 0.125W Automotive",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RMCF1206FT47K0",
        "description": "Res Thick Film 1206 47K Ohm 1% 0.25W Automotive",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "0805B104K500CT",
        "description": "0805 0.1 uF 50V ±10% X7R Surface Mount Multilayer Ceramic Capacitor",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "RMCF0805FT100K",
        "description": "Res Thick Film 0805 100K Ohm 1% 0.125W Automotive",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RMCF1206JT10K0",
        "description": "Res Thick Film 1206 10K Ohm 5% 0.25W Automotive",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RMCF0805JT330R",
        "description": "Res Thick Film 0805 330 Ohm 5% 0.125W Automotive",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RMCF0805FT47K0",
        "description": "Res Thick Film 0805 47K Ohm 1% 0.125W Molded SMD Paper",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "MMA8652FCR1",
        "description": "MMA8652FC Series 3.6 V SMT 3-Axis 12-Bit Digital Accelerometer DFN-10",
        "category": "Sensors",
        "inStock": true
    },
    {
        "partNumber": "PCA9509PDP,118",
        "description": "I2C/SMBus Repeater, Buffers",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "OTPE40FP",
        "description": "Ground terminal pole for use on OT16-OT40",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "SK54A",
        "description": "Rectifier Diode Schottky 40V 5A Automotive 2-Pin SMA",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "P6KE180A",
        "description": "P6KE Series 171 V 600 W Through Hole Uni-Directional TVS Diode DO-204AC",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "5GTH9208222",
        "description": "SWITCH TACTILE SPST-NO 0.05A 24V",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "CBR2S-M",
        "description": "Cable Tie, 7-1/2 in L, Natural, Nylon 6/6, 50 lb Strength",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "595-RCV420JP",
        "description": "Instrumentation Amplifier, 1 Func, 1000uV Offset-Max, PDIP16",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "CMA 5Z14",
        "description": "PUSH-PULL PLUG WITH 14 CONTACTS",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "TBD62003AFWG",
        "description": "Toshiba Transistor Array",
        "category": "Transistors",
        "manufacturer": "Toshiba",
        "inStock": true
    },
    {
        "partNumber": "IXFH12N120P",
        "description": "MOSFET N-CH 1200V 12A TO-247",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "PZT2907A,115",
        "description": "Transistor PNP Switching 60V 600mA SOT-223",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "TOP249YN",
        "description": "AC/DC Converter, Flyback, TO-220",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "OCE16-2",
        "description": "N/A",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "CRCW060318K0FKEAC",
        "description": "Res Thick Film 0603 18K Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "CRCW060362K0FKEAC",
        "description": "Res Thick Film 0603 62K Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RC0603JR-075K1L",
        "description": "Res Thick Film 0603 5.1K Ohm 5% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "SM05-TP",
        "description": "TVS Diode 5VWM 9.8VC SOT23",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "CRCW0603150RFKEAHP",
        "description": "Res Thick Film 0603 150 Ohm 1% 0.25W High Power",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "70IMX7-12-12-8G",
        "description": "DC/DC Converter 7W 12V 12V",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "SS-01GL",
        "description": "Switch Snap Action SPDT 100mA 30V",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "C947U472MZVDAA7317",
        "description": "Cap Ceramic 4700pF 440VAC Y5V 20% Radial",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "NHD-0212WH-AYYH-JT#",
        "description": "LCD Module Character 12x2 Yellow/Green",
        "category": "Displays",
        "inStock": true
    },
    {
        "partNumber": "RC1206FR-0731R6L",
        "description": "Res Thick Film 1206 31.6 Ohm 1% 0.25W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "SN74LVC541ARGYR",
        "description": "IC BUF NON-INVERT 3.6V 20VQFN",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "EMK105ABJ474KV-F",
        "description": "Cap Ceramic 0.47uF 16V X5R 10% 0402",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "T93YB504KT20",
        "description": "Trimmer 500K Ohm 0.5W PC Pin Top Adjust",
        "category": "Potentiometers",
        "inStock": true
    },
    {
        "partNumber": "B72207S0950K101",
        "description": "Varistor 95V 1.2kA Disc 7mm",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "H130A-25.000-18-F-2030-EXT-TR",
        "description": "Crystal 25.000MHz 18pF SMD",
        "category": "Crystals",
        "inStock": true
    },
    {
        "partNumber": "MCP6V06-E/SN",
        "description": "Op Amp Dual Auto-Zero Rail-to-Rail I/O 5.5V 8-Pin SOIC",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "3240160",
        "description": "Ring cable lug, non-insulated, 0.5-1 mm2, M6",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "IRM-30-15",
        "description": "AC/DC Converter 15V 30W",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "TA1S8-C",
        "description": "Cable Tie Mount, 4-Way, Adhesive, #8 Screw",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "74LVC245APW",
        "description": "IC TXRX NON-INVERT 3.6V 20TSSOP",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "BZT52H-C3V6,115",
        "description": "Diode Zener 3.6V 375mW SOD123F",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "LTL-4291N",
        "description": "LED 3MM Green Diffused",
        "category": "Fuses",
        "inStock": true
    },
    {
        "partNumber": "FMP200FRF52-10K",
        "description": "Res Metal Film 10K Ohm 1% 2W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "VC1622-GYY-JC",
        "description": "LED Panel Mount Indicator",
        "category": "LEDs",
        "inStock": true
    },
    {
        "partNumber": "IS01042QDWVRQ1",
        "description": "DGTL ISO 5000VRMS 2CH GP 16SOIC",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "LTL-1CHG",
        "description": "LED Green Diffused 3mm T-1 Through Hole",
        "category": "Fuses",
        "inStock": true
    },
    {
        "partNumber": "08055C330KAT2A",
        "description": "Cap Ceramic 33pF 50V X7R 10% 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "CD4013BM96",
        "description": "IC FF D-TYPE DUAL 1BIT 14SOIC",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "BC847C,215",
        "description": "Transistor NPN 45V 0.1A SOT23",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "MMBT3906,215",
        "description": "Transistor PNP 40V 0.2A SOT23",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "MF0207FRE52-1M",
        "description": "Res Metal Film 1M Ohm 1% 0.6W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "501645-1220",
        "description": "Conn Housing 12 POS 2.0mm",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "HMC789ST89ETR",
        "description": "IC AMP CEL 700MHZ-2.8GHZ SOT89",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "CU4S0506BC-2350-00",
        "description": "Isolator / Circulator",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "DS145-16A",
        "description": "Diode Gen Purp 1.6kV 145A DO205",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "B72220P3351K101",
        "description": "Varistor 560V 8kA Disc 20mm",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "5KP12CA",
        "description": "TVS Diode 12V 19.9V P600",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "UA-20PMFP-LC7001",
        "description": "USB 2.0 A Type Connector",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "6-1393243-3",
        "description": "Relay Gen Purpose DPDT 8A 12V",
        "category": "Relays",
        "inStock": true
    },
    {
        "partNumber": "TLV70333DBVR",
        "description": "IC REG LINEAR 3.3V 300MA SOT23-5",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "ADUM5211ARSZ",
        "description": "DGTL ISO 2500VRMS 2CH GP 20SSOP",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "1.5KE18A",
        "description": "TVS Diode 15.3V 25.2V DO201",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "PMBT3904,215",
        "description": "Transistor NPN 40V 0.2A SOT23",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "RC0805JR-07300RL",
        "description": "Res Thick Film 0805 300 Ohm 5% 0.125W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "PHE845VW7100MR06L2",
        "description": "Cap Film 1uF 760V PP Radial",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "1N5349BRLG",
        "description": "Diode Zener 12V 5W AXIAL",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "851-05/006",
        "description": "Circular Connector, 6 Contact",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "3306K1-101-",
        "description": "Trimmer 100 Ohm 0.2W Top Adjust",
        "category": "Potentiometers",
        "inStock": true
    },
    {
        "partNumber": "SMBJ10CA",
        "description": "TVS Diode 10V 17V SMB",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "2035-23-SM-RPLF",
        "description": "Gas Discharge Tube 230V 2-Pole SMD",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "RC0603FR-0723K7L",
        "description": "Res Thick Film 0603 23.7K Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "ERJ8ENF4991V",
        "description": "Res Thick Film 1206 4.99K Ohm 1% 0.25W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "B45196H4476K409",
        "description": "Cap Tant 47uF 20V 10% 2917",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "CRCW120610R0FKTABC",
        "description": "Res Thick Film 1206 10 Ohm 1% 0.25W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "ABLSG-16-000MHZ-15-D2Y-T",
        "description": "Crystal 16MHz 18pF SMD",
        "category": "Crystals",
        "inStock": true
    },
    {
        "partNumber": "MRS25000C332FCT00",
        "description": "Res Metal Film 3.32 Ohm 1% 0.6W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "LQG15HS2N7S02D",
        "description": "Inductor RF Chip 2.7nH 0.3A 0402",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "HSCMRNN015PDSA3",
        "description": "Sensor Pressure 15PSI Differential 3.3V",
        "category": "Sensors",
        "inStock": true
    },
    {
        "partNumber": "V23079B1205B301",
        "description": "Relay Signal DPDT 2A 24V",
        "category": "Relays",
        "inStock": true
    },
    {
        "partNumber": "5745116-2",
        "description": "Conn D-Sub Plug 37 POS Solder Cup",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "DLW5BTM102SQ2L",
        "description": "Common Mode Choke 1000 Ohm 1.5A 2020",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "163A18219X",
        "description": "D-Sub High Density Connector",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "08051C104MAT2A",
        "description": "Cap Ceramic 0.1uF 100V X7R 20% 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "GRM0335C1E7R0CA01D",
        "description": "Cap Ceramic 7pF 25V C0G 0201",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "LQW15AN30NJ00D",
        "description": "Inductor RF Chip 30nH 0.26A 0402",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "ISP817XSM",
        "description": "Optocoupler Transistor Output 5kV 4SMD",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "DSPIC33FJ16GS402-I/SP",
        "description": "IC MCU 16BIT 16KB FLASH 28SDIP",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "GCM155R71H122KA37D",
        "description": "Cap Ceramic 1200pF 50V X7R 0402",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "PN5321A3HN/C106,51",
        "description": "IC NFC CTRLR 40HVQFN",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "RC0603JR-071K8L",
        "description": "Res Thick Film 0603 1.8K Ohm 5% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "DW-15-14-T-D-1140",
        "description": "Conn Board Stacker HDR 30 POS 2.54mm",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "MFBM1V1608-300-R",
        "description": "Ferrite Bead 30 Ohm 0603",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "SFR2500006650FR500",
        "description": "Fixed Resistor, Metal Film, 0.4W, 6.65M ohm, 250V",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "GQM22M5C2H3R3BB01L",
        "description": "Cap Ceramic 3.3pF 500V C0G 0.1pF 1111",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "RC0603FR-07220RL",
        "description": "Res Thick Film 0603 220 Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "CRCW08051M50JNEA",
        "description": "Res Thick Film 0805 1.5M Ohm 5% 0.125W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "CC1206KRX7R0BB103",
        "description": "Cap Ceramic 0.01uF 100V X7R 10% 1206",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "CRCW08058K20FKEA",
        "description": "Res Thick Film 0805 8.2K Ohm 1% 0.125W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "L78L33ACUTR",
        "description": "IC REG LINEAR 3.3V 100MA SOT89-3",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "CL31A106KAHNFNE",
        "description": "Cap Ceramic 10uF 25V X5R 1206",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "KSC5502DTM",
        "description": "Transistor NPN 600V 2A D-PAK",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "B88069X8300B502",
        "description": "Gas Discharge Tube 230V 20KA 2 Pole",
        "category": "Protection",
        "inStock": true
    },
    {
        "partNumber": "3296W1-205LF",
        "description": "Trimmer 2M Ohm 0.5W PC Pin Top Adjust",
        "category": "Potentiometers",
        "inStock": true
    },
    {
        "partNumber": "SS14-M3/5AT",
        "description": "Diode Schottky 40V 1A DO214AC",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "1N4001-E3/53",
        "description": "Diode Gen Purp 50V 1A DO204AL",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "ERA-3AEB1473V",
        "description": "Res Metal Film 0603 147K Ohm 0.1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "CC0805KPX7R9BB103",
        "description": "Cap Ceramic 0.01uF 50V X7R 10% 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "CC0805KPX7R0BB221",
        "description": "Cap Ceramic 220pF 100V X7R 10% 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "VY1102M29Y5VQ63V0",
        "description": "Cap Ceramic 1000pF 760VAC Y5V Radial",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "ESW337M035AG6AA",
        "description": "Cap Alum 330uF 35V 20% Radial",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "BAT48JFILM",
        "description": "Diode Schottky 40V 350mA SOD323",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "7508112341",
        "description": "Transformer Flyback 12V 10W",
        "category": "Transformers",
        "inStock": true
    },
    {
        "partNumber": "RC0603FR-07750RL",
        "description": "Res Thick Film 0603 750 Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "29802",
        "description": "VOLTAGE DETECTION SENSOR MODULE 235V",
        "category": "Sensors",
        "inStock": true
    },
    {
        "partNumber": "34912-8021",
        "description": "Conn Housing 2 POS 2.54mm",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "US1D_R1_00001",
        "description": "Diode Gen Purp 200V 1A SMA",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "C0603C472K1TACAUTO",
        "description": "Cap Ceramic 4700pF 100V X7R 0603",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "PIC16F1788T-I/SS",
        "description": "IC MCU 8BIT 28KB FLASH 28SSOP",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "691373500012B",
        "description": "Term Block Plug 12 POS 5.08mm",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "TMOV14RP200EL2T7",
        "description": "Varistor 200V 6kA Disc 14mm",
        "category": "Varistors",
        "inStock": true
    },
    {
        "partNumber": "PH9185.021NLT",
        "description": "Transformer Pulse 3000Vrms",
        "category": "Transformers",
        "inStock": true
    },
    {
        "partNumber": "H11D1SR2M",
        "description": "Optoisolator 4.17kV Transistor 6SMD",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "RT1206FRE07240RL",
        "description": "Res Thin Film 1206 240 Ohm 1% 0.25W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "SSL-LX25783GD",
        "description": "LED Green Diffused Rectangular",
        "category": "Fuses",
        "inStock": true
    },
    {
        "partNumber": "LM339DT",
        "description": "IC COMP QUAD LOW POWER 14SOIC",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "CM309S-24.0000MABJ-UT",
        "description": "Crystal 24MHz 18pF SMD",
        "category": "Crystals",
        "inStock": true
    },
    {
        "partNumber": "06035C104K4T2A",
        "description": "Cap Ceramic 0.1uF 50V X7R 0603",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "SHT40-AD1F-R2",
        "description": "Sensor Humidity/Temp I2C 4DFN",
        "category": "Sensors",
        "inStock": true
    },
    {
        "partNumber": "1-66107-1",
        "description": "Conn Socket 20-24AWG Crimp Gold",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "173109-0170",
        "description": "D-Sub Connector 15 Pos",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "CRCW080511K0FKEA",
        "description": "Res Thick Film 0805 11K Ohm 1% 0.125W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "DLMONSM900HY2D",
        "description": "Common Mode Choke 900mA 2 Line SMD",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "RCLAMP0504FBTCT",
        "description": "TVS Diode 5V 15V SOT23-6",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "STM1818SWX7F",
        "description": "IC Supervisor 1 Channel SOT23-3",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "MC0805B683K500CT",
        "description": "Cap Ceramic 0.068uF 50V X7R 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "ZE064W-8DS-HU/R(A)",
        "description": "Conn Housing 8 POS",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "PR01000101509JR500",
        "description": "Res Metal Film 15 Ohm 5% 1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "208130-1",
        "description": "Conn Circular Housing 4 POS",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "RC16M23K",
        "description": "Conn Pin Crimp 16-20AWG",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "UTS6JC147S",
        "description": "Conn Plug Female Sockets 7 Pos",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "2EZ13D5-TP",
        "description": "Diode Zener 13V 2W DO41",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "MCS3264R025FER",
        "description": "Res Current Sense 0.025 Ohm 1% 2W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "206136-1",
        "description": "Conn Circular Shell Size 17",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "E-TDA7375AV",
        "description": "IC Amp Audio Class AB Dual/Quad",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "RM24M9K",
        "description": "Contact Pin Crimp 24-26AWG",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "HMTSW-112-21-T-D-1150",
        "description": "Conn Header 24 POS 2.54mm",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "68000-103HLF",
        "description": "Conn Header 3 POS 2.54mm",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "STM32G0B1CET6N",
        "description": "IC MCU 32BIT 512KB FLASH 48LQFP",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "RR1220P1431-D-M",
        "description": "Res Thin Film 0805 1.43K Ohm 0.5%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "CO-174SMAX200-004",
        "description": "Cable Assy Coaxial SMA",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "2132230-8",
        "description": "Conn Battery Holder",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "DF2B7AFS,L3M",
        "description": "Diode Zener 6.8V 200mW SOD923",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "DSPIC364GP804IPT",
        "description": "IC MCU 16BIT 44TQFP",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "LQG15HS3N0B02D",
        "description": "Inductor RF Chip 3nH 0.3A 0402",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "ECA-1HM102",
        "description": "Cap Alum 1000uF 50V 20% Radial",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "501645-2020",
        "description": "Conn Housing 20 POS 2.0mm",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "66261-1",
        "description": "Contact Socket Crimp Gold",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "GMK107B7104KAHT",
        "description": "Cap Ceramic 0.1uF 35V X7R 0603",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "GJM0335C1E3R0BB01D",
        "description": "Cap Ceramic 3pF 25V C0G 0201",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "GCM155R71C104KA55D",
        "description": "Cap Ceramic 0.1uF 16V X7R 0402",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "R82MC1470Z350J",
        "description": "Cap Film 4700pF 400V Radial",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "MT18B104K250CT",
        "description": "Cap Ceramic 0.1uF 25V X7R 0603",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "RT0805BRD0716R2L",
        "description": "Res Thin Film 0805 16.2 Ohm 0.1% 0.125W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "CR0805-JW-333ELF",
        "description": "Res Thick Film 0805 33K Ohm 5% 0.125W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "VS-12TQ035S-M3",
        "description": "Diode Schottky 35V 15A D2PAK",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "PN5321A3HN/C106,55",
        "description": "IC NFC Controller 40HVQFN",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "776164-1",
        "description": "Conn Housing 35 Pos",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "PIC18F27K42-I/SO",
        "description": "IC MCU 8BIT 128KB FLASH 28SOIC",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "643231029",
        "description": "Conn Header 32 Pos",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "RC0603FR-07120RL",
        "description": "Res Thick Film 0603 120 Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "ERJ3GEYJ104V",
        "description": "Res Thick Film 0603 100K Ohm 5% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "MMBD4148SE-TP",
        "description": "Diode Gen Purp 100V 200mA SOT23",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "T2111028101-000",
        "description": "Conn Heavy Duty Insert",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "5.0SMDJ20CA",
        "description": "TVS Diode 20V 32.4V SMC",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "TXN625RG",
        "description": "SCR 600V 25A TO220",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "XAL5050-822MEC",
        "description": "Inductor Power 8.2uH 4.6A SMD",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "TZE-211",
        "description": "Tape Cassette Black on White 6mm",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "CNY17-2X",
        "description": "Optoisolator 5.3kV Transistor 6DIP",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "UTS7147S",
        "description": "Conn Receptacle Female Sockets 7 Pos",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "M2,5/6502304",
        "description": "Screw M2.5",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "S16LC05-8",
        "description": "TVS Diode Array 5V 8 Line SO-16",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "CL10C180JB81PNC",
        "description": "Cap Ceramic 18pF 50V C0G 0603",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "S1MB-13-F",
        "description": "Diode Gen Purp 1000V 1A SMB",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "RT0402BRD07200KL",
        "description": "Res Thin Film 0402 200K Ohm 0.1% 0.063W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "C3225X7R1N106K250AC",
        "description": "Cap Ceramic 10uF 75V X7R 1210",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "SN74AUP1G125DCKR",
        "description": "IC Buf Non-Invert 3.6V SC70-5",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "LTV-214",
        "description": "Optoisolator 3.75kV Transistor 4SSOP",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "RC0603FR-073K3L",
        "description": "Res Thick Film 0603 3.3K Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RC0603FR-0749R9L",
        "description": "Res Thick Film 0603 49.9 Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "CRCW0402383KFKED",
        "description": "Res Thick Film 0402 383K Ohm 1% 0.063W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "VS-FR-2312",
        "description": "Ferrite Ring",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "TZM5226B-GS08",
        "description": "Diode Zener 3.3V 500mW SOD80",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "DLW32SH101XK2L",
        "description": "Common Mode Choke 100 Ohm 300mA 1210",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "EWSA-PT100-TX",
        "description": "Sensor Temp PT100 Transmitter",
        "category": "Sensors",
        "inStock": true
    },
    {
        "partNumber": "HX711",
        "description": "IC ADC 24BIT Weigh Scale",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "MAX485ESA+",
        "description": "IC Transceiver Half 1/1 8SOIC",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "74LCX257M",
        "description": "IC MUX Quad 2-Input 16SOIC",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "MF-MSMF075/33X-2",
        "description": "PTC Reset Fuse 33V 750mA 1812",
        "category": "Fuses",
        "inStock": true
    },
    {
        "partNumber": "PIC32MX564F128H-I/PT",
        "description": "IC MCU 32BIT 128KB FLASH 64TQFP",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "733-333",
        "description": "Conn Header 3 POS 2.5mm",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "LGN2W101MELA25",
        "description": "Cap Alum 100uF 450V Snap-In",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "PATCH CABLE S/FTP CAT.6 1.0M GREEN",
        "description": "Patch cable S/FTP Cat.6, 1.0m Green",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "PATCH CABLE S/FTP CAT.6 3.0M BLUE",
        "description": "Patch cable S/FTP Cat.6, 3.0m Blue",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "PATCH CABLE S/FTP CAT.6 5.0M GREY",
        "description": "Patch cable S/FTP Cat.6, 5.0m Grey",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "TCJD156M035R0070E",
        "description": "Cap Tant Polymer 15uF 35V 2917",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "TPD4E001DBVR",
        "description": "TVS Diode Array 5.5V SOT23-6",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "WAGO 733-103/037-000",
        "description": "Conn Header 3 POS 2.5mm",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "BCP-508-2",
        "description": "Conn Plug 2 POS 5.08mm",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "DFK-MSTB2.5/2-G-5.08",
        "description": "Conn Header 2 POS 5.08mm",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "06033C100KAT2A",
        "description": "Cap Ceramic 10pF 25V X7R 0603",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "DFS-48EFS0-312",
        "description": "Fan 48VDC",
        "category": "Fans",
        "inStock": true
    },
    {
        "partNumber": "SI4948BEY-T1-E3",
        "description": "MOSFET 2N-CH 60V 2.3A 8SOIC",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "GRM21BR71C105KA01L",
        "description": "Cap Ceramic 1uF 16V X7R 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "MMBT3904,215",
        "description": "Transistor NPN 40V 0.2A SOT23",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "RK73B1ETTP103J",
        "description": "Res Thick Film 0402 10K Ohm 5%",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "BC857C,215",
        "description": "Transistor PNP 45V 0.1A SOT23",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "BAS16J,115",
        "description": "Diode Gen Purp 100V 215mA SOD323F",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "74HCT595D,118",
        "description": "IC Shift Register 8Bit 16SOIC",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "R-78K12-1.0",
        "description": "DC/DC Converter 12V 1A SIP",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "3-520339-2",
        "description": "Conn Housing",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "1062-16-0644",
        "description": "Contact Socket Crimp 16-20AWG",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "CL31A476MPHNNNE",
        "description": "Cap Ceramic 47uF 10V X5R 1206",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "Q14P3CXXR24E",
        "description": "LED Panel Mount Red 24V",
        "category": "LEDs",
        "inStock": true
    },
    {
        "partNumber": "Q14P3CXXG24E",
        "description": "LED Panel Mount Green 24V",
        "category": "LEDs",
        "inStock": true
    },
    {
        "partNumber": "HF118F/005-1ZS1T",
        "description": "Relay Gen Purp SPDT 10A 5V",
        "category": "Relays",
        "inStock": true
    },
    {
        "partNumber": "475531001",
        "description": "Conn SIM Card Holder",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "PT-IR300BH",
        "description": "Ink Ribbon Black for Printer",
        "category": "Others",
        "inStock": true
    },
    {
        "partNumber": "39-01-2020",
        "description": "Conn Housing 2 Pos",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "PMEG3010BEA,115",
        "description": "Diode Schottky 30V 1A SOD323",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "LTR-329ALS-01",
        "description": "Sensor Ambient Light I2C",
        "category": "Sensors",
        "inStock": true
    },
    {
        "partNumber": "HDRA-E68MA",
        "description": "Conn SCSI 68 Pos",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "PVC Patch cable S/FTP Cat.6 20.0m grey",
        "description": "Patch cable S/FTP Cat.6, 20.0m Grey",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "282080-1",
        "description": "Conn Housing 2 Pos Sealed",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "C0805C221J1GACAUTO",
        "description": "Cap Ceramic 220pF 100V C0G 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "JF10.000000-49S/SMD",
        "description": "Crystal 10MHz 49S SMD",
        "category": "Crystals",
        "inStock": true
    },
    {
        "partNumber": "WM-2S",
        "description": "Conn Housing",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "IAUC60N10S5L110ATMA1",
        "description": "MOSFET N-CH 100V 60A",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "7114-4152-02",
        "description": "Terminal Crimp",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "EXLA1V0402-1R5-R",
        "description": "Inductor Power 1.5uH",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "S7B-PH-SM4-TB",
        "description": "Conn Header 7 POS 2.0mm",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "IRF7342PBF",
        "description": "MOSFET 2P-CH 55V 3.4A 8SOIC",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "CC0805KRX7R9BB104",
        "description": "Cap Ceramic 0.1uF 50V X7R 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "GRM31CR71A226KE15L",
        "description": "Cap Ceramic 22uF 10V X7R 1206",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "UTS71823S",
        "description": "Conn Receptacle Female Sockets 23 Pos",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "GL-PVC-SFTP-6-20M-BL-08",
        "description": "Patch cable S/FTP Cat.6 20m blue",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "TLV1117-33IDCYR",
        "description": "Fixed 3.3V Positive Voltage Regulator LDO SOT-223",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "ST2106C03447",
        "description": "Conn Header 40 Pos 2.54mm",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "BC847C,215",
        "description": "Transistor NPN 45V 0.1A SOT23",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "Q8P3CXXG24E",
        "description": "LED Panel Mount Green 24V",
        "category": "LEDs",
        "inStock": true
    },
    {
        "partNumber": "SA3-E-72-SRTC",
        "description": "Thermocouple Adhesive Patch Type K",
        "category": "Sensors",
        "inStock": true
    },
    {
        "partNumber": "ZGTH-0,25A",
        "description": "Fuse 0.25A Ceramic",
        "category": "Fuses",
        "inStock": true
    },
    {
        "partNumber": "39-00-0038",
        "description": "Contact Socket Crimp 18-24AWG",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "280919-2",
        "description": "Conn Housing 2 Pos",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "908-43300",
        "description": "Conn Housing",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "EASTMAN COMBINATION SPANNER 13 MM",
        "description": "Spanner 13mm Combination",
        "category": "Tools",
        "inStock": true
    },
    {
        "partNumber": "560085-0101",
        "description": "Conn Header 2 Pos",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "MPXV1D1250L150",
        "description": "Inductor Power 15uH",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "C0805C105J4REC7210",
        "description": "Cap Ceramic 1uF 16V X7R 5% 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "DRA-60-12",
        "description": "AC/DC DIN Rail PS 12V 60W",
        "category": "Power",
        "inStock": true
    },
    {
        "partNumber": "LM358ADR",
        "description": "IC OpAmp Dual 700kHz 8SOIC",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "MMBT5551LT1G",
        "description": "Transistor NPN 160V 0.6A SOT23",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "RC0603FR-0733RL",
        "description": "Res Thick Film 0603 33 Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "M24C32-RMN6TP",
        "description": "IC EEPROM 32K I2C 1MHz 8SO",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "IIS3DWBTR",
        "description": "Sensor Accel 3-Axis Digital",
        "category": "Sensors",
        "inStock": true
    },
    {
        "partNumber": "ECS-.327-9-34B-TR",
        "description": "Crystal 32.768kHz 9pF SMD",
        "category": "Crystals",
        "inStock": true
    },
    {
        "partNumber": "CC0402BRNPO9BNR80",
        "description": "Cap Ceramic 0.8pF 50V C0G 0402",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "RC0603FR-071KL",
        "description": "Res Thick Film 0603 1K Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "AT24CM02-SSHD-B",
        "description": "IC EEPROM 2M I2C 1MHz 8SOIC",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "RURP1560-F085P",
        "description": "Diode Gen Purp 600V 15A TO220",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "C0402C121K8RACTU",
        "description": "Cap Ceramic 120pF 10V X7R 0402",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "CL21B225KBYNNWE",
        "description": "Cap Ceramic 2.2uF 50V X7R 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "UUD1E471MNL1GS",
        "description": "Cap Alum 470uF 25V SMD",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "GCM0335C1H180FA16D",
        "description": "Cap Ceramic 18pF 50V C0G 0201",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "CL05A225KP5NSNC",
        "description": "Cap Ceramic 2.2uF 10V X5R 0402",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "GRM155R71E473KA88D",
        "description": "Cap Ceramic 0.047uF 25V X7R 0402",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "C0402C103J1RACTU",
        "description": "Cap Ceramic 0.01uF 100V X7R 0402",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "GCM1555C1H270JA16D",
        "description": "Cap Ceramic 27pF 50V C0G 0402",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "CL05A106MP8NUB8",
        "description": "Cap Ceramic 10uF 10V X5R 0402",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "ESD9L5.0ST5G",
        "description": "TVS Diode 5V 9.8V SOD923",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "BZT52C12T-7",
        "description": "Diode Zener 12V 300mW SOD523",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "PE1605M1Q_R1_00001",
        "description": "TVS Diode 5V 15V SOT23-6",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "GG040205170N2P",
        "description": "Varistor 17V 20A 0402",
        "category": "Varistors",
        "inStock": true
    },
    {
        "partNumber": "FBMJ2125HM210NT",
        "description": "Ferrite Bead 21 Ohm 1206",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "BLM15PD300SZ1D",
        "description": "Ferrite Bead 30 Ohm 0402",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "DPC817S-B-TR",
        "description": "Optoisolator 5kV Transistor 4SMD",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "DX07S024JJ2R1300",
        "description": "USB Type C Receptacle",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "E5J88-41LHS4-L",
        "description": "Conn Modular Jack 8P8C",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "MWSA0518S-1R5MT",
        "description": "Inductor Power 1.5uH",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "CRCW0402453KFKED",
        "description": "Res Thick Film 0402 453K Ohm 1% 0.063W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RNCP0402FTD10K0",
        "description": "Res Thin Film 0402 10K Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "CRCW0603294RFKEA",
        "description": "Res Thick Film 0603 294 Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "ERJ-6ENF1004V",
        "description": "Res Thick Film 0805 1M Ohm 1% 0.125W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "ERJ-2RKF1691X",
        "description": "Res Thick Film 0402 1.69K Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RC0603FR-07137KL",
        "description": "Res Thick Film 0603 137K Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RMCF0603ZTOR00",
        "description": "Res Thick Film 0603 0 Ohm Jumper",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RC0402JR-0710KL",
        "description": "Res Thick Film 0402 10K Ohm 5% 0.063W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "ERJ-2RKF1131X",
        "description": "Res Thick Film 0402 1.13K Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RMCF0402FT4K53",
        "description": "Res Thick Film 0402 4.53K Ohm 1% 0.063W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "ERJ-1GNF4701C",
        "description": "Res Thick Film 0201 4.7K Ohm 1% 0.05W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RC0201DR-074K7L",
        "description": "Res Thick Film 0201 4.7K Ohm 0.5% 0.05W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "CRCW0402330RJNEDC",
        "description": "Res Thick Film 0402 330 Ohm 5% 0.063W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "453-00194R",
        "description": "Module Bluetooth Low Energy",
        "category": "Modules",
        "inStock": true
    },
    {
        "partNumber": "ERA-2AEB152X",
        "description": "Res Metal Film 0402 1.5K Ohm 0.1% 0.063W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "DM3BT-DSF-PEJS",
        "description": "Conn Micro SD Card Push-Push",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "SMBJ58A-13-F",
        "description": "TVS Diode 58V 93.6V SMB",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "RC0603FR-07100KL",
        "description": "Res Thick Film 0603 100K Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RC0603FR-07178KL",
        "description": "Res Thick Film 0603 178K Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RC0805FR-07120RL",
        "description": "Res Thick Film 0805 120 Ohm 1% 0.125W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "MMBZ5V6ALT1G",
        "description": "TVS Diode 3V 8V SOT23",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "AP2161WG-7",
        "description": "IC Power Switch USB 1CH SOT25",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "SMT-0827-S-HT-R",
        "description": "Audio Transducer Buzzer SMD",
        "category": "Audio",
        "inStock": true
    },
    {
        "partNumber": "CC0402KRX7R7BB101",
        "description": "Cap Ceramic 100pF 16V X7R 0402",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "GRM155C71A105KE11D",
        "description": "Cap Ceramic 1uF 10V X7S 0402",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "0402B104K160CT",
        "description": "Cap Ceramic 0.1uF 16V X7R 0402",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "PMEG3050EP,115",
        "description": "Diode Schottky 30V 5A SOD128",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "PCA9451AHNY",
        "description": "IC Power Mgmt I2C 24HVQFN",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "FDS4435BZ",
        "description": "MOSFET P-CH 30V 8.8A 8SOIC",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "PCF2131TFY",
        "description": "IC RTC Clock/Calendar I2C/SPI",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "FDMQ8205A",
        "description": "MOSFET Bridge Rectifier 60V",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "WSL2010R0100FEA18",
        "description": "Res Current Sense 0.01 Ohm 1% 1W 2010",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "2N7002-7-F",
        "description": "MOSFET N-CH 60V 115mA SOT23",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "SI2347DS-T1-GE3",
        "description": "MOSFET P-CH 30V 3.8A SOT23",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "TPD1E01B04DPLT",
        "description": "TVS Diode 3.6V 10V 0402",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "ECS-240-12-33Q-JES-TR",
        "description": "Crystal 24MHz 12pF SMD",
        "category": "Crystals",
        "inStock": true
    },
    {
        "partNumber": "ECS-327-12.5-34R-TR",
        "description": "Crystal 32.768kHz 12.5pF SMD",
        "category": "Crystals",
        "inStock": true
    },
    {
        "partNumber": "CRCW060375R0FKEA",
        "description": "Res Thick Film 0603 75 Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "GRM033R71H331KA12D",
        "description": "Cap Ceramic 330pF 50V X7R 0201",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "293D157X9010D2TE3",
        "description": "Cap Tant 150uF 10V 10% 2917",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "STM32WB55RGV7",
        "description": "IC MCU 32BIT 1MB FLASH 68VQFN",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "LTST-C190KRKT",
        "description": "LED Red Clear 0603",
        "category": "LEDs",
        "inStock": true
    },
    {
        "partNumber": "GRM32ER71H475KA88L",
        "description": "Cap Ceramic 4.7uF 50V X7R 1210",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "RC0201FR-07100RL",
        "description": "Res Thick Film 0201 100 Ohm 1% 0.05W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "MC0402N100J160CT",
        "description": "Cap Ceramic 10pF 16V C0G 0402",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "B5B-XH-A(LF)(SN)",
        "description": "Conn Header 5 POS 2.5mm",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "734120110",
        "description": "Conn U.FL Receptacle",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "ISM330DHCXTR",
        "description": "IMU Accel/Gyro 3-Axis I2C/SPI",
        "category": "Sensors",
        "inStock": true
    },
    {
        "partNumber": "PCAL9555APW,118",
        "description": "IC I/O Expander 16Bit I2C 24TSSOP",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "RP0603BRD0733KL",
        "description": "Res Thin Film 0603 33K Ohm 0.1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "CRCW04023K57FKED",
        "description": "Res Thick Film 0402 3.57K Ohm 1% 0.063W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "MC0603B104M160CT",
        "description": "Cap Ceramic 0.1uF 16V X7R 0603",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "PUSB3AB6Z",
        "description": "TVS Diode 5.5V SOT23-6",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "TPS48110AQDGXRQ1",
        "description": "IC Motor Driver",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "GRM188R61C475KE11D",
        "description": "Cap Ceramic 4.7uF 16V X5R 0603",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "TPSB226K010R0500",
        "description": "Cap Tant 22uF 10V 10% 1411",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "T55P475M6R3C0500",
        "description": "Cap Tant Poly 4.7uF 6.3V 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "D5V0L1B2WS-7",
        "description": "TVS Diode 5V 14V SOD323",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "1N4148W-7-F",
        "description": "Diode Gen Purp 100V 300mA SOD123",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "BLM18EG101TN1D",
        "description": "Ferrite Bead 100 Ohm 2A 0603",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "DLF162500LT-5028A1",
        "description": "Common Mode Filter",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "FFC2B35-10-T",
        "description": "Conn FFC/FPC",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "3-644457-7",
        "description": "Conn Header 7 POS 2.54mm",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "B3B-XH-A(LF)(SN)",
        "description": "Conn Header 3 POS 2.5mm",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "MLP1608H2R2BT0S1",
        "description": "Inductor Multilayer 2.2uH 0603",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "DLW43SH510XK2L",
        "description": "Common Mode Choke 51uH 1812",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "2N7002NXAKR",
        "description": "MOSFET N-CH 60V 300mA SOT23",
        "category": "Transistors",
        "inStock": true
    },
    {
        "partNumber": "RC0603FR-07120KL",
        "description": "Res Thick Film 0603 120K Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "TPS62082DSGR",
        "description": "IC Reg Buck 3.3V 1.2A 8WSON",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "1206L110THYR",
        "description": "PTC Reset Fuse 6V 1.1A 1206",
        "category": "Fuses",
        "inStock": true
    },
    {
        "partNumber": "IIS2MDCTR",
        "description": "Sensor Magnetometer 3-Axis I2C/SPI",
        "category": "Sensors",
        "inStock": true
    },
    {
        "partNumber": "HHV1WSFT-73-2M",
        "description": "Res Metal Film 2M Ohm 1% 1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "0805B471K500CT",
        "description": "Cap Ceramic 470pF 50V X7R 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "ESS107M025AE2AA",
        "description": "Cap Alum 100uF 25V 20% Radial",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "CC0603KRX7R7BB105",
        "description": "Cap Ceramic 1uF 16V X7R 0603",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "CC1206KKX7R9BB105",
        "description": "Cap Ceramic 1uF 50V X7R 1206",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "GCM155R71C104KA55J",
        "description": "Cap Ceramic 0.1uF 16V X7R 0402",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "LM1085IT-12/NOPB",
        "description": "IC Reg Linear 12V 3A TO220",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "NE555DR",
        "description": "IC Osc Single Timer 100kHz 8SOIC",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "TAJA105K020RNJ",
        "description": "Cap Tant 1uF 20V 10% 1206",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "BAV21-TR",
        "description": "Diode Gen Purp 250V 200mA DO35",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "MOSX1CT528RR15J",
        "description": "Res Metal Oxide 0.15 Ohm 5% 1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "CMF602K7000FKEK",
        "description": "Res Metal Film 2.7K Ohm 1% 1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RC0603FR-07150KL",
        "description": "Res Thick Film 0603 150K Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "RC0603FR-07100RL",
        "description": "Res Thick Film 0603 100 Ohm 1% 0.1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "AT62-20-0122",
        "description": "Contact Pin Crimp 16-22AWG",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "PFR5472F63J11L4BULK",
        "description": "Cap Film 4700pF 63V Radial",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "B32529C1104J289",
        "description": "Cap Film 0.1uF 100V Radial",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "RGP0207CHJ47M",
        "description": "Res Metal Glaze 47M Ohm 5% 0.25W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "ESL105M100AC3AA",
        "description": "Cap Alum 1uF 100V 20% Radial",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "CL05A106MP5NUNC",
        "description": "Cap Ceramic 10uF 10V X5R 0402",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "GRM21BR61A476ME15L",
        "description": "Cap Ceramic 47uF 10V X5R 0805",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "06031C103KAT2A",
        "description": "Cap Ceramic 0.01uF 100V X7R 0603",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "C1206C102KGRACTU",
        "description": "Cap Ceramic 1000pF 2000V C0G 1206",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "GRT033C71C104KE01D",
        "description": "Cap Ceramic 0.1uF 16V X7S 0201",
        "category": "Capacitors",
        "inStock": true
    },
    {
        "partNumber": "BAT54HT1G",
        "description": "Diode Schottky 30V 200mA SOD323",
        "category": "Diodes",
        "inStock": true
    },
    {
        "partNumber": "10128796-001RLF",
        "description": "Conn FFC/FPC Connector",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "MAKK2016HR47M",
        "description": "Inductor Power 0.47uH 3.3A SMD",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "SPM6530T-1R0M120",
        "description": "Inductor Power 1uH 12A SMD",
        "category": "Inductors",
        "inStock": true
    },
    {
        "partNumber": "CRCW20102R20FKEFHP",
        "description": "Res Thick Film 2010 2.2 Ohm 1% 1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "PCAL6524HEAZ",
        "description": "IC I/O Expander 24Bit I2C 32HUQFN",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "SN74AVC4T245RSVR",
        "description": "IC TxRx Dual 4Bit 3.6V 16UQFN",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "RC0402FR-072K49L",
        "description": "Res Thick Film 0402 2.49K Ohm 1% 0.063W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "TLV76033DBZR",
        "description": "IC Reg Linear 3.3V 100mA SOT23",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "TPS62827DMQR",
        "description": "IC Reg Buck Adjustable 4A 6VSON",
        "category": "ICs",
        "inStock": true
    },
    {
        "partNumber": "ECS-250-18-23A-JGN-TR",
        "description": "Crystal 25MHz 18pF SMD",
        "category": "Crystals",
        "inStock": true
    },
    {
        "partNumber": "541324562",
        "description": "Conn Header 6 Pos",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "CMF605K0000BHEK",
        "description": "Res Metal Film 5K Ohm 0.1% 1W",
        "category": "Resistors",
        "inStock": true
    },
    {
        "partNumber": "SRCN2A25-24P",
        "description": "Conn Circular Plug 24 Pos",
        "category": "Connectors",
        "inStock": true
    },
    {
        "partNumber": "FD-UNIT-01",
        "description": "Standard Fuel Dispenser Interface Unit",
        "category": "Fuel Dispenser",
        "inStock": true
    },
];

// Get unique categories
export const categories = [...new Set(products.map(p => p.category))].sort();

// Get products by category
export const getProductsByCategory = (category: string): Product[] => {
    return products.filter(p => p.category === category);
};

// Search products
export const searchProducts = (query: string): Product[] => {
    const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);

    return products.filter(p => {
        const searchText = `${p.partNumber} ${p.description} ${p.manufacturer || ''} ${p.category}`.toLowerCase();
        // All terms must be found in the product text
        return terms.every(term => searchText.includes(term));
    });
};

// Get featured products (random selection)
export const getFeaturedProducts = (count: number = 12): Product[] => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};
