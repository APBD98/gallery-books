import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",
    initialState: {
        logo:"Az",
        email:" "
    },
    reducers:{
        displayUser: (state, action) => {
            state.email = action.payload
        }
    }
})


export const {displayUser} = userSlice.actions
export default userSlice.reducer