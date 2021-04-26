import styled from 'styled-components';
import ImgSlider from '../components/ImgSlider';
import Recommends from '../components/Recommends';
import Viewers from '../components/Viewers';
import requests from '../config/requests';
import axios from '../config/axios';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../features/movie/MovieSlice';
import { selectUserName } from '../features/users/userSlice';


const Home = () => {
	const dispatch = useDispatch();
	const userName = useSelector(selectUserName);

	const [trendingArr, setTrendingArr] = useState([]);
	const [actionMovieArr, setActionMovieArr] = useState([]);
	const [comedyArr, setComedyArr] = useState([]);
	const [documentriesArr, setDocumentriesArr] = useState([]);
	const [horrorArr, setHorrorArr] = useState([]);
	const [romanticArr, setRomanticArr] = useState([]);
	const [netflixOriginalsArr, setNetflix] = useState([]);
	const [topRatedArr, setTopRatedArr] = useState([]);

	const fetchMoviesReqs = [
		requests.fetchActionMovie,
		requests.fetchComedyMovie,
		requests.fetchDocumentries,
		requests.fetchHorrorMovie,
		requests.fetchRomanticMovie,
		requests.fetchTopRated,
		requests.fetchTrending,
		requests.fetchNetFlixOriginals,
	];

	useEffect(() => {
		const fetchData = () => {
			fetchMoviesReqs.map(async (fetchURL, key) => {
				let movieObj = [];
				const request = await axios.get(fetchURL);
				request.data.results.forEach((movie) => {
					if (movie.backdrop_path !== null && movie.backdrop_path !== "") {
						movieObj = [...movieObj, movie];
					}
				})
				movieObj.splice(4);
				// console.log(movieObj);
				switch (key) {
					case 0:
						setActionMovieArr(movieObj)
						break;
					case 1:
						setComedyArr(movieObj)
						break;
					case 2:
						setDocumentriesArr(movieObj)
						break;
					case 3:
						setHorrorArr(movieObj)
						break;
					case 4:
						setRomanticArr(movieObj)
						break;
					case 5:
						setTopRatedArr(movieObj)
						break;
					case 6:
						setTrendingArr(movieObj)
						break;
					case 7:
						setNetflix(movieObj)
						break;
					default:
						break;
				}
			});
		}
		dispatch(setMovies({
			actionMovie: actionMovieArr,
			comedy: comedyArr,
			documentries: documentriesArr,
			horror: horrorArr,
			netflixOriginals: netflixOriginalsArr,
			romantic: romanticArr,
			topRated: topRatedArr,
			trending: trendingArr,
		}))
		fetchData();
	}, [userName])

	return (
		<Container>
			<ImgSlider />
			<Viewers />
			<Recommends />
		</Container>
	);

};

const Container = styled.main`
	position: relative;
	min-height: calc(100vh - 250px);
	overflow-x: hidden;
	display: block;
	top: 72px;
	padding: 0 calc(3.5vw + 5px);

	&:after {
		background: url("/images/home-background.png") center center / cover
		no-repeat fixed;
		content: "";
		position: absolute;
		inset: 0px;
		opacity: 1;
		z-index: -1;
	}
`;

export default Home;