import { commonApi } from "./commonApi"
import { serverURL } from "./serverURL"

export const registerUserApi = async (reqBody)=>{
    return await commonApi('POST',`${serverURL}/register`,reqBody)
}

export const getRegisteredUserApi = async()=>{
    return await commonApi('GET',`${serverURL}/register`,"")
}



export const addExpenseApi = async (reqBody)=>{
    return await commonApi('POST',`${serverURL}/expenses`,reqBody)

}

export const getExpenseApi =async ()=>{
    return await commonApi('GET',`${serverURL}/expenses`,"")
}

export const deleteExpenseApi = async (id)=>{
    return await commonApi('DELETE',`${serverURL}/expenses/${id}`,{})
}
