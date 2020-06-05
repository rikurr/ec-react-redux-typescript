import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

type AppState = {
  messages: string[];
  validateError: boolean;
  errorMessage: string;
};

const initialState: AppState = {
  messages: [],
  validateError: false,
  errorMessage: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    flashMessage: (state, action: PayloadAction<string>) => {
      state.messages.push(action.payload);
    },
    hasError: (state, action: PayloadAction<string>) => {
      state.validateError = true;
      state.errorMessage = action.payload;
    },
  },
});

export const { flashMessage, hasError } = appSlice.actions;

export const selectApp = (state: RootState) => state.appState;

export default appSlice.reducer;
