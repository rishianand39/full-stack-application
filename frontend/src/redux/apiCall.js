import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import axios from "axios"

export const login=async(dispatch,user)=>{
    dispatch(loginStart())
    try {
        const res=await axios.post("https://fullstackapprishi.herokuapp.com/api/auth/login",user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}