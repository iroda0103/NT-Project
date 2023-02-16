import React, { useState, useEffect } from "react";
import Card from "../components/card.jsx";
import Loading from "../components/loading.jsx";
import Navbar from "../components/Navbar.jsx";
import axios from "axios";
import style from "./main.module.css";
import sass from "../App.css";
import { useLocation, useNavigate } from "react-router-dom";
function Main(props) {
    const navigate = useNavigate();
    const location=useLocation();
    console.log(location,"location")
    const searchParams=new URLSearchParams(location.search)
    const search=searchParams.get("search");
    console.log(search);
    const { children } = props
    const [data, setData] = useState([]);
    let timer;
    function handleSearch(event) {
        clearInterval(timer)
        timer = setTimeout(() => {
            console.log(event.target.value)
            navigate({
                search: `?search=${event.target.value}`
            })}, 2000)
    }
    useEffect(() => {
        axios(`http://188.225.31.249:3001/findings`,{
            params:{search}
        }).then((res) => {
            setData(res.data);
            console.log("keldi", data)
        })
            .catch((error) => console.error(error));
    }, [search]);
// const searchValue=()=>(location.search=="?search=")?"":search;//
    return <div className="main-topilmalar">
        <div className='panel'>
            <label htmlFor="search" className="search-input">
                <input type="search" id="search" className="search" defaultValue={search} placeholder={children.Qidiruv} onInput={handleSearch} />
            </label>
            <div>
                <button>{children.Topilmalar}</button>
                <button>{children.Yoqotilmalar}</button>
            </div>
        </div>
        <div className="row">
            {data.map((item, index) => {
                return <Card users={item} key={index}></Card>
            })
            }

        </div>

    </div>
}
export default Main