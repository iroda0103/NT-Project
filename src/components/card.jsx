import React from "react";
import style from "./card.module.css";
import  { FaLocationArrow } from 'react-icons/fa';
import {GrLocation} from 'react-icons/gr';
// GrLocation
const Card = function (props) {

    
     const {users } = props;
    //  console.log(users,"usercha")
    return <div className={style.card}>
            <img src={users.image} className="img" />
        <div className={style.col}>
            <h3>{users.title}</h3>
            <p className={style.manzil}><span className={style.locationIcon}><GrLocation/> </span>{users.description}
</p>
        </div>
    </div>
}
export default Card