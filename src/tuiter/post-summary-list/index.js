import React, {useEffect} from "react";
// import postsArray from './posts.json';
import PostSummaryItem from './post-summary-item';
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";
import TuitItem from "../tuits/tuit-list/tuit-list-items";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuitsData.tuits)
    const dispatch = useDispatch();
    useEffect(() => {dispatch(findTuitsThunk())}, []);

    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                        <PostSummaryItem
                            key={post._id}
                            post={post}/>
                    )
            }
        </ul>
    );
};
export default PostSummaryList;