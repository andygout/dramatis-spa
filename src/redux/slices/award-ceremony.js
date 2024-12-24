import { createSlice } from '@reduxjs/toolkit';

const awardCeremonySlice = createSlice({
	name: 'awardCeremony',
	initialState: {},
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = awardCeremonySlice.actions;

export default awardCeremonySlice.reducer;
