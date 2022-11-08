import React, { useState } from "react";
import CarsMenu from "./CarsMenu";
import './Container.css'
import sidebar from "./Basics/Sidebar";



const Container = () => {
    const [CarsData, setCarsData] = useState(CarsMenu);
    console.log(CarsMenu);
    // const [Sidebar,setSidearData]=useState(Sidebar);

    const filteritem = (category) => {

        const updatedList = CarsMenu.filter((curElem) => {
            return curElem.category === category;       
        });
        setCarsData(updatedList);
    };
   
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group-item"
                        onClick={() => filteritem({})}> OPERATIONAL</button>
                    <button className="btn-group-item" onClick={() => filteritem("suv")}>FINANCIAL</button>
                </div>
            </nav>
            <CarsMenu CarsData={CarsData} />
        </>

    );
};
export default Container;