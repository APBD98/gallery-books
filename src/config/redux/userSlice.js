import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",
    initialState: {
        logo:"Az"
    }
})

export const userReducer = userSlice.reducer