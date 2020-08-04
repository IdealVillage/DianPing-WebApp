import React from "react";
import { Line } from "../../common";

const GroupItem=({children})=>(
    <div className='item'>
        {children}
        <Line/>
        <style jsx>{`
            .item{
                margin-left:10px;
            }
        `}</style>
    </div>
)

export default GroupItem