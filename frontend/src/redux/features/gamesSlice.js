import {
    createAsyncThunk,
    createSlice 
} from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.baseURL = `http://localhost:3000`

const admin =
//  () =>{

// return
 JSON.parse(localStorage.getItem('admin'))

// }


export const addGame = createAsyncThunk('/add-game',async(game,thunkAPI)=>{
    // console.log(admin.token,'admin')
try {
    const {data } = await axios.post('http://localhost:3000/games',game, 
    {   headers: {
        "Content-Type":'multipart/form-data',
        Authorization  :`${admin.token}`

      }})
    // console.log(data)
    return data
} catch (err) {
    console.log(err)
    console.log(err)
    let errMsg = err.response && err.response.data && err.response.data.message
  ? err.response.data.message
  : err.message;
return thunkAPI.rejectWithValue(errMsg);
}
})

export const getGames = createAsyncThunk('games/getGames' ,async (thunkAPI) =>{
 
    try {
        const {data}  = await axios.get('/games')
        console.log(data,'dats')
        return data
    } catch (err) {
        console.log(err)
        let errMsg = err.response && err.response.data && err.response.data.message
      ? err.response.data.message
      : err.message;
    return thunkAPI.rejectWithValue(errMsg);
    }
})

export const getGame = createAsyncThunk('games/getGame' ,async (gameId,thunkAPI) =>{
    try {
        const {data}  = await axios.get(`http://localhost:3000/games/${gameId}`)
        console.log(data,'dats')
        return data
    } catch (err) {
        console.log(err)
        let errMsg = err.response && err.response.data && err.response.data.message
      ? err.response.data.message
      : err.message;
    return thunkAPI.rejectWithValue(errMsg);
    }
})


export const searchedGames = createAsyncThunk('games/searchedGames' ,async (games,thunkAPI) =>{
    try {
        const {data}  = await axios.post(`http://localhost:3000/games`,games)
        console.log(data,'dats')
        return data
    } catch (err) {
        console.log(err)
        let errMsg = err.response && err.response.data && err.response.data.message
      ? err.response.data.message
      : err.message;
    return thunkAPI.rejectWithValue(errMsg);
    }
})



const gamesSlice = createSlice({
    name: "games",
    initialState: {
        game: '',
        games: [],
        newArr:[],
        isLoading: false,
        isError: false,
        message: ''
    },
    reducers:{
        reset:(state)=>{
            state.games=[],
            state.newArr=[],
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getGames.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getGames.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.games = payload;
            })
            .addCase(getGames.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = true;
                state.message = payload;
            })
            .addCase(addGame.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addGame.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.games.push(payload); // Assuming payload is the new game
            })
            .addCase(addGame.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = true;
                state.message = payload;
            })
            .addCase(getGame.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getGame.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.game = payload; // Assuming payload is the new game
            })
            .addCase(getGame.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = true;
                state.message = payload;
            })
            .addCase(searchedGames.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(searchedGames.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.newArr = payload; // Assuming payload is the new game
            })
            .addCase(searchedGames.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = true;
                state.message = payload;
            });
    }
});



export const {games,reset} = gamesSlice.actions
export default gamesSlice.reducer