import { createSlice } from '@reduxjs/toolkit';

const awardsSlice = createSlice({
	name: 'awards',
	initialState: [],
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = awardsSlice.actions;

export default awardsSlice.reducer;
