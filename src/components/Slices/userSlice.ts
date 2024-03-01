// userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  username: string;
  password: string;
  avatar: string | null;
}

interface UserWithWatchlist extends User {
  watchlist: WatchlistContent[];
}

interface UserState {
  users: UserWithWatchlist[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser(state, action: PayloadAction<User>) {
      state.users.push({ ...action.payload, watchlist: [] });
    },
    addToWatchlist(
      state,
      action: PayloadAction<{ userId: string; content: WatchlistContent }>
    ) {
      const { userId, content } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === userId);
      if (userIndex !== -1) {
        state.users[userIndex].watchlist.push(content);
      }
    },
  },
});

export const { createUser, addToWatchlist } = userSlice.actions;
export default userSlice.reducer;