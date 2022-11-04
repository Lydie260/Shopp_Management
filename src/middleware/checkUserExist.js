import UserModel from "../models/user";
import { hashPassword, isPasswordMatching } from "../utils/hashPassword";
import response from "../utils/response";
import status from "http-status";

export const checkUser = async (req, res, next) => {
    let { email, password} = req.body;
    const user = await UserModel.findOne({email});
    if(!user){
        req.body.password = hashPassword(password);
        return next();
    }
    return response.errorMessage(res, "user is already Exist",status.CONFLICT)
};

export const loginUser = async (req, res) =>{
    let {email, password} = req.body;
    const user = await UserModel.findOne({email});
    if (!user) {
        return response.errorMessage(res, "user does not exist", status.NOT_FOUND);
    }
    if(isPasswordMatching(password,
        user.password
        )){
            user.password=null;
            return response.succesMessage(res, "successfully logged in", user,status.OK);
        }
        return response.errorMessage(res, "Invalid password", status.BAD_REQUEST)
};