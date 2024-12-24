import { createSlice } from '@reduxjs/toolkit';

const materialsSlice = createSlice({
	name: 'materials',
	initialState: [],
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = materialsSlice.actions;

export default materialsSlice.reducer;
