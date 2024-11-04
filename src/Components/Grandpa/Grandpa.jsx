import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';


const AssetContext = createContext('gold');


const Grandpa = () => {
    const asset = 'diamond';
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <AssetContext.Provider value="gold">
                <section className="flex">
                    <Dad asset={asset}></Dad>
                    <Uncle asset={asset}></Uncle>
                    <Aunty></Aunty>
                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;


/**
 * FOR USING CONTEXT API
 * 
 * 1. Create a context and export it
 * 2. Add Provider For The Context With A Value.
 * 3.
 */