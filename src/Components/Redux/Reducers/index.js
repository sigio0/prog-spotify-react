const initialState = {
  rock: [],
  pop: [],
  hiphop: [],
  selectedSong: null,
  savedSong: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MUSIC_DATA":
      const { category, data } = action.payload;
      return {
        ...state,
        [category]: data,
      };
    case "SELECT_SONG":
      return {
        ...state,
        selectedSong: action.payload,
      };
    case "SAVED_SONG":
      return {
        ...state,
        savedSong: [...state.savedSong, action.payload],
      };
    default:
      return state;
  }
};

export default musicReducer;
