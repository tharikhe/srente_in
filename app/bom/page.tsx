import BomUploader from '@/components/BomUploader';

export default function BomPage() {
    return (
        <div className="space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-brand-teal">BOM Upload Tool</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Upload your Bill of Materials (Excel) to quickly check stock and pricing for multiple parts at once.
                </p>
            </div>
            <BomUploader />
        </div>
    );
}
