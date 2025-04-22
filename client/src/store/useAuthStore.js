import {create} from 'zustand';
import axiosAPI from '../api/axiosAPI';

const useAuthStore=create((set)=>({
    user:null,
    token:null,
    loading:false,
    error:null,

    // regsiter
    register:async (formData)=>{
        set({loading:true,error:null})
        try {
            const {data}=axiosAPI.post("/auth/register",formData);
            set({user:data.user,token:data.accessToken,loading:false});
        } catch (error) {
            set({error:error?.response?.data?.message || "Registration error!",loading:false});
        }
    },
    login:async (formData)=>{
        set({loading:true,error:false})
        try {
            const {data}=await axiosAPI.post("/auth/login",formData);
            set({user:data.user,token:data.accessToken,loading:false});
        } catch (error) {
            set({error:error?.response?.data?.message || "Registration error!"});
        }
    },
    logout:()=>set({user:null,token:null})
}));
export default useAuthStore;