import React from "react";
import doctor from "../images/doctor.png";
function Home() {

    return (
        <>
            <div style={{ width: "100", backgroundColor: "#97A8ED", height: 600, marginTop: -30, position: "relative" }}>
                <div>
                    <img src={doctor} alt="doctor" />
                </div>
            </div>

        </>
    )
}

export default Home