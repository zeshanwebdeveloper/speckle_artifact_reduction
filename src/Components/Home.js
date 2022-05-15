import React from "react";
import doctor from "../images/home_pic.jpg";
import '../App.css';
function Home() {

    return (
        <>
            <div >
                <div>
                    <img src={doctor} alt="doctor" style={{width:"100%", marginTop: -20, position: "relative"}} />
                    <div className="title"><h1 className="heading">Speckle Artifact Reduction<br/> From Ultrasound Imaging</h1>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home