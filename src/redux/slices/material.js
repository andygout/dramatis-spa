import { createSlice } from '@reduxjs/toolkit';

const materialSlice = createSlice({
	name: 'material',
	initialState: {},
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = materialSlice.actions;

export default materialSlice.reducer;
