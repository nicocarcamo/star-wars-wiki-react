import React from "react";
import { Link } from 'react-router-dom';

const Card = (props) => {
    const getImgName = name => {
        return name.toLowerCase().split(" ").join("-") + ".jpg";
    };
    return (
        props.elements &&
        props.elements.results.map((element, index) => (
            <div className="col-md-4" key={index} >
                <div className="card my-3 border-light text-bg-dark">
                    <img
                        src={`img/${props.imgroute}/${getImgName(element.name)}`}
                        className="card-img-top" alt={`img of ${element.name}`}
                    />
                    <div className="card-body">
                        <h4 className="card-title fs-5 text-center">
                            {element.name}
                        </h4>
                    </div>
                    <div className="card-footer d-flex justify-content-around">
                        <Link to={`${element.name.split(" ").join("").toLowerCase()}/${element.uid}`}>
                            <button type="button" className="btn btn-warning" >
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        ))
    )
}
export default Card;