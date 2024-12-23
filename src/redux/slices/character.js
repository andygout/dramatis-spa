import { createSlice } from '@reduxjs/toolkit';

const characterSlice = createSlice({
	name: 'character',
	initialState: {},
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = characterSlice.actions;

export default characterSlice.reducer;
