"use client";

import { useEffect, useState } from "react";

type CsvRow = string[];

const CsvTable = ({ filePath }: { filePath: string }) => {
    const [data, setData] = useState<CsvRow[]>([]);

    useEffect(() => {
        fetch(filePath)
            .then((res) => res.text())
            .then((text) => {
                const rows = text
                    .trim()
                    .split("\n")
                    .map((row) => row.split(","));
                setData(rows);
            });
    }, [filePath]);

    if (!data.length) return <p>Loading data...</p>;

    return (
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        {data[0].map((header, i) => (
                            <th key={i} className="border px-4 py-2 text-left font-semibold">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.slice(1).map((row, i) => (
                        <tr key={i} className="even:bg-gray-50">
                            {row.map((cell, j) => (
                                <td key={j} className="border px-4 py-2">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CsvTable;
