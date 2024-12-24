import { createSlice } from '@reduxjs/toolkit';

const companiesSlice = createSlice({
	name: 'companies',
	initialState: [],
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = companiesSlice.actions;

export default companiesSlice.reducer;
