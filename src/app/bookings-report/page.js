'use client';
import React, { useEffect, useState } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function BookingsReport() {
    const [data, setData] = useState([]);

    const columns = React.useMemo(() => [
        { Header: "ID", accessor: "id" },
        { Header: "Name", accessor: "name" },
        { Header: "Email", accessor: "email" },
        { Header: "Phone", accessor: "phone" },
        { Header: "Court", accessor: "court_name" },
        { Header: "Sport", accessor: "sports" },
        { Header: "Amount", accessor: "amount" },
        {
            Header: "Date",
            accessor: "booking_date",
            Cell: ({ value }) => {
                if (!value) return "-";
                const date = new Date(value);
                return date.toLocaleDateString("en-GB"); // dd-mm-yyyy
            },
        },
        {
            Header: "Time",
            accessor: "booking_time",
            Cell: ({ value }) => {
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
        },

        
        // { Header: "Time", accessor: "booking_time" },
        { Header: "Payment ID", accessor: "payment_id" },
    ], []);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/get-bookings");
            const bookings = await res.json();
            setData(bookings);
        };
        fetchData();
    }, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        setGlobalFilter,
        canPreviousPage,
        canNextPage,
        nextPage,
        previousPage,
        pageOptions,
        state: { pageIndex },
    } = useTable({ columns, data, initialState: { pageSize: 5 } }, useGlobalFilter, usePagination);

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
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
        <div style={{ padding: 20 }}>
            <h2 style={{ textAlign: "center", marginBottom: 20 }}>All Bookings</h2>

            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: 10 }}>
                <input
                    placeholder="Search bookings..."
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    style={{ padding: "8px", marginBottom: 10, width: "100%", maxWidth: "250px" }}
                />
                <div>
                    <button onClick={exportToExcel} style={btnStyle}>Export XLSX</button>
                    <button onClick={exportToPDF} style={{ ...btnStyle, marginLeft: 10 }}>Export PDF</button>
                </div>
            </div>

            <div id="booking-table" style={{ overflowX: "auto" }}>
                <table {...getTableProps()} style={tableStyle}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()} key={column.id} style={thStyle}>{column.render("Header")}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} key={row.id}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()} key={cell.column.id} style={tdStyle}>{cell.render("Cell")}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: 10, display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                <button onClick={() => previousPage()} disabled={!canPreviousPage} style={btnStyle}>Previous</button>
                <span style={{ margin: "0 10px", alignSelf: "center" }}>Page {pageIndex + 1} of {pageOptions.length}</span>
                <button onClick={() => nextPage()} disabled={!canNextPage} style={btnStyle}>Next</button>
            </div>
        </div>
    );
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
