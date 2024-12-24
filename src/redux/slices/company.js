import { createSlice } from '@reduxjs/toolkit';

const companySlice = createSlice({
	name: 'company',
	initialState: {},
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = companySlice.actions;

export default companySlice.reducer;
