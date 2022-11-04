import { auth_type } from '../../types';
import * as utils from '../utils';

// logout user start
export const logoutUser = () => (dispatch: any) => {
    dispatch({ type: auth_type.isLogged.dataAction, payload: false });
    localStorage.clear();
};
// logout user ends

// register user starts
export const registerUser = (userData: any) => {
    return utils.httpPostMethod({
        apiData: {
            url: `/api/users/register`,
            header: utils.header(),
            data: userData,
        },
        actionType: auth_type.signUp,
        onSuccess: (res) => {
            
        }
    });
};

export const clearSignUp = () => {
    return utils.clearHttp({
        actionType: auth_type.signUp,
    });
};
// register user ends


export const googleRegisterUser = (data: any) => {
    return utils.httpPostMethod({
        apiData: {
            url: `/api/users/googleAuth`,
            header: utils.header(),
            data,
        },
        actionType: auth_type.googleOAuth,
        onSuccess: (res) => {
            
        }
    });
};

export const clearGoogleAuth = () => {
    return utils.clearHttp({
        actionType: auth_type.googleOAuth,
    });
};


export const loginUser = (data: any) => {
    return utils.httpPostMethod({
        apiData: {
            url: `/api/users/login`,
            header: utils.header(),
            data,
        },
        actionType: auth_type.login
    });
};

export const clearSignIn = () => {
    return utils.clearHttp({
        actionType: auth_type.login,
    });
};
// login end


export const forgotPassword = (data: any) => {
    return utils.httpPostMethod({
        apiData: {
            url: `${process.env.REACT_APP_FORGOT_PASSWORD}`,
            header: utils.header(),
            data,
        },
        actionType: auth_type.forgot,
    });
};

export const resetPassword = (data: any) => {
    return utils.httpPutMethod({
        apiData: {
            url: `${process.env.REACT_APP_RESET_PASSWORD}`,
            header: utils.header(),
            data,
        },
        actionType: auth_type.reset,
    });
};

export const updatePassword = (data: any, id: string) => {
    return utils.httpPutMethod({
        apiData: {
            url: `${process.env.REACT_APP_UPDATE_PASSWORD}/${id}`,
            header: utils.header(),
            data,
        },
        actionType: auth_type.update,
    });
};

export const clear_Password_Data = () => {
    return utils.clearHttp({
        actionType: auth_type.update,
    });
};

export const clear_Reset_Password_Data = () => {
    return utils.clearHttp({
        actionType: auth_type.reset,
    });
};

export const clear_Forgot_Password_Data = () => {
    return utils.clearHttp({
        actionType: auth_type.forgot,
    });
};