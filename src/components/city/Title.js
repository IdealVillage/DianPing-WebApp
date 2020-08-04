import React from "react";
import PropTypes from "prop-types";

const Title=({title,style})=>(
    <div style={style}>
        {title}
    </div>
)

Title.propTypes={
    title:PropTypes.string.isRequired,
    style:PropTypes.object,
}


Title.defaultProps={
    title:"",
    style:{
        backgroundColor:"#f2f2f2",
        color:"#323232",
        paddingLeft:"10px",
        borderBottom:"1px solid #e2e2e2",
        fontSize:"14px",
        lineHeight: "30px",
        fontWeight: 700
    }
}

export default Title