
export const auth_type = {
    login: {
        dataAction: 'SIGN_IN',
        dataLoading: 'SIGN_IN_LOADING',
        dataError: 'SIGN_IN_ERROR',
    },
    signUp: {
        dataAction: 'SIGN_UP',
        dataLoading: 'SIGN_UP_LOADING',
        dataError: 'SIGN_UP_ERROR',
    },
    googleOAuth: {
        dataAction: 'GOOGLE_OAUTH_LOGIN',
        dataLoading: 'GOOGLE_OAUTH_LOGIN_LOADING',
        dataError: 'GOOGLE_OAUTH_LOGIN_ERROR',
    },
    facebookOAuth: {
        dataAction: 'FB_OAUTH_LOGIN',
        dataLoading: 'FB_OAUTH_LOGIN_LOADING',
        dataError: 'FB_OAUTH_LOGIN_ERROR',
    },
    alternative_signup : {
        dataAction: 'CREATE_ALTERNATIVE_SIGNUP',
        dataLoading: 'CREATE_ALTERNATIVE_SIGNUP_LOADING',
        dataError: 'CREATE_ALTERNATIVE_SIGNUP_ERROR',
    },
    onboard : {
        dataAction: 'ONBOARD_USER',
        dataLoading: 'ONBOARD_USER_LOADING',
        dataError: 'ONBOARD_USER_ERROR',
    },
    isLogged: {
        dataAction: 'IS_LOGGED',
    },
    forgot: {
        dataAction: 'FORGOT_PASSWORD',
        dataLoading: 'FORGOT_PASSWORD_LOADING',
        dataError: 'FORGOT_PASSWORD_ERROR',
    },
    reset: {
        dataAction: 'RESET_PASSWORD',
        dataLoading: 'RESET_PASSWORD_LOADING',
        dataError: 'RESET_PASSWORD_ERROR',
    },
    update: {
        dataAction: 'UPDATE_PASSWORD',
        dataLoading: 'UPDATE_PASSWORD_LOADING',
        dataError: 'UPDATE_PASSWORD_ERROR',
    },
};
