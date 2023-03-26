import { createSlice } from '@reduxjs/toolkit'

const initialProfile = {
    profile : {
        firstName: 'Zixuan',
        lastName: 'Yang',
        handle: '@zixuan',
        profilePicture: 'profile.jpeg',
        bannerPicture: 'northeastern-uni.jpeg',
        bio: 'Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).',
        website: 'youtube.com/webdevtv',
        location: 'Boston, MA',
        dateOfBirth: '7/7/1968',
        dateJoined: '4/2009',
        followingCount: 340,
        followersCount: 223
    },
};

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfile,
    reducers: {
        updateUser: (state, action) =>{
            state.profile = action.payload;
        },
    },
});
export default profileSlice.reducer;
export const {updateUser} = profileSlice.actions;
