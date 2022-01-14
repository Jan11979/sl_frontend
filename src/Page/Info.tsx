import React from "react";
import {IPersonalShopList} from "./FrameSet";
import DrawMenu from "./NavMenu";


interface ElementPropsInfoText {
    text: string
}
function DrawInfoText({text}: ElementPropsInfoText) {
    return (
        <div>
            <p>{text}</p>
        </div>
    )
}
interface ElementPropsInfo {
    list: string[]
}
function DrawInfo({list}: ElementPropsInfo) {
    if( list.length === 0 )
        return (
            <div>
             <p>Error</p>
            </div>
        )
    if( list.length === 1 )
        return (
            <div>
                <p>{list[0]}</p>
            </div>
        )
// {list.map( (elem, i) => {<text key={i}> {elem} </text> })}
    return (
        <div>
            <div>
                {list.map( (elem, i) => < DrawInfoText key={i} text={ elem }/>)}
            </div>
        </div>

    )
}

export default DrawInfo;