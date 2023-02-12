import Header from "../components/Header";
import Main from "../layout/main";
import React from "react";
import '../i18n/index.js';
import i18next from "i18next";
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
const Home = () => {
    const { t, i18n } = useTranslation();
    function handleSelect(event) {
        console.log(event.target.value);
        i18n.changeLanguage(event.target.value)
    }
   let obj= {
        "SayHello": t("SayHello"),
        "Qidiruv":t("Qidiruv"),
        "Topilmalar": t("Topilmalar"),
        "Yoqotilmalar": t("Yoqotilmalar"),
        "Asosiy":t("Asosiy"),
        "Hudud":t("Hudud"),
        "Kategoriya":t("Kategoriya"),
        "Vaqtdan":t("Vaqtdan"),
        "Vaqtgacha":t("Vaqtgacha")
    }
    return (
        <React.Fragment>
            <div className="home">
                <div> 
                    <div className='header-container'></div>
                    <div className="languageGroup" onChange={handleSelect}>
                        <select name="language" className="language">
                        <option value="uz">Uz</option>
                        <option value="ru">Ru</option>
                        <option value="en">En</option>
                    </select></div></div>
                <Header>{obj}</Header>
                <main><Main>{obj}</Main></main>

            </div>

        </React.Fragment>
    )
}
export default Home;