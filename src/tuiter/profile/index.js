import React from "react";
// import {createStore} from "redux";
import {Provider} from "react-redux";
import { configureStore } from '@reduxjs/toolkit';


import Profile from "./profile-component";
import profileReducer from "./profile-reducer";


// const store = createStore(hello);

// const store = configureStore({
//     reducer: {
//         profile: profileReducer,
//     }
// });
const ProfileComponent = () => {
    return(

            <div>
                <Profile/>
            </div>



    );

};

export default ProfileComponent;
