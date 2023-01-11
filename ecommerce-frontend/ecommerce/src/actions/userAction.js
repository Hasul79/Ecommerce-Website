import axios from "axios"
import { ALL_USERS_FAIL, 
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    CLEAR_ERRORS,
    DELETE_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    LOAD_USER_FAIL, 
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS, 
    LOGIN_FAIL, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGOUT_FAIL, 
    LOGOUT_SUCCESS, 
    REGISTER_USER_FAIL, 
    REGISTER_USER_REQUEST, 
    REGISTER_USER_SUCCESS, 
    USER_DETAILS_FAIL, 
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS} from "../constans/userConstans";



export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
  
      // const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(
        `/api/v2/login`,
        { email, password },
        // config
      );
      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
  };
  
  
  export const register = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
  
      // const config = { headers: { "Content-Type": "multipart/form-data" } };

      const { data } = await axios.post(`/api/v2/registration`, userData, );
  
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  export const loadUser = () => async (dispatch) =>{
    try {
        dispatch({type: LOAD_USER_REQUEST});
             
        // const config = { headers:{ "Content-Type": "application/json"} };
  
        const {data} = await axios.get(
            `/api/v2/me`);
             
       dispatch({type: LOAD_USER_SUCCESS, payload: data.user });
    } 
    catch (error) {  
      
        dispatch({type: LOAD_USER_FAIL, payload: error.response.data.message});
    }
  }
  export const clearErrors= () => async (dispatch)=>{
    dispatch({
        type: CLEAR_ERRORS
    })
  }
  export const logout = () => async (dispatch) =>{
    try {        
      await axios.get(`/api/v2/logout`);
             
      dispatch({type: LOGOUT_SUCCESS});
    } catch (error) {  
        dispatch({type: LOGOUT_FAIL, payload: error.response.data.message});
    }
  }
  export const getAllUsers = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_USERS_REQUEST});
      const { data } = await axios.get(`/api/v2/admin/users`);
  
      dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
    } catch (error) {
      dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
    }
  };
  export const deleteUser = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_USER_REQUEST });
  
      const { data } = await axios.delete(`/api/v2/admin/user/${id}`);
  
      dispatch({ type: DELETE_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: DELETE_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  
  export const getUserDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: USER_DETAILS_REQUEST });
      const { data } = await axios.get(`/api/v2/admin/user/${id}`);
  
      dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
    }
  };
  
  