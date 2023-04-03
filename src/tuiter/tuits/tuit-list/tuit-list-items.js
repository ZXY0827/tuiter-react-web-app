import React, {useState}from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteTuit, toggleLike} from "../tuits-reducer";
import TuitStats from "../tuit-stats";
import {deleteTuitThunk} from "../../../services/tuits-thunks";


const TuitItem = ({tuit = tuit }) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    // const toggleLikeHandler = (id) => {
    //     dispatch(toggleLike(id));
    // }

    return(
            <li className="list-group-item">
                <div className="row">
                    <div className="float-start col-1">
                        <img width={48} height={48} style={{borderRadius: "50%"}}
                             src={`../../../images/${tuit.image}`}/>
                    </div>

                    <div className="col-11 float-start" style={{paddingLeft: "20px", paddingRight: "30px", maxWidth: "600px"}}>

                        <div className="ms-2">
                            <span className="fw-bold">{tuit.username}</span>
                            <i className="bi bi-check-circle-fill ms-1 text-primary"></i>
                            <span className="text-muted fw-light ms-1">
                                    {tuit.handle}
                                &middot; {tuit.time}
                                </span>
                            {/*<a href="#" className="text-secondary">*/}
                            {/*    <i className="bi bi-three-dots float-end"></i>*/}
                            {/*</a>*/}
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuit._id)}></i>
                            <br/>
                            <span dangerouslySetInnerHTML={{__html:tuit.tuit}}></span>
                        </div>

                        <TuitStats tuit = {tuit}/>
                    </div>

                </div>
            </li>

    );
};
export default TuitItem;