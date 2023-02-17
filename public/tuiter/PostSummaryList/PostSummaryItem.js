const PostSummaryItem = (post) => {

    return(`
        <li class="list-group-item d-flex justify-content-between align-items-center ">
            ${post.topic}<br/>

            ${post.userName}<br/>
            ${post.time}
            ${post.title}
            ${post.image}
         </li>

   `);
}
export default PostSummaryItem;
