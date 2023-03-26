import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const Profile = () => {
    const {profile} = useSelector((state) =>state.profile);
    return(
        <>
            <li className="list-group-item">
                <Link to='/tuiter/explore'>
                    <i className="bi bi-arrow-left text-decoration-none float-start text-black"></i>
                </Link>

                <div className="ms-5">
                    <div>
                        <span className="fw-bold">{profile.firstName} {profile.lastName}</span>
                    </div>
                    <span className="text-muted mb-2" style={{fontSize: 15}}>6,114 Tweets</span>
                </div>
                <div className="position-relative" >
                    <img src={`../../../images/${profile.bannerPicture}`}
                         className="img-fluid"></img>
                    <div>
                        <img src={`../../../images/${profile.profilePicture}`}
                             className="rounded-pill position-absolute" width={140} height={140}
                              style ={{bottom: "-70px", left: "15px"}}>
                        </img>
                    </div>

                    <div>
                        <Link to='/tuiter/edit-profile'>
                            <button className="float-end bg-white rounded-pill mt-2 p-2 border text-decoration-none text-black"
                               style={{paddingLeft: "50px"}} >
                                Edit profile</button>
                        </Link>
                    </div>

                </div>


                <div style={{marginTop:"100px"}}>
                    <div>
                        <span className="fw-bold">{profile.firstName} {profile.lastName}</span><br/>
                        <span className="text-muted">{profile.handle}</span>
                        <p className="mt-3">{profile.bio}</p>
                    </div>

                    <a className="text-decoration-none text-muted ms-1" href="#">
                        <i className="bi bi-geo-alt me-2"></i>
                        <span className="me-2">{profile.location}</span>
                    </a>

                    <a className="text-decoration-none text-muted ms-3" href="#">
                        <i className="bi bi-balloon me-2"></i>
                        <span className="me-2">Born {profile.dateOfBirth}</span>
                    </a>

                    <a className="text-decoration-none text-muted ms-3" href="#">
                        <i className="bi bi-calendar-week me-2"></i>
                        <span>Joined {profile.dateJoined}</span>
                    </a>

                    <div className="mt-2">
                        <span className="fw-bold">{profile.followingCount}</span>
                        <span className="ms-1 text-muted">Following</span>
                        <span className="fw-bold ms-4">{profile.followersCount}</span>
                        <span className="ms-1 text-muted">Followers</span>
                    </div>
                </div>

            </li>

        </>
    );
};
export default Profile;