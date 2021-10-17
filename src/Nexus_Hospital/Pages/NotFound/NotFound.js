import React from 'react';
import { useHistory } from 'react-router';
import "./NotFound.css";

const NotFound = () => {
    const history = useHistory();
    return (
        <div>
            <div>
            <img className="w-50 mt-5" src="https://i.ibb.co/0X6b0Bp/404-Error.gif" alt="" />
            </div>
            <div className="mb-5">
                <button onClick={()=> history.push("/home")} className="btn btn-outline-danger mt-3">Back To Home</button>
            </div>
        </div>
    );
};

export default NotFound;