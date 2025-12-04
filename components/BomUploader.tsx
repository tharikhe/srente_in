'use client';

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';
import { Upload, FileSpreadsheet, Search, Check, AlertCircle } from 'lucide-react';

interface BomItem {
    partNumber: string;
    quantity: number;
    [key: string]: any;
}

export default function BomUploader() {
    const [file, setFile] = useState<File | null>(null);
    const [rawHeaders, setRawHeaders] = useState<string[]>([]);
    const [rawData, setRawData] = useState<any[]>([]);
    const [mappedData, setMappedData] = useState<BomItem[]>([]);
    const [isMapperOpen, setIsMapperOpen] = useState(false);
    const [mapping, setMapping] = useState({ partNumber: '', quantity: '' });
    const [error, setError] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const uploadedFile = acceptedFiles[0];
        if (uploadedFile) {
            setFile(uploadedFile);
            parseExcel(uploadedFile);
        }
    }, []);

    const parseExcel = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = e.target?.result;
                const workbook = XLSX.read(data, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

                if (jsonData.length > 0) {
                    const headers = jsonData[0] as string[];
                    const rows = jsonData.slice(1);
                    setRawHeaders(headers);
                    setRawData(rows);
                    setIsMapperOpen(true);
                    setError(null);
                } else {
                    setError("The uploaded file appears to be empty.");
                }
            } catch (err) {
                setError("Failed to parse the Excel file. Please ensure it's a valid format.");
                console.error(err);
            }
        };
        reader.readAsBinaryString(file);
    };

    const handleMappingSubmit = () => {
        if (!mapping.partNumber || !mapping.quantity) {
            setError("Please map both Part Number and Quantity columns.");
            return;
        }

        const partNumberIndex = rawHeaders.indexOf(mapping.partNumber);
        const quantityIndex = rawHeaders.indexOf(mapping.quantity);

        const processedData = rawData.map((row) => ({
            partNumber: String(row[partNumberIndex] || '').trim(),
            quantity: Number(row[quantityIndex]) || 0,
        })).filter(item => item.partNumber); // Filter out empty rows

        setMappedData(processedData);
        setIsMapperOpen(false);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
            'application/vnd.ms-excel': ['.xls'],
        },
        multiple: false,
    });

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-brand-teal mb-6">BOM Upload Tool</h2>

            {/* Dropzone */}
            {!mappedData.length && (
                <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors
            ${isDragActive ? 'border-brand-teal bg-brand-teal/5' : 'border-brand-teal/30 hover:border-brand-teal hover:bg-gray-50'}`}
                >
                    <input {...getInputProps()} />
                    <div className="flex flex-col items-center space-y-4">
                        <div className="p-4 bg-brand-surface rounded-full">
                            <Upload className="w-8 h-8 text-brand-teal" />
                        </div>
                        <div>
                            <p className="text-lg font-medium text-gray-700">
                                {isDragActive ? "Drop the file here..." : "Drag & drop your BOM file here"}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">or click to select files (.xlsx, .xls)</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Error Message */}
            {error && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    {error}
                </div>
            )}

            {/* Column Mapper Modal (Inline for simplicity or could be a real modal) */}
            {isMapperOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
                        <h3 className="text-xl font-bold text-brand-teal mb-4">Map Your Columns</h3>
                        <p className="text-sm text-gray-600 mb-6">
                            We found the following headers. Please select which ones correspond to Part Number and Quantity.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Part Number Column</label>
                                <select
                                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-brand-teal focus:ring-brand-teal"
                                    value={mapping.partNumber}
                                    onChange={(e) => setMapping({ ...mapping, partNumber: e.target.value })}
                                >
                                    <option value="">Select Column...</option>
                                    {rawHeaders.map((header) => (
                                        <option key={header} value={header}>{header}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Quantity Column</label>
                                <select
                                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-brand-teal focus:ring-brand-teal"
                                    value={mapping.quantity}
                                    onChange={(e) => setMapping({ ...mapping, quantity: e.target.value })}
                                >
                                    <option value="">Select Column...</option>
                                    {rawHeaders.map((header) => (
                                        <option key={header} value={header}>{header}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end space-x-3">
                            <button
                                onClick={() => setIsMapperOpen(false)}
                                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleMappingSubmit}
                                className="px-4 py-2 bg-brand-teal text-white rounded-lg hover:bg-brand-teal/90"
                            >
                                Process BOM
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Results Table */}
            {mappedData.length > 0 && (
                <div className="mt-8">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                            <FileSpreadsheet className="w-5 h-5 mr-2 text-brand-teal" />
                            Parsed Data ({mappedData.length} items)
                        </h3>
                        <button
                            onClick={() => {
                                setMappedData([]);
                                setFile(null);
                            }}
                            className="text-sm text-brand-orange hover:underline"
                        >
                            Upload New File
                        </button>
                    </div>

                    <div className="overflow-x-auto border border-gray-200 rounded-lg">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-brand-teal text-white">
                                <tr>
                                    <th className="px-4 py-3 font-medium">#</th>
                                    <th className="px-4 py-3 font-medium">Part Number</th>
                                    <th className="px-4 py-3 font-medium text-right">Quantity</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {mappedData.map((item, index) => (
                                    <tr key={index} className="even:bg-gray-50 hover:bg-brand-yellow/10">
                                        <td className="px-4 py-3 text-gray-500">{index + 1}</td>
                                        <td className="px-4 py-3 font-medium text-gray-900">{item.partNumber}</td>
                                        <td className="px-4 py-3 text-right text-gray-700">{item.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <button className="flex items-center px-6 py-3 bg-brand-orange text-white font-semibold rounded-lg shadow-md hover:bg-brand-orange/90 transition-transform transform hover:scale-105">
                            <Search className="w-5 h-5 mr-2" />
                            Search Availability
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
