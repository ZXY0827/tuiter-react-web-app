import React from "react";

const PostItem = (
    {
        post = {
            "avatarImage": "../../images/happynessAvatar.png",
            "userName": "Will Smith",
            "handle": "@willsmith",
            "time": "3h",
            "title": "Amazing film The Pursuit of Happyness!",
            "context": "A 2006 American biographical drama film",
            "image": "./../images/happyness.jpeg",
            "thread": "Show this thread",
            "link": "netflix.com",
            "comment":"4.2k",
            "forward": "22k",
            "favorite": "53.9k"
        }
    }
) => {
    return(
        <li className="list-group-item">
            {
                post.retweeted ? (
                    <div className="text-muted ms-5">
                        <i className="bi bi-repeat me-1"></i>
                        <span >{post.retweeted}</span>
                    </div>
                ) : '' }

            <div className="row">
                <div className="float-start col-1">
                    <img width={48} height={48} style={{borderRadius: "50%"}}
                         src={`../../../images/${post.avatarImage}`}/>
                </div>

                <div className="col-11 float-start" style={{paddingLeft: "20px", paddingRight: "30px", maxWidth: "550px"}}>

                    <div className="ms-2">
                        {post.userName}
                        <i className="bi bi-check-circle-fill ms-1"></i>
                        <span className="text-muted fw-light ms-1">
                                {post.handle}
                            &middot; {post.time}
                            </span>
                        <a href="#" className="text-secondary">
                            <i className="bi bi-three-dots float-end"></i>
                        </a>
                        <br/>
                        <span dangerouslySetInnerHTML={{__html:post.title}}></span>
                    </div>

                    {
                        post.image ? (
                            <div className="border mt-2 mb-2 border-secondary" style={{maxWidth: "504px", borderRadius: "15px"}}>
                                <img className="img-fluid" style={{borderRadius: "15px"}}
                                     src={`../../../images/${post.image}`}/>
                            </div>
                        ) :
                            <div className="border mt-2 mb-2  p-2 " style={{maxWidth: "504px", borderRadius: "15px"}}>
                                <div className="ms-2" >
                                    <img width={24} height={23} style={{borderRadius: "50%"}}
                                         src={`../../../images/${post.avatarImage}`}/>
                                    <span className="ms-1">{post.name}</span>
                                    <i className="bi bi-check-circle-fill ms-1"></i>
                                    <span className="text-muted fw-light ms-1">
                                        {post.handle}
                                        &middot; {post.time}
                                    </span>
                                </div>
                                <div className="ms-2 mb-2 mt-1">
                                    <span>{post.text}</span>
                                </div>
                            </div>
                    }
                    <div className="nav navbar" style={{maxWidth: "400px"}}>
                        <a className="text-decoration-none text-muted ms-1" href="#">
                            <i className="bi bi-chat"></i>
                            <span className="ms-2">{post.comment}</span>
                        </a>
                        <a className="text-decoration-none text-muted " href="#">
                            <i className="bi bi-repeat"></i>
                            <span className="ms-2">{post.forward}</span>
                        </a>
                        <a className="text-decoration-none text-muted " href="#">
                            <i className="bi bi-balloon-heart"></i>
                            <span className="ms-2">{post.favorite}</span>
                        </a>
                        <a className="text-decoration-none text-muted" href="#">
                            <i className="bi bi-upload"></i>
                        </a>

                    </div>

                    {
                        post.thread ? (
                            <div className="p-2">
                                <a className="text-decoration-none" href="#">{post.thread}</a>
                            </div>
                        ) : '' }

                </div>

                {/*<div className="col-10">*/}
                {/*    <div>{post.userName}. {post.time}</div>*/}
                {/*    <div className="fw-bolder">{post.topic}</div>*/}
                {/*    <div>{post.title}</div>*/}
                {/*</div>*/}

                {/*<div className="col-2">*/}
                {/*    <img width={70} className="float-end rounded-3" src={`../../../images/${post.image}`}/>*/}
                {/*</div>*/}

            </div>
        </li>
    );
};
export default PostItem;