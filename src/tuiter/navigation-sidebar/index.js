import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (


        <div className="list-group">
            <a className="list-group-item">
                <i className="bi bi-twitter text-primary"></i>
            </a>
            <Link to="/tuiter/home" className={`list-group-item d-block d-xl-none ${active === 'home'?'active':''}`}>
                <i className="bi bi-house"></i>
            </Link>
            <Link to="/tuiter/home" className={`list-group-item d-none d-xl-block ${active === 'home'?'active':''}`}>
                <i className="bi bi-house me-1"></i>
                Home
            </Link>

            <Link to="/tuiter/explore" className={`list-group-item d-block d-xl-none ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash"></i>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item d-none d-xl-block ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash me-1"></i>
                Explore
            </Link>

            <Link to="/" className="list-group-item d-block d-xl-none">
                <i className="bi bi-archive"></i>
            </Link>

            <Link to="/" className="list-group-item d-none d-xl-block">
                <i className="bi bi-archive me-1"></i>
                Labs
            </Link>

            <a className={`list-group-item d-block d-xl-none ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell"></i>
            </a>
            <a className={`list-group-item d-none d-xl-block ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell me-1"></i>
                Notifications
            </a>

            <a className={`list-group-item d-block d-xl-none ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope"></i>
            </a>
            <a className={`list-group-item d-none d-xl-block ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope me-1"></i>
                Messages
            </a>

            <a className={`list-group-item d-block d-xl-none ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark"></i>
            </a>
            <a className={`list-group-item d-none d-xl-block ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark me-1"></i>
                Bookmarks
            </a>

            <a className={`list-group-item d-block d-xl-none ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-task"></i>
            </a>
            <a className={`list-group-item d-none d-xl-block ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-task me-1"></i>
                Lists
            </a>

            <a className={`list-group-item d-block d-xl-none ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person"></i>
            </a>
            <a className={`list-group-item d-none d-xl-block ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person me-1"></i>
                Profile
            </a>

            <a className={`list-group-item d-block d-xl-none ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots"></i>
            </a>
            <a className={`list-group-item d-none d-xl-block ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots me-1"></i>
                More
            </a>

            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>

        </div>


    );
};
export default NavigationSidebar;
