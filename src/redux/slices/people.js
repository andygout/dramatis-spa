import { createSlice } from '@reduxjs/toolkit';

const peopleSlice = createSlice({
	name: 'people',
	initialState: [],
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = peopleSlice.actions;

export default peopleSlice.reducer;
