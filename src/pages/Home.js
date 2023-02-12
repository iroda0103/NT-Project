import Header from "../components/Header";
import Main from "../layout/main";
import React from "react";
const Home = () => {
    return (
        <React.Fragment>
        <div className="home">
            <Header />
            <main><Main></Main></main>
           
        </div>
       
        </React.Fragment>
    )
}
export default Home;