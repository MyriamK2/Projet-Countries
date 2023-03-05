import { useState } from "react";
import "./Navbar.css";

export default function Navbar({darkMode, setDarkMode}) {
    // //TODO ---------- States ----------

    // const [darkMode, setDarkMode] = useState(false);
    const [mode, setMode] = useState("Dark mode");

    //TODO ---------- Comportements ----------

    const clickMode = () => {
        setDarkMode(!darkMode);
        // setDarkMode(true);

        if(darkMode == false) {
            // setDarkMode(true);
            setMode("Light mode");
            // document.body.style.backgroundColor = "#212529";
            document.body.style = "background-color: #212529; transition: 0.3s;";
            console.log("darkmode -> true");
        } else {
            // setDarkMode(false);
            setMode("Dark mode");
            // document.body.style.backgroundColor = "whitesmoke";
            document.body.style = "background-color: whitesmoke; transition: 0.2s;";
            console.log("darkmode -> false");
        }
    }


    //TODO ---------- Affichage ----------

    return (
        <nav className={darkMode == true ? "dark" : ""}>
            <div className="leftNav">
                <h1>Where in the world ?</h1>
            </div>

            <div className="rightNav">
                <button className={darkMode == true ? "darkBtn" : ""} onClick={() => {clickMode()}}>{mode}</button>
            </div>
        </nav>

    )
}




































{/* <div className="card" key={index}>
                            <div className="imgCard">
                                <img src={element.flags.svg} width={300} alt="" />
                            </div>
                            <div className="bodyCard">
                                <h4></h4>
                            </div>
                        </div> */}





{/* <div className="rightInput">
                    <p>All regions</p>
                    <img src={arrow} width={10} alt="" />
                </div> */}