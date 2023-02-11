// import React from "react";
// function Main(){
//     return <div>salom</div>
// }
// export default Main

import React, { useContext, useState, useEffect } from "react";
import Card from "../components/card.jsx";
import Loading from "../components/loading.jsx";
import style from "./main.module.css";
import sass from "../App.css";
// import {DataContext} from "../context/datacontext.js";
// import UserProvider from "../context/datacontext.js";
function Main() {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [typeData, setTypeData] = useState([]);

    // const datali=useContext(DataContext);
    useEffect(() => {
        fetch("http://188.225.31.249:3001/findings")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setFilterData(data);
                setTypeData(data);
                setLoading(false);
                console.log("keldi", data)
            })
            .catch((error) => console.error(error));
    }, []);
    function active(event) {
        let filterElem;
        console.log(event.target.innerText, "hhhhh");
        filterElem = event.target.innerText;
        event.target.classList.toggle("active_button");

        console.log(typeData)
        let b = [];
        if (filterElem == "Topilmalar") {
            b = data.filter((item) => item.title.includes("top"));
            document.querySelector(".yoqotilma").classList.remove("active_button")
        }
        if (filterElem == "Yo'qotilmalar") {
            document.querySelector(".topilma").classList.remove("active_button")
            b = data.filter((item) => item.title.includes("qot"));
        }
        console.log(event.target, "target")
        if (!event.target.matches('active_button') && b.length==0) {
            // b=data;
            console.log("lll", b)
        }
        setTypeData(b);
        setFilterData(b)
        console.log(b, "assalom", typeData);
    }

    if (loading) {
        return <Loading />
    }
 
    return <div className="main-topilmalar">
 

        <div className='panel'>
            <label for="search" className="search-input">
                <input type="search" id="search" className="search" placeholder="search" onInput={(event) => {
                    console.log(event.target.value)
                    let a = [];
                    a = typeData.filter((item) => item.title.includes(event.target.value));
                    setFilterData(a)
                }} />
            </label>

            <div>
                <button className="topilma" onClick={active}>Topilmalar</button>
                <button onClick={active} className="yoqotilma">Yo'qotilmalar</button>
            </div>
        </div>
        <div className="row">
            {
                filterData.map((item, index) => {
                    return <>
                        <Card users={item} key={index}></Card>
                    </>

                })
            }

        </div>

    </div>
}
export default Main