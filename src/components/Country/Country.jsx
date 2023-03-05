import "./Country.css";
import { Form, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


export default function Country({selection, darkMode, setDarkMode}) {
    //TODO ---------- States / Comportements ----------

    //* ---------- Get Languages ----------

    let lang = Object.values(selection.languages)

    let langMap = lang.map((element) => {
        if(lang.length > 1) {
            return element + ", "
        } else {
            return element
        }
    })
    
    //* ---------- Get Currencies ----------

    let curren = Object.keys(selection.currencies);
    let currenKey = curren.map((element) => {return element});


    console.log("ici : " + selection.borders);
    console.log("type : " + typeof selection.borders);


    //TODO ---------- Affichage ----------

    return (
        <div>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            <Form action="/">
                <button className={darkMode ? "btnBack dark" : "btnBack"}>Back</button>
            </Form>

            <section className="sectionCountry">
                <div className="divFlag">
                    <img src={selection.flags.svg} alt="" />
                </div>

                <div className={darkMode ? "divInfos colorWhite" : "divInfos"}>
                    <h1>{selection.name.common}</h1>

                    <div className="infos">
                        <div className="rightInfos">
                            <p><span>Native name :</span> {selection.name.common}</p>
                            <p><span>Population :</span> {selection.population}</p>
                            <p><span>Region :</span> {selection.region}</p>
                            <p><span>Sub Region :</span> {selection.subregion}</p>
                            <p><span>Capital :</span> {selection.capital}</p>
                        </div>
                        <div className="leftInfos">
                            <p><span>Top Level Domain :</span> {selection.tld}</p>
                            <p><span>Currencies :</span> {selection.currencies[currenKey].name}</p>
                            <p><span>Languages :</span> {langMap} </p>
                        </div>
                    </div>

                    <div className="divBorderCountries">
                        <p><span>Border Countries :</span></p>

                        {selection.borders.map((element) => {
                                return (
                                    <Link className={darkMode ? "dark" : ""}>{element}</Link>
                                )
                            })}

                        {/* puis confere cca3 / altSpellings? */}
                        
                        {/* <Link className={darkMode ? "dark" : ""}>BorderCountry</Link>
                        <Link className={darkMode ? "dark" : ""}>BorderCountry</Link>
                        <Link className={darkMode ? "dark" : ""}>BorderCountry</Link> */}
                        {/* <Link>BorderCountry</Link>
                        <Link>BorderCountry</Link> */}
                        
                        
                    </div>
                </div>
            </section>
        </div>
    )
}
























// let currencie;
// for (let element in selection.currencies) {
//     currencie = element
// }
// console.log("ici currencie : " + selection.currencies[currencie].name);


{/* {selection.currencies[currencie].name} */}
{/* {currencie} */}