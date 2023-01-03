import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import Spinner from "../../component/Spinner";
import { Link } from "react-router-dom";
// import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai';

function VehicleDetails(){
    const params = useParams();
    const { store, actions } = useContext(Context);
    const { vehicle, favorites } = store;
    useEffect(() => {
        actions.getVehicle(`https://www.swapi.tech/api/vehicles/${params.id}`);
    }// eslint-disable-next-line react-hooks/exhaustive-deps
    , [])
    const getImgName = name => {
        return name.toLowerCase().split(" ").join("-") + ".jpg";
    };
    return (
        <div className="row bg-custom rounded-3 my-3">
           { !!vehicle &&
                vehicle.result.properties.name.split(" ").join("").toLowerCase()?
                (
                    <div className="card starship-details my-0 text-bg-dark border-light">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 starship-details-img">
                                <div className="row">
                                    <img
                                        src={`/img/vehicles/${getImgName(vehicle.result.properties.name)}`}
                                        className="img-fluid rounded shadow " alt={`img of ${vehicle.result.properties.name}`}
                                    />
                                </div>
                                <div className="row">
                                    <div className="d-flex justify-content-around py-3">
                                        <Link to="/vehicles" className="btn-link">
                                            <button type="button" className="btn btn-secondary" >
                                                Back to vehicles
                                            </button>
                                        </Link>
                                        {(favorites.indexOf(vehicle.result.properties.name) === -1) ?
                                            (
                                                <div className="btn btn-outline-secondary" onClick={()=>{
                                                    actions.addFavorite(vehicle.result.properties.name)
                                                }}>
                                                    <i class="fa-regular fa-bookmark"></i>
                                                </div>
                                            ) : (
                                                <div className="btn btn-secondary" onClick={()=>{
                                                    actions.removeFavorite(vehicle.result.properties.name)
                                                }}>
                                                    <i class="fa-solid fa-bookmark"></i>
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="card-body">
                                    <h3 className="card-title fs-2 mb-3 text-center ">
                                        {vehicle.result.properties.name}
                                    </h3>
                                    <ul className="list-group text-center shadow">
                                        <li className="list-group-item d-flex justify-content-between"><span>Model:</span> <span>{vehicle.result.properties.model}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Vehicle Class:</span> <span>{vehicle.result.properties.vehicle_class}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Manufacturer:</span> <span>{vehicle.result.properties.manufacturer}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Cost in credits:</span> <span>{vehicle.result.properties.cost_in_credits}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Length:</span> <span>{vehicle.result.properties.length}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Crew:</span> <span>{vehicle.result.properties.crew}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Passengers:</span> <span>{vehicle.result.properties.passengers}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Max atmosphering speed:</span><span>{vehicle.result.properties.max_atmosphering_speed}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Cargo capacity:</span><span>{vehicle.result.properties.cargo_capacity}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Consumables:</span><span>{vehicle.result.properties.consumables}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ) :
                <Spinner />
            }
        </div >
    );
}
export default VehicleDetails;