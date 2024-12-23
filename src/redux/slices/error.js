import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
	name: 'error',
	initialState: { isActive: false },
	reducers: {
		activated (state, action) {

			return { isActive: true, ...action.payload };

		},
		deactivated () {

			return { isActive: false };

		}
	}
});

export const {
	activated,
	deactivated
} = errorSlice.actions;

export default errorSlice.reducer;
