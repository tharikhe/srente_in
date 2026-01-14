import { Product } from '@/data/products';
import * as XLSX from 'xlsx';

// The URL for the published Google Sheet (CSV format)
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTcsxZfY1NtZH2Jr3t9cFfLwraDp-G3tVtWIRaXNKrWZoFZ4yXqbOGY-2EcUHZiR2VImTOlu1oNBl3R/pub?gid=0&single=true&output=csv';

interface SheetRow {
    MPN: string;
    'DESCRIPTIONS '?: string; // Note the trailing space from the user's sheet
    DESCRIPTIONS?: string;    // Fallback
    stock: string;
}

export async function fetchStockData(): Promise<Product[]> {
    try {
        const response = await fetch(SHEET_CSV_URL, {
            next: { revalidate: 0 } // Disable caching to get real-time data
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch sheet data: ${response.statusText}`);
        }

        const csvText = await response.text();

        // Parse CSV using xlsx
        const workbook = XLSX.read(csvText, { type: 'string' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];

        // Convert key-value pairs
        // raw: true helps preserve some formatting, but we mainly want the text
        const rows = XLSX.utils.sheet_to_json<SheetRow>(worksheet);

        // Map to Product interface
        // Note: The sheet only has MPN, Description, Stock.
        // We will need to merge this with existing categories/images if we want to keep that data,
        // OR if this replaces the hardcoded list entirely.
        // Based on the user request "fetch data from here and updates the stocks",
        // it implies this is the source of truth.
        // However, the sheet lacks Category and Image data which are in products.ts.
        // Strategy: We will use the sheet for Description and Stock, and try to infer or default the rest.
        // For a robust solution, we might want to default Category to 'Others' if missing.

        const products: Product[] = rows.map((row) => {
            const partNumber = row.MPN ? String(row.MPN).trim() : '';
            const description = row['DESCRIPTIONS '] || row.DESCRIPTIONS || '';
            const stockRaw = String(row.stock || '').toLowerCase().trim();
            const inStock = stockRaw === 'yes' || stockRaw === 'true' || stockRaw === '1';

            // Heuristic to guess category or default to Others.
            // Since we don't have category in sheet, we'll set it to 'Others' or maybe 'Uncategorized'.
            // Better yet, if we have the static data available, we could try to look it up,
            // but the user wants to "automatically fetch data from here", suggesting this IS the data.
            // Let's set a default category.
            let category = 'Others';

            // Simple heuristic to guess category based on description (optional improvement)
            const descLower = description.toLowerCase();
            if (descLower.includes('resistor')) category = 'Resistors';
            else if (descLower.includes('capacitor')) category = 'Capacitors';
            else if (descLower.includes('diode')) category = 'Diodes';
            else if (descLower.includes('connector') || descLower.includes('header')) category = 'Connectors';
            else if (descLower.includes('ic') || descLower.includes('integrated circuit') || descLower.includes('mcu')) category = 'ICs';
            else if (descLower.includes('transistor') || descLower.includes('mosfet')) category = 'Transistors';

            return {
                partNumber,
                description,
                category,
                manufacturer: '', // Not in sheet
                inStock,
                image: '' // Not in sheet
            };
        }).filter(p => p.partNumber); // Filter out empty rows

        return products;

    } catch (error) {
        console.error('Error fetching stock data:', error);
        return [];
    }
}
