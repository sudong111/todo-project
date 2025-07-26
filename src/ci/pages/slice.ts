import { createSlice } from '@reduxjs/toolkit'

interface PageState {
    currentPage: string
}

const initialState: PageState = {
    currentPage: 'home',
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload
        },
    },
})

export const { setPage } = pageSlice.actions
export default pageSlice.reducer