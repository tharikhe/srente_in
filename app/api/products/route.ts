
import { NextResponse } from 'next/server';
import { fetchStockData } from '@/lib/stock-data';

export const revalidate = 0; // Disable caching for this route

export async function GET() {
    try {
        const products = await fetchStockData();
        return NextResponse.json({ success: true, products });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to fetch product data' },
            { status: 500 }
        );
    }
}
