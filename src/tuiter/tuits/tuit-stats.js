import React from "react"
import {useDispatch} from "react-redux";
import {toggleLike} from "./tuits-reducer";



const TuitStats = ({tuit = tuit}) => {
    const dispatch = useDispatch();
    const toggleLikeHandler = (tuit) => {
        dispatch(toggleLike(tuit))
    }
    return (
        <div className="nav navbar" style={{maxWidth: "400px"}}>
            <a className="text-decoration-none ms-2 text-black mt-2" href="#">
                <i className="bi bi-chat"></i>
                <span className="ms-2">{tuit.replies}</span>
            </a>
            <a className="text-decoration-none text-black mt-2" href="#">
                <i className="bi bi-repeat"></i>
                <span className="ms-2">{tuit.retuits}</span>
            </a>
            <i className={
                tuit.liked ? (
                    "bi bi-balloon-heart-fill text-decoration-none text-danger mt-2"
                )  : "bi bi-balloon-heart-fill  text-decoration-none mt-2"}
               onClick={() => toggleLikeHandler(tuit)}>
                <span className="ms-2">{tuit.likes}</span>

            </i>
            <a className="text-decoration-none text-black mt-2" href="#">
                <i className="bi bi-upload"></i>
            </a>


        </div>
    );

};

export default TuitStats;