import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { auth, createUserDocument } from '../../db/firebase';

type UserState = {
  currrentUser: any;
  isLogin: boolean;
  isFetching: boolean;
};

const initialState: UserState = {
  currrentUser: null,
  isLogin: false,
  isFetching: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUserSuccess: (state, action) => {
      state.currrentUser = action.payload;
      state.isLogin = true;
      state.isFetching = false;
    },
    logined: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
      state.currrentUser = null;
    },
    setCurrentUserFailure: (state) => {
      state.isFetching = false;
    },
  },
});

export const {
  setCurrentUserSuccess,
  logined,
  logout,
  setCurrentUserFailure,
} = userSlice.actions;

export const checkUserAuth = (): AppThunk => (dispatch) => {
  const subscribe = () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserDocument(user);
        await userRef?.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUserSuccess({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
        console.log('login');
      } else {
        dispatch(setCurrentUserFailure());
        console.log('logout');
      }
    });
  };
  subscribe();
};

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
