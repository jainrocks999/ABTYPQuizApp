initialstate = {
  isFetching: false,
  UserDetails: [],
  RegisterDetails: [],
  ChangePassword:[],
  Logout:[],
  Mobile:[],
  OTP:[],
  Forget:[]
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case 'User_Login_Request':
      return {...state, isFetching: true};
    case 'User_Login_Success':
      return {...state, isFetching: false, UserDetails: action.payload};
    case 'User_Login_Error':
      return {...state, isFetching: false};

    case 'User_Register_Request':
      return {...state, isFetching: true};
    case 'User_Register_Success':
      return {...state, isFetching: false, RegisterDetails: action.payload};
    case 'User_Register_Error':
      return {...state, isFetching: false};

    case 'Change_Password_Request':
      return {...state, isFetching: true};
    case 'Change_Password_Success':
      return {...state, isFetching: false, ChangePassword: action.payload};
    case 'Change_Password_Error':
      return {...state, isFetching: false};
      
    case 'User_Logout_Request':
      return {...state, isFetching: true};
    case 'User_Logout_Success':
      return {...state, isFetching: false, Logout: action.payload};
    case 'User_Logout_Error':
      return {...state, isFetching: false};

    case 'Mobile_Varification_Request':
        return {...state, isFetching: true};
    case 'Mobile_Varification_Success':
        return {...state, isFetching: false, Mobile: action.payload};
    case 'Mobile_Varification_Error':
        return {...state, isFetching: false};

    case 'OTP_Varification_Request':
        return {...state, isFetching: true};
    case 'OTP_Varification_Success':
        return {...state, isFetching: false, OTP: action.payload};
    case 'OTP_Varification_Error':
        return {...state, isFetching: false};

    case 'Forgot_Password_Request':
        return {...state, isFetching: true};
    case 'Forgot_Password_Success':
        return {...state, isFetching: false,};
    case 'Forgot_Password_Error':
        return {...state, isFetching: false};

    default:
      return state;
  }
};
