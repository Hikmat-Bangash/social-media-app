import * as UserAPI from '../Api/UserInfoRequest.js'

export const UpdateUserInfo = (id, formdata) => async(dispatch) =>{

    dispatch({type: "UPDATING_START"});

    try {
        const {data} = await UserAPI.UpdateUser(id, formdata);
        dispatch({type: "UPDATING_SUCCESS", data: data});
    } catch (error) {
        dispatch({type: "UPDATING_FAIL"});
        console.log(error);
    }
}

// ------------ for to Follow user --------------------
export const FollowUser = (id, data) => async (dispatch) => {
    console.log("Follow user called successfully")
    dispatch({type: "FollowUser"});
    UserAPI.FollowUser(id, data);

}

// ------------ for to Unfollow User --------------------

export const UnFollowUser = (id, data) => async(dispatch)=>{
    dispatch({type: "UnFollowUser"});
    UserAPI.UnFollowUser(id, data);
}