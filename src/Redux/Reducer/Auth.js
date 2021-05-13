initialstate = {
  isFetching: false,
  UserDetails: [],
  RegisterDetails: [],
  Logout:[],
  Mobile:[],
  OTP:[],
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

    default:
      return state;
  }
};
