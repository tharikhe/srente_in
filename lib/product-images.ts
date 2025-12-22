
export const getCategoryImage = (category: string) => {
    const categoryMap: Record<string, string> = {
        'Resistors': 'resisitors.webp', // Note: filename has typo
        'Capacitors': 'capacitor.png',
        'ICs': 'ics.jpg',
        'Diodes': 'diodes.webp',
        'Connectors': 'board-to-board-connector.webp',
        'Inductors': 'inductor.webp',
        'Transistors': 'transistors.jpg',
        'Others': 'other.webp',
        'Audio': 'audio.jpg',
        'Potentiometers': 'potentiometer.jpg',
        'Fuses': 'fuse.jpg',
        'Relays': 'relays.jpg',
        'Sensors': 'sensors.webp',
        'Transformers': 'transformer.webp',
        'Modules': 'modules.webp',
        'Protection': 'protection.webp',
        'Fans': 'fan.jpg',
        'Displays': 'display', // Assuming valid image file without extension
        'Crystals': 'crystals', // Assuming valid image file without extension
        'Switches': 'tackle switch.webp',
        'LEDs': 'led.webp',
        'Power': 'psu.webp',
        'Varistors': 'varistors.webp',
        'Fuel Dispenser': 'other.webp'
    };

    const filename = categoryMap[category];
    if (filename) {
        return `/products-img/${filename}`;
    }

    // Fallback to simple slug mapping if not in explicit map
    const slug = category.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    return `/products-img/${slug}.webp`;
};
