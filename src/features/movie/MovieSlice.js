import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    trending: null,
    actionMovie: null,
    comedy: null,
    documentries: null,
    horror: null,
    romantic: null,
    netflixOriginals: null,
    topRated: null,
    movieDetail: null,
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.trending = action.payload.trending;
            state.actionMovie = action.payload.actionMovie;
            state.comedy = action.payload.comedy;
            state.documentries = action.payload.documentries;
            state.horror = action.payload.horror;
            state.romantic = action.payload.romantic;
            state.netflixOriginals = action.payload.netflixOriginals;
            state.topRated = action.payload.topRated;
        },
        setMovieDetail: (state, action) => {
            state.movieDetail = action.payload.movieDetail;
        },
    },
});

export const { setMovies, setMovieDetail } = movieSlice.actions;

export const selectTrending = state => state.movie.trending;
export const selectActionMovie = state => state.movie.actionMovie;
export const selectComedy = state => state.movie.comedy;
export const selectDocumentries = state => state.movie.documentries;
export const selectHorror = state => state.movie.horror;
export const selectRomantic = state => state.movie.romantic;
export const selectNetflix = state => state.movie.netflixOriginals;
export const selectTopRated = state => state.movie.topRated;
export const selectMovieDetail = state => state.movie.movieDetail;

export default movieSlice.reducer;