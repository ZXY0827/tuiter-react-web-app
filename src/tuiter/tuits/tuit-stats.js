import React from "react"
import {useDispatch} from "react-redux";
import {toggleLike} from "./tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";



const TuitStats = ({tuit = tuit}) => {
    const dispatch = useDispatch();
    // const toggleLikeHandler = (tuit) => {
    //     dispatch(toggleLike(tuit))
    // }
    const handleLike = () => {
        const newLikedValue = !tuit.liked;
        const newLikesValue = newLikedValue ? tuit.likes + 1 : tuit.likes - 1;
        dispatch(
            updateTuitThunk({
                ...tuit,
                liked: newLikedValue,
                likes: newLikesValue,
            })
        );
    };
    const handleDislike = () => {
        const newDislikedValue = !tuit.disliked;
        const newDislikesValue = newDislikedValue
            ? tuit.dislikes + 1
            : tuit.dislikes - 1;
        dispatch(
            updateTuitThunk({
                ...tuit,
                disliked: newDislikedValue,
                dislikes: newDislikesValue,
            })
        );
    };
    return (
        <div className="nav navbar" >
            <a className="text-decoration-none ms-2 text-black mt-2 me-2 ms-2" href="#">
                <i className="bi bi-chat"></i>
                <span className="ms-2">{tuit.replies}</span>
            </a>
            <a className="text-decoration-none text-black mt-2 me-2 ms-2" href="#">
                <i className="bi bi-repeat"></i>
                <span className="ms-2">{tuit.retuits}</span>
            </a>

            <div className="mt-2 me-2">
                <i
                    className={`bi bi-heart-fill  me-2 ${
                        tuit.liked ? "text-danger" : ""
                    }`}
                    onClick={handleLike}
                ></i>
                {tuit.likes}
            </div>

            <div className="mt-2 me-2">
                <i
                    className={`bi bi-hand-thumbs-down me-2 ${
                        tuit.disliked ? "text-danger" : ""
                    }`}
                    onClick={handleDislike}
                ></i>
                {tuit.dislikes}

            </div>

            <a className="text-decoration-none text-black mt-2 ms-2" href="#">
                <i className="bi bi-upload"></i>
            </a>


            {/*<div className="mt-2 me-2 ms-2">*/}
            {/*    tuit.liked ? (*/}
            {/*    <i className="bi bi-heart-fill me-2"*/}
            {/*       onClick={() => dispatch(updateTuitThunk({*/}
            {/*           ...tuit,*/}
            {/*           likes: tuit.likes + 1*/}
            {/*       }))} ></i>*/}
            {/*    {tuit.likes}*/}
            {/*    ): <i className="bi bi-heart-fill me-2 text-danger"*/}
            {/*          onClick={() => dispatch(updateTuitThunk({*/}
            {/*              ...tuit,*/}
            {/*              likes: tuit.likes - 1*/}
            {/*          }))} ></i>*/}
            {/*    {tuit.likes}*/}
            {/*</div>*/}


            {/*<div className="mt-2 me-2 ms-2">*/}
            {/*    <i className="bi bi-heart-fill me-2 text-danger"*/}
            {/*        onClick={() => dispatch(updateTuitThunk({*/}
            {/*        ...tuit,*/}
            {/*        likes: tuit.likes + 1*/}
            {/*    }))} ></i>*/}
            {/*    {tuit.likes}*/}
            {/*</div>*/}

            {/*<div className="mt-2 me-2 ms-2">*/}
            {/*    <i className="bi bi-hand-thumbs-down me-2"*/}
            {/*       onClick={() => dispatch(updateTuitThunk({*/}
            {/*           ...tuit,*/}
            {/*           dislikes: tuit.dislikes + 1*/}
            {/*       }))} ></i>*/}
            {/*    {tuit.dislikes}*/}

            {/*</div>*/}



            {/*<i className={*/}
            {/*    tuit.liked ? (*/}
            {/*        "bi bi-balloon-heart-fill text-decoration-none text-danger mt-2"*/}
            {/*    )  : "bi bi-balloon-heart-fill  text-decoration-none mt-2"}*/}
            {/*   onClick={() => dispatch(updateTuitThunk({*/}
            {/*       ...tuit,*/}
            {/*       likes: tuit.likes + 1*/}
            {/*   }))}>*/}
            {/*    <span className="ms-2">{tuit.likes}</span>*/}

            {/*</i>*/}




        </div>
    );

};

export default TuitStats;