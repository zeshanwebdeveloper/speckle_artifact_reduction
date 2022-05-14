import React from "react";  
import ali from "../images/ali.jpg";
import zeshan_crop from "../images/zeshan_crop.jpg";
import khalid from "../images/khalid.jpeg";
import '../App.css';


function Contact() {

    return (
        <>
            <div className="container">
            <h2 className="text-center">Team Members behind this Effort!</h2>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card" style={{ marginBottom: 50, marginTop:50 , "width": "80%" }}>
                            <img src={ali} alt="Ali Ullah" style={{ "width": "100%", height: 300 }} />
                            <div className="container_card" >
                                <h4><b>Ali Ullah</b></h4>
                                <p>Graphic Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card" style={{ marginBottom: 50, marginTop:50, "width": "80%"}} >
                            <img src={zeshan_crop} alt="Zeshan Haider" style={{ "width": "100%", height: 300 }} />
                            <div className="container_card" >
                                <h4><b>Zeshan Haider</b></h4>
                                <p>Web Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card" style={{ marginBottom: 50, marginTop:50, "width": "80%" }}>
                            <img src={khalid} alt="Khalid Khan" style={{ "width": "100%", height: 300 }} />
                            <div className="container_card" >
                                <h4><b>Khalid Khan</b></h4>
                                <p>FrontEndDeveloper</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact