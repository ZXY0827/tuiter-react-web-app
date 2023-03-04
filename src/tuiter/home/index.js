import React from "react";
import posts from './post.json';
import PostItem from './post-item';

const HomeComponent = () => {
    return(
        <ul className="list-group">
            {
                posts.map(post =>
                    <PostItem
                        key={post._id}
                        post={post}/>
                )
            }
        </ul>
    );
};
export default HomeComponent;