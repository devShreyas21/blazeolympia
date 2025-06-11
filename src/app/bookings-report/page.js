'use client';
import React, { useEffect, useState } from "react";
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
    createColumnHelper,
} from '@tanstack/react-table';
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const columnHelper = createColumnHelper();

export default function BookingsReport() {
    const [data, setData] = useState([]);
    const [globalFilter, setGlobalFilter] = useState("");
    const [loading, setLoading] = useState(true); // 👈 loader state

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // 👈 show loader
            const res = await fetch("/api/get-bookings");
            const bookings = await res.json();
            setData(bookings);
            setLoading(false); // 👈 hide loader
        };
        fetchData();
    }, []);

    const columns = [
        columnHelper.accessor("id", { header: "ID" }),
        columnHelper.accessor("name", { header: "Name" }),
        columnHelper.accessor("email", { header: "Email" }),
        columnHelper.accessor("phone", { header: "Phone" }),
        columnHelper.accessor("court_name", { header: "Court" }),
        columnHelper.accessor("sports", { header: "Sport" }),
        columnHelper.accessor("amount", { header: "Amount" }),
        columnHelper.accessor("booking_date", {
            header: "Date",
            cell: ({ getValue }) => {
                const value = getValue();
                if (!value) return "-";
                const date = new Date(value);
                return date.toLocaleDateString("en-GB");
            },
        }),
        columnHelper.accessor("booking_time", {
            header: "Time",
            cell: ({ getValue }) => {
                const value = getValue();
                if (!value) return "-";
                const [hours, minutes] = value.split(":");
                const date = new Date();
                date.setHours(+hours, +minutes);
                return date.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                });
            },
        }),
        columnHelper.accessor("payment_id", { header: "Payment ID" }),
    ];

    const table = useReactTable({
        data,
        columns,
        state: { globalFilter },
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    const exportToExcel = () => {
        const formattedData = data.map((row) => {
            const dateObj = row.booking_date ? new Date(row.booking_date) : null;
            const formattedDate = dateObj
                ? dateObj.toLocaleDateString("en-GB")
                : "-";

            let formattedTime = "-";
            if (row.booking_time) {
                const [hours, minutes] = row.booking_time.split(":");
                const timeDate = new Date();
                timeDate.setHours(+hours, +minutes);
                formattedTime = timeDate.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                });
            }

            return {
                ...row,
                booking_date: formattedDate,
                booking_time: formattedTime,
            };
        });

        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings");
        XLSX.writeFile(workbook, "Bookings.xlsx");
    };

    const exportToPDF = async () => {
        const input = document.getElementById("booking-table");
        const canvas = await html2canvas(input);
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
        pdf.save("Bookings.pdf");
    };

    return (
        <>
            <div className="page-title dark-background" style={{ backgroundImage: "url(assets/img/page-title-bg.jpg)" }}>
                <div className="container position-relative">
                    <h1>Bookings</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li className="current">Bookings</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div style={{ padding: 20 }}>
                <h2 style={{ textAlign: "center", marginBottom: 20 }}>All Bookings</h2>

                {loading ? (
                    <div style={{ textAlign: "center", marginTop: 50 }}>
                        <div className="loader" />
                        <p style={{ marginTop: 10 }}>Loading bookings...</p>
                    </div>
                ) : (
                    <>
                        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: 10 }}>
                            <input
                                placeholder="Search bookings..."
                                value={globalFilter ?? ""}
                                onChange={(e) => setGlobalFilter(e.target.value)}
                                style={{ padding: "8px", marginBottom: 10, width: "100%", maxWidth: "250px" }}
                            />
                            <div>
                                <button onClick={exportToExcel} style={btnStyle}>Export XLSX</button>
                                <button onClick={exportToPDF} style={{ ...btnStyle, marginLeft: 10 }}>Export PDF</button>
                            </div>
                        </div>

                        <div id="booking-table" style={{ overflowX: "auto" }}>
                            <table style={tableStyle}>
                                <thead>
                                    {table.getHeaderGroups().map(headerGroup => (
                                        <tr key={headerGroup.id}>
                                            {headerGroup.headers.map(header => (
                                                <th key={header.id} style={thStyle}>
                                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody>
                                    {table.getRowModel().rows.map(row => (
                                        <tr key={row.id}>
                                            {row.getVisibleCells().map(cell => (
                                                <td key={cell.id} style={tdStyle}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div style={{ marginTop: 10, display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                            <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} style={btnStyle}>Previous</button>
                            <span style={{ margin: "0 10px", alignSelf: "center" }}>
                                Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                            </span>
                            <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} style={btnStyle}>Next</button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

// Loader CSS (can be extracted into global CSS if needed)
const loaderStyle = `
.loader {
    border: 6px solid #f3f3f3;
    border-top: 6px solid #3399cc;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: auto;
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;

// Inject loader style
if (typeof document !== 'undefined') {
    const style = document.createElement("style");
    style.innerHTML = loaderStyle;
    document.head.appendChild(style);
}

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
    minWidth: "800px",
};

const thStyle = {
    background: "#f2f2f2",
    padding: "10px",
    border: "1px solid #ccc",
};

const tdStyle = {
    padding: "8px",
    border: "1px solid #ccc",
    textAlign: "center",
};

const btnStyle = {
    padding: "8px 12px",
    backgroundColor: "#3399cc",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "5px",
};
