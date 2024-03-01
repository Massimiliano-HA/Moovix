import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  password: string;
  avatar: string | null;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
