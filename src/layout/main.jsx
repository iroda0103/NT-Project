import React, { useContext, useState, useEffect } from "react";
import Card from "../components/card.jsx";
import Loading from "../components/loading.jsx";
import Navbar from "../components/Navbar.jsx";
import axios from "axios";
import style from "./main.module.css";
import sass from "../App.css";
// import {DataContext} from "../context/datacontext.js";
// import UserProvider from "../context/datacontext.js";
function Main(props) {
  const  {children}=props
  console.log(JSON.stringify(children),"children")
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [typeData, setTypeData] = useState([]);
    const [activBtn, setactivBtn] = useState("");
    const [isActiv, setActiv] = useState(false);
    // const datali=useContext(DataContext);
    useEffect(() => {
        fetch("http://188.225.31.249:3001/findings")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setFilterData(data);
                setTypeData(data);
                setLoading(true);
                console.log("keldi", data)
            })
            .catch((error) => console.error(error));
    }, []);
//     useEffect(()=>{
// axios.post("http://188.225.31.249:8000/api/v1/register/",{
//     "username": [
//       "NT"
//     ],
//     "password": [
//       "12334"
//     ],
//     "password2": [
//       "12334"
//     ]
//   }).then((data)=>{
//     console.log(data.data,"asssalom")
// })
//     })
useEffect(()=>{
    let filterData=[];
    console.log("filterdata",activBtn,"ddsdsds")
    if(activBtn=="one"){
        filterData=data.filter((item) => item.type=="topdim");
    }
    if(activBtn=="two"){
        filterData=data.filter((item) => item.type.includes("qot"));
    }
    if(activBtn==""){
        filterData=data;
    }
    console.log(JSON.stringify(filterData),"jsonjj")
    setFilterData(filterData)
    setTypeData(filterData)
},[activBtn])
  
   

    if (!loading) {
        return <Loading />
    }
    return <div className="main-topilmalar">
        
        <div className='panel'>
            <label htmlFor="search" className="search-input">
                <input type="search" id="search" className="search" placeholder={children.Qidiruv} onInput={(event) => {
                    console.log(event.target.value)
                    let a = [];
                    a = filterData.filter((item) => item.title.includes(event.target.value));
                    if(event.target.value==""){
                        console.log("ksdjsdjsdks");
                        a=typeData
                    }
                    setFilterData(a)
                }} />
            </label>
            <div>
                <button onClick={() => {
                    console.log(activBtn,"onecha")
                    setactivBtn((activBtn == "one") ? "" : "one");
                    console.log(activBtn,"one")
                }
                } className={(activBtn == "one") ? "active_button" : ""}>{children.Topilmalar}</button>
                <button onClick={() => {
                    console.log(activBtn,"twocha")
                    setactivBtn((activBtn == "two") ? "" : "two")
                    console.log(activBtn,"two")
                }}
                    className={(activBtn == "two") ? "active_button" : ""}>{children.Yoqotilmalar}</button>
            </div>
        </div>
        <div className="row">
            {
                filterData.map((item, index) => {
                    return <Card users={item} key={index}></Card>
                })
            }

        </div>

    </div>
}
export default Main