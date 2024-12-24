import { createSlice } from '@reduxjs/toolkit';

const productionsSlice = createSlice({
	name: 'productions',
	initialState: [],
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = productionsSlice.actions;

export default productionsSlice.reducer;
