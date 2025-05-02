import {create} from 'zustand';
import axiosAPI from '../api/axiosAPI';
import {toast} from 'react-toastify'
const useAuthStore=create((set)=>({
    user:null,
    token:null,
    loading:false,
    error:null,

    // regsiter
    register:async (formData)=>{
        set({loading:true,error:null})
        try {
            const {data}=await axiosAPI.post("/auth/register",formData);
            localStorage.setItem("accessToken",data.accessToken);
            localStorage.setItem("userId",data.id);
            set({user:data.user,token:data.accessToken,loading:false});
            toast.success("Successfully");
        } catch (error) {
            set({error:error?.response?.data?.message || "Registration error!",loading:false});
            toast.error("Something went wrong");
        }
    },
    login:async (formData)=>{
        set({loading:true,error:false})
        try {
            const {data}=await axiosAPI.post("/auth/login",formData);
            localStorage.setItem("accessToken",data.accessToken);
            localStorage.setItem("userId",data.id);
            set({user:data.user,token:data.accessToken,loading:false});
            toast.success("Successfully");
        } catch (error) {
            set({error:error?.response?.data?.message || "Registration error!"});
            toast.error("Something went wrong");
        }
    },
    logout:()=>set({user:null,token:null}),
    forgotPassword: async (email)=>{
        set({loading:true,error:null})
        try {
            await axiosAPI.post("/auth/forgot-password",{email});
            toast.success("Link sent to your email.");
            set({loading:false})
        } catch (error) {
            set({error:error?.response?.data?.message || "Forgot password error!",loading:false});
            toast.error("Something went wrong");
        }
    },
    resetPassword:async (password,confirmPassword)=>{
        set({loading:true,error:null});
        try {
            await axiosAPI.put("/auth/reset-password",{password,confirmPassword});
            toast.success("Password reseted successfully.Just you should be autentification");
            set({loading:false});
        } catch (error) {
            set({error:error?.response?.data?.message || "Forgot password error!",loading:false});
            toast.error("Something went wrong");
        }
    }
}));
export default useAuthStore;