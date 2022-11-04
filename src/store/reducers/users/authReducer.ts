import { auth_type } from '../../types';

const initialState = {
    alternative_signup: [],
    alternative_signup_Loading: false,
    alternative_signup_Error: [],
    google_Auth_Register: [],
    google_Auth_Register_Loading: false,
    google_Auth_Register_Error: [],
    isLogged: false,
    signin: [],
    signin_Loading: false,
    signin_Error: [],
    signup: [],
    signup_Loading: false,
    signup_Error: [],
    forgotPasswordData: [],
    forgotPasswordError: [],
    forgotPasswordLoading: false,
    resetPasswordData: [],
    resetPasswordError: [],
    resetPasswordLoading: false,
    updatePasswordData: [],
    updatePasswordError: [],
    updatePasswordLoading: false,
    onboardLoading: false,
    onboardData: [],
    onboardError: ''
};

export default function authReducer (state = initialState, action: any) {
    switch (action.type) {
        case auth_type.alternative_signup.dataAction:
            return {
                ...state,
                alternative_signup: action.payload,
            };
        case auth_type.alternative_signup.dataLoading:
            return {
                ...state,
                alternative_signup_Loading: action.payload,
            };
        case auth_type.alternative_signup.dataError:
            return {
                ...state,
                alternative_signup_Error: action.payload,
            };
        case auth_type.googleOAuth.dataAction:
            return {
                ...state,
                google_Auth_Register: action.payload,
            };
        case auth_type.googleOAuth.dataLoading:
            return {
                ...state,
                google_Auth_Register_Loading: action.payload,
            };
        case auth_type.googleOAuth.dataError:
            return {
                ...state,
                google_Auth_Register_Error: action.payload,
            };
        case auth_type.isLogged.dataAction:
            return {
                isLogged: action.payload,
            };
        case auth_type.login.dataAction:
            return {
                ...state,
                signin: action.payload,
            };
        case auth_type.login.dataLoading:
            return {
                ...state,
                signin_Loading: action.payload,
            };
        case auth_type.login.dataError:
            return {
                ...state,
                signin_Error: action.payload,
            };
        case auth_type.signUp.dataAction:
            return {
                ...state,
                signup: action.payload,
            };
        case auth_type.signUp.dataLoading:
            return {
                ...state,
                signup_Loading: action.payload,
            };
        case auth_type.signUp.dataError:
            return {
                ...state,
                signup_Error: action.payload,
            };
        case auth_type.forgot.dataAction:
            return {
                ...state,
                forgotPasswordData: action.payload,
            };
        case auth_type.forgot.dataError:
            return {
                ...state,
                forgotPasswordError: action.payload,
            };
        case auth_type.forgot.dataLoading:
            return {
                ...state,
                forgotPasswordLoading: action.payload,
            };
        case auth_type.reset.dataAction:
            return {
                ...state,
                resetPasswordData: action.payload,
            };
        case auth_type.reset.dataError:
            return {
                ...state,
                resetPasswordError: action.payload,
            };
        case auth_type.reset.dataLoading:
            return {
                ...state,
                resetPasswordLoading: action.payload,
            };
        case auth_type.update.dataAction:
            return {
                ...state,
                updatePasswordData: action.payload,
            };
        case auth_type.update.dataError:
            return {
                ...state,
                updatePasswordError: action.payload,
            };
        case auth_type.update.dataLoading:
            return {
                ...state,
                updatePasswordLoading: action.payload,
            };
        case auth_type.onboard.dataLoading:
            return {
                ...state,
                onboardLoading: action.payload,
            };
        case auth_type.onboard.dataAction:
            return {
                ...state,
                onboardData: action.payload,
            };
        case auth_type.onboard.dataError:
            return {
                ...state,
                onboardError: action.payload,
            };
        default:
            return state;
    }
}
