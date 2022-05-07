/* === React Elements === */
import React from "react";
import { useState } from "react";

const PrintPublication = (props) => {
   
    const contentStyle = {
        display: (props.active)
    }  

    return (
        <div style={contentStyle} className="table-description flex scroll column bg-royal-blue">
            <div className="table-heading royal-blue-text">
                <h3>What We Print</h3>
            </div>
            <div className="flex column table-padding">
                <div className="flex column">
                    <h1 className="print">Zines</h1>
                    <h1 className="print">Event Posters</h1>
                    <h1 className="print">Self-Published Books</h1>
                    <h1 className="print">Book Covers</h1>
                    <h1 className="print">Album Covers</h1>
                    <h1 className="print">Billboards</h1>
                    <h1 className="print">Letterheads</h1>
                    <h1 className="print">Business Cards</h1>
                    <h1 className="print">Invoices</h1>
                    <h1 className="print">Contracts</h1>
                    <h1 className="print">Whatever you need</h1>
                </div>
            </div>
        </div>
    )
}

export default PrintPublication;