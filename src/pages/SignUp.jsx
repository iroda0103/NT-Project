import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInputValue from '../hooks/useInputValue';
import { setAccessToken, setRefreshToken } from "../utilits/localStorage";
const SignUp = () => {
    const navigate = useNavigate();
    const [username, handlNameChange] = useInputValue("");
    const [first_name, handleFistName] = useInputValue("");
    const [last_name, handleLastName] = useInputValue("");
    const [email, handleEmail] = useInputValue("");
    const [is_activ, handleActivChange] = useInputValue(false);
    const [is_superuser, handleIsSuperuser] = useInputValue(false);
    const [is_staff, handleIsStaff] = useInputValue(false);
    const [password, handlePassword] = useInputValue("");
    const [password2, handlePassword2] = useInputValue("");

    function Submited(e) {
        e.preventDefault();
        let obj = new Object();
        obj = {
            "username": username,
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "is_active": is_activ,
            "is_superuser": is_superuser,
            "is_staff": is_staff,
            "password": password,
            "password2": password2
        }

        axios.post("http://188.225.31.249:8000/api/v1/register/", obj).then((res => {
            console.log(res, "register");
            navigate('/');
        }).catch(()=>{
            console.log("Bunday loginli foydalanuvchi mavjud");
        })

        )
        console.log(username, email)
    }

    return  <form className="sign-up-form" onSubmit={Submited}>
        <div className="sign-up-form__content">
            <h2>Ro'yxatdan o'tish</h2>
            <div className="form-item">
                <label>Username</label>
                <input onChange={handlNameChange} required />
            </div>
            <div className="form-item">
                <label>first_name</label>
                <input onChange={handleFistName} />
            </div>
            <div className="form-item">
                <label>last_name</label>
                <input onChange={handleLastName} />
            </div>
            <div className="form-item">
                <label>Email</label>
                <input type='email' required onChange={handleEmail} />
            </div>
            <div className="form-item">
                <label>Is_active</label>
                <select onChange={handleActivChange}>
                    <option>True</option>
                    <option>False</option>
                </select>


            </div>
            <div className="form-item">
                <label>Is_superuser</label>
                <select onChange={handleIsSuperuser}>
                    <option>True</option>
                    <option>False</option>
                </select>
            </div>
            <div className="form-item">
                <label>Is_staff</label>
                <select onChange={handleIsStaff}>
                    <option>True</option>
                    <option>False</option>
                </select>
            </div>
            <div className="form-item">
                <label>Password</label>
                <input type="password" onChange={handlePassword} required />
            </div>
            <div className="form-item">
                <label>Password2</label>
                <input type="password" onChange={handlePassword2} required />
            </div>
            <button type="submit" onClick={Submited}>Submit</button>
        </div>
    </form>
}

export default SignUp