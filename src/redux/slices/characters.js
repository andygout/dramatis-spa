import { createSlice } from '@reduxjs/toolkit';

const charactersSlice = createSlice({
	name: 'characters',
	initialState: [],
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = charactersSlice.actions;

export default charactersSlice.reducer;
