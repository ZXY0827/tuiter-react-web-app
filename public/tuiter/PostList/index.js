/* eslint-env jquery */
import posts from "./posts.js";
import PostItems from "./PostItems.js";

const PostList = () => {
    return (`
           <ul class="list-group">
              ${
                posts.map(posts => {
                    return (PostItems(posts));
                }).join('')
              }
           </ul>
    `);
}

export default PostList;

