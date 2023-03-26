import React from "react";
// import posts from './post.json';
// import PostItem from './post-item';
import posts from '../tuits/tuits.json';
import TuitItem from '../tuits/tuit-list/tuit-list-items';
import TuitsList from "../tuits/tuit-list/index";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>

        // <ul className="list-group">
        //     {
        //         posts.map(post =>
        //             <TuitItem
        //                 key={post._id}
        //                 post={post}/>
        //         )
        //     }
        // </ul>
    );
};
export default HomeComponent;