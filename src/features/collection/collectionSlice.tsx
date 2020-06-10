import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { auth, createUserDocument, saveCollection } from '../../db/firebase';

type Collection = {
  gender: string;
  name: string;
  description: string;
  category: string;
  place: string;
};

type CollectionState = {
  collections: [];
};

const initialState: CollectionState = {
  collections: [],
};

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {},
});

export const createCollection = (
  gender: string,
  name: string,
  description: string,
  category: string,
  place: string
): AppThunk => (dispatch) => {
  saveCollection(gender, name, description, category, place);
  console.log(saveCollection);
};
