import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { FaGlasses } from 'react-icons/fa6'
import goalService from './goalService'

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Create new goal

export const createGoal = createAsyncThunk('goals/create', async (goalData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await goalService.createGoal(goalData, token)
    }catch (error) {
        const message = 
        (error.response && error.response.data && error.response.data.message) ||
        error.message || 
        error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (buuilder) => {
        builder
            .addCase(createGoal.pending, (state) => {
                state.isLoading = false
            })
            .addCase(createGoal.fulfilled, (state, action) => {
                state.isLoading = false 
                state.isSuccess = true 
                stete.goals.push(action.payload)
            })
            .addCase(createGoal.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true 
                state.message = action.payload
            })
    }
})

export const {reset} = goalSlice.actions
export default goalSlice.reducer