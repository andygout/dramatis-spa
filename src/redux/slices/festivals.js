import { createSlice } from '@reduxjs/toolkit';

const festivalsSlice = createSlice({
	name: 'festivals',
	initialState: [],
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = festivalsSlice.actions;

export default festivalsSlice.reducer;
