import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface User {
  username: string;
  password: string;
  avatar: string | null;
}

interface AuthenticatedUser extends User {
  isAuthenticated: boolean;
}

interface UserState {
  users: User[];
  currentUser: AuthenticatedUser | null;
}

const initialState: UserState = {
  users: [],
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    loginUser(state, action: PayloadAction<AuthenticatedUser>) {
      state.currentUser = action.payload;
    },
    logoutUser(state) {
      state.currentUser = null;
    },
  },
});

export const {createUser, loginUser, logoutUser} = userSlice.actions;
export default userSlice.reducer;
