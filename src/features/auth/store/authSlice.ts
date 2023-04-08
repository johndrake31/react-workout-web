import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../../../store';
import {IAuthDecoded} from '../types/Auth';

export interface AuthState {
  userToken: string | null;
  userInfo: IAuthDecoded | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: AuthState = {
  userToken: '',
  userInfo: null,
  status: 'idle',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>)=>{
            state.userToken = action.payload;
        },
        setUser: (state, action: PayloadAction<IAuthDecoded>)=>{
            state.userInfo = action.payload;
        },
        removeToken: (state)=>{
            state.userToken = null;
        }

    }
})
export const selectToken = (state: RootState) => state.userAuth.userToken;
export const selectUser = (state: RootState) => state.userAuth.userInfo;
export const {setToken, removeToken, setUser} = authSlice.actions;
export default authSlice.reducer 