import React from "react";

import "./HeaderTag.css";

const HeaderTag = ({headerId, headerContent1, headerContent2}) => {
    return (
        <div className="content-header__container">
            {headerId === "0" && <h1>What is {headerContent1} ?</h1>} 
            {headerId === "1" && <h1>What is {headerContent2} ?</h1> }
        </div>
    )
}

export default HeaderTag;