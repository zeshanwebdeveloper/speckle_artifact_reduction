import React from "react";
import { Link } from 'react-router-dom';

function Prediction() {
    return (
        <div >
            <div className="container" style={{"width":"60%"}}>
                <h2 className="text-center" style={{marginBottom:50}}>Upload Ultrasound noisy image and we'll de-noise it for you.</h2>
                <div className="row">
                    <div className="col-sm-5">
                        <p>Contact us and we'll get back to you within 24 hours.</p>
                        <p><span className="glyphicon glyphicon-map-marker"></span> NUML H-9, Islamabad, Pakistan</p>
                        <p><span className="glyphicon glyphicon-phone"></span> +92-51-9265100</p>
                        <p><span className="glyphicon glyphicon-envelope"></span> info@numl.edu.pk</p>
                    </div>
                    <div className="col-sm-7">
                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
                            </div>
                            <div className="col-sm-6 form-group">
                                <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
                            </div>
                        </div>
                        <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br />
                        <div className="row">
                            <div className="col-sm-12 form-group">
                                <button className="btn btn-default pull-right" type="submit">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/" class="btn btn-default">Log Out</Link>
            </div>
        </div>
    )
}
export default Prediction