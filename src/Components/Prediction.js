import React from "react";
import { Link } from 'react-router-dom';

function Prediction() {
    return (
        <div >
            <div className="container" style={{"width":"60%", marginTop:100, height: 500}}>
                <h2 className="text-center" style={{marginBottom:50}}>Upload Ultrasound noisy image and we'll de-noise it for you.</h2>
                <div>
                    <label for="formFileLg" className="form-label">Please upload only Ultrasound image!</label>
                    <input className="form-control form-control-lg" id="formFileLg" type="file"/>
                    <br/><br/>
                    <button type="button" class="btn btn-primary">Denoise it</button><br/><br/>
                    <button type="button" class="btn btn-primary" style={{marginLef:5}}>Clear</button>

                </div>
                <br/>
                <br/>
                <Link to="/" class="btn btn-default">Log Out</Link>
            </div>
        </div>
    )
}
export default Prediction