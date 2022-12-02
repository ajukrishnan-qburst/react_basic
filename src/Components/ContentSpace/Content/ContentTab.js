import React from "react";

import "./ContentTab.css";
import Content from "./Content";





const ContentTab = ({ tabChange = "0", onTabChange, content }) => {


    const tabClickHandler = (tabChange) => {
        onTabChange(tabChange);
    }

    return (
        <table className="contenttab-container">
            <thead className="content-header">
                <tr>
                    <th onClick={() => tabClickHandler("0")} style={{ background: tabChange === "0" ? "aqua" : "white" }}>{content.heading1}</th>
                    <th onClick={() => tabClickHandler("1")} style={{ background: tabChange === "1" ? "aqua" : "white" }}>{content.heading2}</th>
                </tr>
            </thead>
            <tbody className="content-column">
                <tr>
                    <td colSpan="2">
                        <Content tab={tabChange} content1={content.content1} content2={content.content2}></Content>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default ContentTab;