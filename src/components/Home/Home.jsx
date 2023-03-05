import "./Home.css";
import loupe from "../../img/loupe.png";
import arrow from "../../img/arrow-bottom.png";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";

export default function Home({ datas, setDatas, selection, setSelection, darkMode, setDarkMode }) {
    // //TODO ---------- States ----------

    const [valSearch, setValSearch] = useState("");

    const [regionSelected, setRegionSelected] = useState("All regions");

    const [dropDisplay, setDropDisplay] = useState(false);

    const [checkAll, setCheckAll] = useState(true);
    const [checkAF, setCheckAF] = useState(false);
    const [checkUS, setCheckUS] = useState(false);
    const [checkAsia, setCheckAsia] = useState(false);
    const [checkEU, setCheckEU] = useState(false);
    const [checkOC, setCheckOC] = useState(false);

    
    //! Active State of the plans -----
    // useEffect(() => {
    //     //? Get all .pCheck into an array
    //     const allPCheck = Array.from(
    //         document.getElementsByClassName('pCheck')
    //     );
    //     console.log(allPCheck);

    //     //? Loop through the array to "toggle" class "active"
    //     for (let i = 0; i < allPCheck.length; i++) {
    //         allPCheck[i].addEventListener("click", function () {
    //             let iconCheck = document.getElementsByClassName("iconCheck");
    //             console.log(iconCheck);

    //             let current = document.getElementsByClassName("fa-solid fa-check");
    //             console.log(current);

    //             //? Remove the class "fa-solid fa-check" from the element unclicked
    //             if(current.length > 0) {
    //                 current[0].className = current[0].className.replace(" fa-solid fa-check", "");
    //             } 

    //             //? Add the fa-solid fa-check class to the current/clicked button
    //             this.className += " fa-solid fa-check";
    //         });
    //     }
    // }, []);
    //! -------------------------------------


    //TODO ---------- Comportements ----------

    //* ALPHABETIC ORDER ----------

    function alphabet(a, b) {
        if (a.name.common < b.name.common) {
            return -1;
        }
        if (a.name.common > b.name.common) {
            return 1;
        }
        return 0;
    }
    datas.sort(alphabet);


    //* CHECK REGION (Dropdown) ----------

    const fctCheckAF = () => {
        setCheckAF(true);

        setCheckAll(false);
        setCheckUS(false);
        setCheckAsia(false);
        setCheckEU(false);
        setCheckOC(false);
    }

    const fctCheckUS = () => {
        setCheckUS(true);

        setCheckAll(false);
        setCheckAF(false);
        setCheckAsia(false);
        setCheckEU(false);
        setCheckOC(false);
    }

    const fctCheckAsia = () => {
        setCheckAsia(true);

        setCheckAll(false);
        setCheckUS(false);
        setCheckAF(false);
        setCheckEU(false);
        setCheckOC(false);
    }

    const fctCheckEU = () => {
        setCheckEU(true);

        setCheckAll(false);
        setCheckUS(false);
        setCheckAsia(false);
        setCheckAF(false);
        setCheckOC(false);
    }

    const fctCheckOC = () => {
        setCheckOC(true);

        setCheckAll(false);
        setCheckUS(false);
        setCheckAsia(false);
        setCheckEU(false);
        setCheckAF(false);
    }

    const fctCheckAll = () => {
        setCheckAll(true);

        setCheckAF(false);
        setCheckUS(false);
        setCheckAsia(false);
        setCheckEU(false);
        setCheckOC(false);
    }




    //* DISPLAY Dropdown ----------

    // const dropDisplayBlock = () => {
    //     // setDropDisplay(true);

    //     let dropdown = document.querySelector(".dropdown-content");
    //     console.log(dropdown.classList);
    //     // dropdown.style.display = "none";

    //     // dropdown.classList.remove("d-none");
    //     // dropdown.classList.add("d-block");
    //     // dropdown.classList.toggle("d-block");
    //     dropdown.classList.replace("d-none", "d-block");
    // }

    // const dropDisplayNone = () => {
    //     // setDropDisplay(false);

    //     let dropdown = document.querySelector(".dropdown-content");
    //     console.log(dropdown.classList);
        
    //     // dropdown.classList.toggle("d-none");
    //     dropdown.classList.replace("d-block", "d-none");

    //     // if(dropdown.classList.contains("d-block")){
    //     //     // dropdown.classList.remove("d-block");
    //     //     // dropdown.classList.add("d-none");
    //     //     dropdown.classList.toggle("d-none");
    //     //     // dropdown.style.display = "none";
    //     // }
    // }


    // if(dropDisplay == true) {
    //     let dropdown = document.querySelector(".dropdown-content");
    //     dropdown.classList.add("d-block");
    // } else if(dropDisplay == false) {
    //     let dropdown = document.querySelector(".dropdown-content");
    //     dropdown.classList.add("d-none");
    // }


    //TODO ---------- Affichage ----------

    return (
        <div>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            <div className="divInputs">

                <div className="leftInput">
                    <img src={loupe} alt="loupe" />
                    <input value={valSearch} onChange={(e) => { setValSearch(e.target.value) }} type="text" placeholder="Search for a country" />
                </div>


                <div className="rightInput" >
                    <p>{regionSelected}</p>
                    <img src={arrow} width={10} alt="bottom-arrow" />

                    <div className={darkMode ? "dropdown-content d-none darkDrop" : "dropdown-content d-none"}>

                        <div className="divCheck">
                            <div className="checkBox"><i className={checkAll ? "fa-solid fa-check" : ""}></i></div>
                            <p className="pCheck" 
                                onClick={() => { setRegionSelected("All regions"); fctCheckAll(); }}>All regions</p> 
                        </div>
                        <div className="divCheck">
                            <div className="checkBox"><i className={checkAF ? "fa-solid fa-check" : ""}></i></div>
                            <p className="pCheck" 
                                onClick={() => { setRegionSelected("Africa"); fctCheckAF(); }}>Africa</p>
                        </div>
                        <div className="divCheck">
                            <div className="checkBox"><i className={checkUS ? "fa-solid fa-check" : ""}></i></div>
                            <p className="pCheck" onClick={() => { setRegionSelected("America"); fctCheckUS(); }}>America</p>
                        </div>
                        <div className="divCheck">
                            <div className="checkBox"><i className={checkAsia ? "fa-solid fa-check" : ""}></i></div>
                            <p className="pCheck" onClick={() => { setRegionSelected("Asia"); fctCheckAsia(); }}>Asia</p>
                        </div>
                        <div className="divCheck">
                            <div className="checkBox"><i className={checkEU ? "fa-solid fa-check" : ""}></i></div>
                            <p className="pCheck" onClick={() => { setRegionSelected("Europe"); fctCheckEU(); }}>Europa</p>
                        </div>
                        <div className="divCheck">
                            <div className="checkBox"><i className={checkOC ? "fa-solid fa-check" : ""}></i></div>
                            <p className="pCheck" onClick={() => { setRegionSelected("Oceania"); fctCheckOC(); }}>Oceania</p>
                        </div>

                    </div>
                </div>

            </div>


            <div className="containerCards">
                {regionSelected == "All regions" ?
                    datas
                        .filter((country) => {
                            return valSearch.toLowerCase() === "" ? country :
                                country.name.common.toLowerCase().includes(valSearch);
                        })
                        .map((element, index) => {
                            return (
                                <div key={index} onClick={() => { setSelection(element) }}>
                                    <Card
                                        source={element.flags.svg}
                                        pays={element.name.common}
                                        population={element.population}
                                        region={element.region}
                                        capital={element.capital}
                                        darkMode={darkMode} />
                                </div>
                            )
                        })

                : regionSelected == regionSelected ?
                    datas
                        .filter((element) => {
                            return element.region.includes(regionSelected);
                        })
                        .filter((country) => {
                            return valSearch.toLowerCase() === "" ? country :
                                country.name.common.toLowerCase().includes(valSearch);
                        })
                        .map((element, index) => {
                            return (
                                <div key={index} onClick={() => { setSelection(element) }}>
                                    <Card
                                        source={element.flags.svg}
                                        pays={element.name.common}
                                        population={element.population}
                                        region={element.region}
                                        capital={element.capital}
                                        darkMode={darkMode} />
                                </div>
                            )
                        })
                : ""}
            </div>

        </div>
    )
}































