import React from "react";
import sass from "./loading.module.css"
function Loading(){
    return <div className={sass.circle}>
    <div className={sass.circle1}> </div>
    <div className={sass.circle2}></div>
    <div className={sass.circle3}></div>
  </div>
}
export default Loading