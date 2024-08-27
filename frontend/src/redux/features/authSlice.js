import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const admin = JSON.parse(localStorage.getItem('admin'))

export const addAdmin = createAsyncThunk('admin/register',async(signupData,thunkAPI)=>{
    console.log(signupData,'signupdata')
    try {
        const {data } = await axios.post('http://localhost:3000/admin/register',signupData)
        localStorage.setItem('admin',JSON.stringify(data))
        // console.log(data,'data')
        return data
    } catch (err) {
        console.log(err.message,'err')
        let errMsg = err.response && err.response.data && err.response.data.message
      ? err.response.data.message
      : err.message;
    return thunkAPI.rejectWithValue(errMsg);
    }
})

export const signin = createAsyncThunk('admin/signIn',async (signinData,thunkAPI)=>{
    console.log(signinData,'signindata')
    try {
        const {data} = await axios.post('http://localhost:3000/admin/login',signinData)
        localStorage.setItem('admin',JSON.stringify(data))
        // console.log(data )
        return data
    } catch (err) {
        console.log(err)
        let errMsg = err.response && err.response.data && err.response.data.message
      ? err.response.data.message
      : err.message;
    return thunkAPI.rejectWithValue(errMsg);
    }
})

export const getAdmin = createAsyncThunk('admin/getAdmin',async (adminId,thunkAPI)=>{
    try {
        const {data} = await axios.get(`http://localhost:3000/admin/${adminId}`)
        localStorage.setItem('admin',JSON.stringify(data))
        // console.log(data)
        return data
    } catch (err) {
        console.log(err)
        let errMsg = err.response && err.response.data && err.response.data.message
      ? err.response.data.message
      : err.message;
    return thunkAPI.rejectWithValue(errMsg);
    }
})

export const logout = createAsyncThunk('admin/logout',()=>{
    localStorage.removeItem('admin')
})

const authSlice = createSlice({
    name:'admin',
    initialState:{
        admin:'',
        isLoading: false,
        isError: false,
        message: ''
    },
    reducers:{
        reset:(state)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(addAdmin.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(addAdmin.fulfilled,(state,{payload})=>{
            state.isLoading=false;
            state.admin=payload;
        })
        .addCase(addAdmin.rejected,(state,{payload})=>{
            state.isLoading=false;
            state.isError=true;
            state.message=payload
        })
        .addCase(signin.pending,(state) =>{
            state.isLoading=true
        })
        .addCase(signin.fulfilled,(state,{payload})=>{
            state.isLoading=false;
            state.admin=payload;
        })
        .addCase(signin.rejected,(state,{payload})=>{
            state.isLoading=false;
            state.isError=true;
            state.message=payload
        })
        .addCase(getAdmin.pending,(state) =>{
            state.isLoading=true
        })
        .addCase(getAdmin.fulfilled,(state,{payload})=>{
            state.isLoading=false;
            state.admin=payload;
        })
        .addCase(getAdmin.rejected,(state,{payload})=>{
            state.isLoading=false;
            state.isError=true;
            state.message=payload
        })
        .addCase(logout.pending,(state) =>{
            state.isLoading=true
        })
        .addCase(logout.fulfilled,(state,{payload})=>{
            state.isLoading=false;
            state.admin=payload;
        })
        .addCase(logout.rejected,(state,{payload})=>{
            state.isLoading=false;
            state.isError=true;
            state.message=payload
        })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer