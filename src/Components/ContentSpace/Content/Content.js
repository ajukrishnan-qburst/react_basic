import React from "react";

import "./Content.css";

const Content = (props) => {

      return (
        <div className="content">
            { props.tab === "0" && <p> {props.content1} </p>}
              {props.tab === "1" && <p> {props.content2} </p> }
        </div>
    )
}

export default Content;