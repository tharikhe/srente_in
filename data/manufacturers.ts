export interface Manufacturer {
    name: string;
    slug: string;
    logo: string;
    description: string;
    longDescription: string;
    country: string;
    website?: string;
}

export const manufacturers: Manufacturer[] = [
    {
        name: 'Firstohm',
        slug: 'firstohm',
        logo: '/brands/firstohm.png',
        description: 'Specialized Resistors',
        longDescription: 'Firstohm is a leading manufacturer of specialized resistors, known for their high quality and reliability. They offer a wide range of resistor solutions for various applications including automotive, industrial, and consumer electronics.',
        country: 'Taiwan'
    },
    {
        name: 'OCETA',
        slug: 'oceta',
        logo: '/brands/oceta.png',
        description: 'Connector Solutions',
        longDescription: 'OCETA provides high-quality connector solutions for a variety of industries. Their products are designed to ensure secure and reliable connections for all your electronic needs.',
        country: 'Taiwan'
    },
    {
        name: 'GL Fiber',
        slug: 'gl-fiber',
        logo: '/brands/gl-fiber.png',
        description: 'Optical Components',
        longDescription: 'GL Fiber specializes in optical components, delivering high-performance fiber optic solutions. Their products are essential for modern telecommunications and data transmission systems.',
        country: 'China'
    },
    {
        name: 'ViTEK',
        slug: 'vitek',
        logo: '/brands/vitek.png',
        description: 'LCD & Displays',
        longDescription: 'ViTEK is a premier manufacturer of LCDs and display technologies. They provide innovative display solutions that offer superior brightness, contrast, and energy efficiency.',
        country: 'Taiwan'
    },
    {
        name: 'SONYTEK',
        slug: 'sonytek',
        logo: '/brands/sonytek.png',
        description: 'Semiconductors',
        longDescription: 'SONYTEK is a trusted name in semiconductors, providing essential components for a vast array of electronic devices. Their commitment to quality ensures the performance of your circuits.',
        country: 'Japan'
    },
    {
        name: 'Kingtronics',
        slug: 'kingtronics',
        logo: '/brands/kingtronics.png',
        description: 'Potentiometers & Capacitors',
        longDescription: 'Kingtronics specializes in potentiometers and capacitors, offering a broad selection of components to meet precise electronic specifications. They are dedicated to delivering stable and durable parts.',
        country: 'Hong Kong'
    },
    {
        name: 'Palm Technology',
        slug: 'palm-technology',
        logo: '/brands/palm-technology.png',
        description: 'LCD Modules',
        longDescription: 'Palm Technology is an expert in LCD modules, providing custom and standard display solutions. Their modules are used in a wide range of industrial and consumer applications.',
        country: 'Taiwan'
    },
    {
        name: 'Taimates',
        slug: 'taimates',
        logo: '/brands/taimates.png',
        description: 'Battery Holders',
        longDescription: 'Taimates offers a comprehensive range of battery holders and related accessories. Their products are designed for durability and ease of use in various battery-powered devices.',
        country: 'Taiwan'
    },
    {
        name: 'Isocom',
        slug: 'isocom',
        logo: '/brands/isocom.png',
        description: 'Optocouplers',
        longDescription: 'Isocom Components is a leading manufacturer of high-performance infrared optoelectronic devices. They specialize in optocouplers and optoswitches for demanding industrial applications.',
        country: 'UK'
    },
    {
        name: 'Greenconn',
        slug: 'greenconn',
        logo: '/brands/Greenconn--.png',
        description: 'Connector Solutions',
        longDescription: 'Greenconn is a leading provider of connector solutions, known for their reliability and innovative designs.',
        country: 'International'
    },
    {
        name: 'JB Capacitors',
        slug: 'jb-capacitors',
        logo: '/brands/JB.webp',
        description: 'Capacitors',
        longDescription: 'JB Capacitors manufactures high-quality capacitors for various electronic applications.',
        country: 'China'
    },
    {
        name: 'Disen',
        slug: 'disen',
        logo: '/brands/disen.png',
        description: 'Display Modules',
        longDescription: 'Disen specializes in LCD display modules and touch screen solutions.',
        country: 'China'
    },
    {
        name: 'Hongda',
        slug: 'hongda',
        logo: '/brands/hongda.png',
        description: 'Electronic Components',
        longDescription: 'Hongda is a professional distributor of electronic components.',
        country: 'China'
    },
    {
        name: 'Microtech',
        slug: 'microtech',
        logo: '/brands/microtech-technology-company-limited-v2.jpg',
        description: 'Technology Solutions',
        longDescription: 'Microtech Technology Company Limited provides various technology solutions and components.',
        country: 'Hong Kong'
    },
    {
        name: 'Romtronic',
        slug: 'romtronic',
        logo: '/brands/romtronic.avif',
        description: 'Cable Assemblies',
        longDescription: 'Romtronic specializes in cable assemblies and wire harnesses.',
        country: 'China'
    },
    {
        name: 'Smico',
        slug: 'smico',
        logo: '/brands/smico.png',
        description: 'Connectors',
        longDescription: 'Smico is a manufacturer of heavy-duty connectors and terminals.',
        country: 'China'
    },
    {
        name: 'Wipin',
        slug: 'wipin',
        logo: '/brands/wipin.avif',
        description: 'Industrial Tools',
        longDescription: 'Wipin manufactures hydraulic tools and equipment for industrial use.',
        country: 'China'
    },
    {
        name: 'Yeebo',
        slug: 'yeebo',
        logo: '/brands/yeebo.png',
        description: 'Display Solutions',
        longDescription: 'Yeebo Display Ltd specializes in high-quality monochrome LCD and LCM displays.',
        country: 'Hong Kong'
    },
    {
        name: 'YM Tech',
        slug: 'ym-tech',
        logo: '/brands/ym-tech.png',
        description: 'Relays',
        longDescription: 'YM Tech is a leading manufacturer of DC high voltage relays.',
        country: 'South Korea'
    },
];

export const otherBrands = [
    'YAGEO', 'Samsung', 'Murata', 'TDK', 'Vishay', 'KEMET', 'AVX', 'Panasonic',
    'Texas Instruments', 'STMicroelectronics', 'NXP', 'Infineon', 'Microchip',
    'Analog Devices', 'Onsemi', 'Diodes Inc', 'Bourns', 'TE Connectivity',
    'Molex', 'JST', 'Hirose', 'Wurth Elektronik'
];
