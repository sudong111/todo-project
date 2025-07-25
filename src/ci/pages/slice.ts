import { createSlice } from '@reduxjs/toolkit'

interface PageState {
    currentPage: string
}

const initialState: PageState = {
    currentPage: 'home', // 기본 페이지
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