const PostSummaryItem = (post) => {

    return(`
        <li class="list-group-item d-flex justify-content-between align-items-center ">
            <div class=" text-muted ">
                ${post.topic}
                <div class="fw-bold text-white" style="margin-right: 12px;">
                    ${post.userName}
                    <i class="fa-solid fa-circle text-white"></i>
                    <span class="text-muted fw-light">- ${post.time}</span>
                    <br/>
                    ${post.title ? `<span class="text-white">${post.title}</span>` : ''}
                    
                
                </div>
                ${post.tweets ? `<span class="text-muted">${post.tweets}</span>` : ''}
                
            </div>
            <img class="float-end d-block "
                 src="${post.image}" style="width: 100px; height: 100px; margin-top: 10px; border-radius: 25px;"/>
        </li>
  
   `);
}
export default PostSummaryItem;
