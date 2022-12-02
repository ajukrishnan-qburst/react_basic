import React from "react";

import "./SideBar.css";
import { useState } from "react";

const SideBar = (props) => {

    const contentChangeByTitleHandler = (id) => {
        props.onTitleChangeId(id);   
    }

    return (
        <div className="sidebar-container">
            <div className="sidebar-header">
                <h3>My Profile</h3>
            </div>
            <div className="sidebar-titles">
                <ul className="sidebar-titles__list">
                    <li><span onClick={() => contentChangeByTitleHandler("1")} >Birds</span></li>
                    <li><span onClick={() => contentChangeByTitleHandler("2")} >Animals</span></li>
                    <li><span onClick={() => contentChangeByTitleHandler("3")} >Fish</span></li>
                    <li><span onClick={() => contentChangeByTitleHandler("4")} >Insects</span></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;