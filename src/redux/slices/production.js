import { createSlice } from '@reduxjs/toolkit';

const productionSlice = createSlice({
	name: 'production',
	initialState: {},
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = productionSlice.actions;

export default productionSlice.reducer;
