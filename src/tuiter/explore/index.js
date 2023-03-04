import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">

                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search d-inline text-muted position-absolute
                       wd-nudge-up-down"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>

            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link">Entertainment</a>
                </li>
            </ul>

            {/*<li className="nav-item">*/}
            {/*    <a className="nav-link active bg-primary" href="for-you.html">For you</a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*    <a className="nav-link" href="trending.html">Trending</a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*    <a className="nav-link" href="news.html">News</a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*    <a className="nav-link" href="sports.html">Sports</a>*/}
            {/*</li>*/}
            {/*<li className="nav-item d-none d-md-block">*/}
            {/*    <a className="nav-link" href="entertainment.html">Entertainment</a>*/}
            {/*</li>*/}
            <div className="position-relative mb-2">
                <img src="../../../images/starship.jpeg" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;

