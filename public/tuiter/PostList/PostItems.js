const PostItems = (posts) => {

    return(`
    <li class="list-group-item  justify-content-between align-items-center border-secondary" style="border-width: 0 0 1px 0;" >
            <div class="row mt-2" >
                <div class="float-start col-1" style="padding-left: 3px;">
                    <img class="ms-1" 
                         style="width: 48px; height: 48px; border-radius: 50%; "
                         src="${posts.avatarImage}"/>
                </div>
                <div class="col-11 float-start" style="padding-left:20px; padding-right: 30px; max-width: 550px;">
<!--                    <div class="float-start ms-2 ">-->
                        <div class="">
                            ${posts.userName}
                            <i class="fas fa-check-circle "></i>
                            <span class="text-muted fw-light ms-1">
                                ${posts.handle}
                                &middot; ${posts.time}
                            </span>
                            <a href="#" class="text-secondary">
                                <i class="fa fa-solid fa-ellipsis float-end"></i>
                            </a>
                            <br/>
                            ${posts.title}
                        </div>
                        <div class="border mt-2 mb-2 border-secondary" style="max-width: 504px; border-radius: 15px; ">
                            ${posts.context && posts.text && posts.link ? `
                                <img class="mt-0 img-fluid border-bottom border-secondary"
                                 src="${posts.image}" style="margin-top: 10px; border-radius: 15px 15px 0px 0px ;"/>
                            
                            
                                <div class="ms-3 mt-2 me-2 mb-3">
                                    ${posts.context ? `<p class="mb-0">${posts.context}</p>` : ''}
                                    ${posts.text ? ` <span class="text-muted">${posts.text}</span>` : ''}
                                    <div>
                                        ${posts.link ? ` 
                                             <a href="#" class="text-decoration-none text-muted">
                                                <i class="fa-solid fa-link"></i> ${posts.link}
                                             </a>` : ''}
                                    </div>
                                </div> 
                                ` : `
                                <img class="mt-0 img-fluid"
                                 src="${posts.image}" style="margin-top: 10px; border-radius: 15px;"/>
                            `}           
                        </div>
                        <div class="nav navbar" style="max-width: 400px;" >
                            <a class="text-decoration-none text-muted ms-1" href="#">
                                <i class="fa fa-regular fa-comment"></i>
                                <span class="ms-2">${posts.comment}</span>
                            </a>
                            <a class="text-decoration-none text-muted " href="#">
                                <i class="fa fa-solid fa-retweet"></i>
                                <span class="ms-2">${posts.forward}</span>
                            </a>
                            <a class="text-decoration-none text-muted " href="#">
                                <i class="fa fa-regular fa-heart"></i>
                                <span class="ms-2">${posts.favorite}</span>
                            </a>
                            <a class="text-decoration-none text-muted" href="#">
                                <i class="fa fa-solid fa-arrow-up-from-bracket"></i>
                            </a>
                            
                        </div>
                </div>
            </div>
        </li>
  
   `);
}
export default PostItems;


