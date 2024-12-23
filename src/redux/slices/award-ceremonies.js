import { createSlice } from '@reduxjs/toolkit';

const awardCeremoniesSlice = createSlice({
	name: 'awardCeremonies',
	initialState: [],
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = awardCeremoniesSlice.actions;

export default awardCeremoniesSlice.reducer;
