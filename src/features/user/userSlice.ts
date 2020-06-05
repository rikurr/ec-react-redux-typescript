import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { auth } from '../../db/firebase';

type UserState = {
  currrentUser: any;
  isLogin: boolean;
};

const initialState: UserState = {
  currrentUser: null,
  isLogin: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currrentUser = action.payload;
    },
    logined: (state) => {
      state.isLogin = true;
    },
    logout: state => {
      state.isLogin = false;
    }
  },
});

export const { setCurrentUser, logined, logout } = userSlice.actions;

export const subscribeFromAuth = (): AppThunk => (dispatch) => {
  const subscribe = async () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(logined());
      }
      console.log(user);
    });
  };
  subscribe();
};

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