{/* <div className={darkMode ? "dropdown-content d-none darkDrop" : "dropdown-content d-none"}>
    <p onClick={() => { setRegionSelected("All regions")}}> <i className="fa-solid fa-check"></i> All regions</p>
    <p onClick={() => { setRegionSelected("Africa");}}>Africa</p>
    <p onClick={() => { setRegionSelected("America")}}>America</p>
    <p onClick={() => { setRegionSelected("Asia")}}>Asia</p>
    <p onClick={() => { setRegionSelected("Europe")}}>Europa</p>
    <p onClick={() => { setRegionSelected("Oceania")}}>Oceania</p>
</div> */}









//* Par continent -----
// const [regionId, setRegionId] = useState("");
// const [apiRegion, setApiRegion] = useState([]);
// onClick={() => {setRegionId("europe")}}


// useEffect(() => {
//     if(regionId ==! "") {
//         fetch(`https://restcountries.com/v3.1/region/${regionId}`)
//       .then((response) => response.json())
//       .then((data) => { setApiRegion(data); console.log(apiRegion); })
//       .catch((error) => console.error(error))
//     }
//   }, [])
//! ou plutot un filtre par REGION ? (plutot que par pays as dans Search)

{/* {apiRegion != [] ?
    <div className="containerCards">
    {apiRegion.map((element, index) => {
        return (
            <div key={index} onClick={() => {setSelection(element)}}>
                <Card 
                    source={element.flags.svg}
                    pays={element.name.common}
                    population={element.population}
                    region={element.region}
                    capital={element.capital} />
            </div>
        )
    })}
</div>
: ""} */}