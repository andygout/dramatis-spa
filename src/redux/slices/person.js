import { createSlice } from '@reduxjs/toolkit';

const personSlice = createSlice({
	name: 'person',
	initialState: {},
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = personSlice.actions;

export default personSlice.reducer;
