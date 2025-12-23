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
];

export const otherBrands = [
    'YAGEO', 'Samsung', 'Murata', 'TDK', 'Vishay', 'KEMET', 'AVX', 'Panasonic',
    'Texas Instruments', 'STMicroelectronics', 'NXP', 'Infineon', 'Microchip',
    'Analog Devices', 'Onsemi', 'Diodes Inc', 'Bourns', 'TE Connectivity',
    'Molex', 'JST', 'Hirose', 'Wurth Elektronik'
];
