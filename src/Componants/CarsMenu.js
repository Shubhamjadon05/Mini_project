import React from 'react'
import CarsApi from "./CarsApi";
import Sidebar from "./Basics/Sidebar";


const CarsMenu = () => {

    const [CarsMenuData, setCarsMenuData] = React.useState(CarsApi);
    const [SidearData, setSidearData] = React.useState(Sidebar);


    return (
        <>

            <div className='main-div' >



                {CarsMenuData.map((curElim) => {
                    console.log("kjhkjhkjhkj", curElim);
                    return( <>
                        <div className="first-circle"  >  <span>
                            {curElim.name}   {curElim.category}

                           

                        </span>
                            <img className='img' src={curElim.image}></img>
                            <div className=" second-circle">

                                <div className="outer">

                                    <div className="inner">

                                        <div id="number" >  70% </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </>
                    )
                })};



            </div>

        </>




    );
};
export default CarsMenu;