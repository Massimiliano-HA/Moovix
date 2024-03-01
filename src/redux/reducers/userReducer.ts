import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface WatchlistItem {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  mediaType: 'movie' | 'TV' | string;
}

interface AuthenticatedUser {
  username: string;
  password: string;
  avatar: string | null;
  isAuthenticated: boolean;
  watchlist: WatchlistItem[];
}

interface User {
  username: string;
  password: string;
  avatar: string | null;
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
    addToWatchlist(state, action: PayloadAction<WatchlistItem[]>) {
      if (state.currentUser) {
        if (!state.currentUser.watchlist) {
          state.currentUser.watchlist = [];
        }
        state.currentUser.watchlist.push(...action.payload);
      }
    },
    setWatchlist(state, action: PayloadAction<WatchlistItem[]>) {
      if (state.currentUser) {
        state.currentUser.watchlist = action.payload;
      }
    },
  },
});

export const {createUser, loginUser, logoutUser, addToWatchlist, setWatchlist} =
  userSlice.actions;
export default userSlice.reducer;
