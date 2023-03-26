import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "../profile/profile-reducer";
import {Link} from "react-router-dom";

const EditProfile= () => {
    const user = useSelector((state) =>state.profile);
    // console.log(user.profile);
    const [profile, setProfile] = useState(user.profile);

    const dispatch = useDispatch();
    const handleSaveButton = () =>{
        dispatch(updateUser(profile));
    }

    const handleNameChange = (e) => {
        const name = e.target.value;
        const [firstName, lastName=""] = name.split(" ");
        setProfile({
            ...profile,
            firstName,
            lastName
        });
    }

    return (
        <li className="list-group-item">
            <div className="mt-1">
                <Link to='/tuiter/profile'>
                    <i className="bi bi-x-lg text-decoration-none text-black"></i>
                </Link>

                <span className="ms-5 fw-bold">Edit profile</span>
                <Link
                        onClick={handleSaveButton}
                        to='/tuiter/profile'
                        className="btn btn-dark float-end rounded-pill mb-1">Save
                </Link>

                <div className="position-relative" >
                    <img src={`../../../images/${profile.bannerPicture}`}
                         className="img-fluid"></img>
                    <div>
                        <img src={`../../../images/${profile.profilePicture}`}
                             className="rounded-pill position-absolute" width={140} height={140}
                             style ={{bottom: "-70px", left: "15px"}}>
                        </img>
                    </div>
                </div>


                <div className="border form-outline mb-2" style={{marginTop:"100px"}}>
                    <label className="form-label ms-2 mt-2 text-muted" htmlFor="name">Name</label>
                    <textarea className="form-control border-0" id="name" rows="1"
                              defaultValue={profile.firstName + " " + profile.lastName}
                              onChange={handleNameChange}/>
                                {/*onChange={(e) =>*/}
                                {/*    setProfile({*/}
                                {/*        ...profile,*/}
                                {/*        firstName: e.target.value,*/}
                                {/*    })*/}
                                {/*}/>*/}
                </div>


                <div className="border form-outline mb-2">
                    <label className="form-label ms-2 mt-2 text-muted" htmlFor="bio">Bio</label>
                    <textarea className="form-control border-0 " id="bio" rows="2"
                              defaultValue={profile.bio}
                              onChange={(e) =>
                                  setProfile({
                                      ...profile,
                                      bio: e.target.value,
                                  })
                              }/>
                </div>

                <div className="border form-outline mb-2 ">
                    <label className="form-label ms-2 mt-2 text-muted" htmlFor="location">Location</label>
                    <textarea className="form-control border-0" id="location" rows="1"
                              defaultValue={profile.location}
                              onChange={(e) =>
                                  setProfile({
                                      ...profile,
                                      location: e.target.value,
                                  })
                              }/>
                </div>

                <div className="border form-outline mb-2 ">
                    <label className="form-label ms-2 mt-2 text-muted" htmlFor="website">Website</label>
                    <textarea className="form-control border-0" id="website" rows="1"
                            defaultValue={profile.website}
                            onChange={(e) =>
                            setProfile({
                                ...profile,
                                website: e.target.value,
                            })
                    }/>
                </div>

                <div className="border form-outline mb-3">
                    <label className="form-label ms-2 mt-2 text-muted" htmlFor="dateOfBirth">
                        Birth date
                        <a className="ms-1 text-decoration-none"> &middot; Edit</a>
                    </label>

                    <textarea className="form-control border-0" id="dateOfBirth" rows="1"
                              defaultValue={profile.dateOfBirth}
                              onChange={(e) =>
                                  setProfile({
                                      ...profile,
                                      dateOfBirth: e.target.value,
                                  })
                    }/>
                </div>

                <div className="mb-5">
                    <span className="mt-5 ms-2">Switch to professional</span>
                    <i className="bi bi-caret-right float-end"></i>
                </div>



            </div>
        </li>

    )
}

export default EditProfile;