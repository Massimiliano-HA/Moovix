import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Media {
  id: string;
  title: string;
  poster_path: string;
  overview: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
}

interface MediaState {
  savedMedia: Media[];
}

const initialState: MediaState = {
  savedMedia: [],
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    saveMedia(state, action: PayloadAction<Media>) {
      state.savedMedia.push(action.payload);
    },
  },
});

export const { saveMedia } = mediaSlice.actions;
export default mediaSlice.reducer;