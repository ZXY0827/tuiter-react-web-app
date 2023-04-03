import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk} from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "avatarImage": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    // initialState: tuits,
    initialState,
    extraReducers: {
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        // [findTuitsThunk.pending]:
        //     (state) => {
        //         state.loading = true
        //         state.tuits = []
        //     },
        //
        // [findTuitsThunk.rejected]:
        //     (state, action) => {
        //         state.loading = false
        //         state.error = action.error
        //     }

        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits.filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }



    },
    reducers: { }

    // reducers: {
    //     toggleLike: (state, action) => {
    //         const tweet = state.find((tuit) => tuit._id === action.payload._id);
    //         if (tweet) {
    //             tweet.likes += tweet.liked ? -1 : 1;
    //             tweet.liked = !tweet.liked;
    //         }
    //     },
    //
    //     deleteTuit(state, action) {
    //         const index = state
    //             .findIndex(tuit =>
    //                 tuit._id === action.payload);
    //         state.splice(index, 1);
    //     },
    //
    //     createTuit(state, action) {
    //         state.unshift({
    //             ...action.payload,
    //             ...templateTuit,
    //             _id:(new Date()).getTime(),
    //         })
    //     }
    // }
});

export const {toggleLike, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;