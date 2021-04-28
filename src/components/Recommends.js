import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    selectActionMovie, selectComedy, selectDocumentries, selectHorror, selectNetflix,
    selectRomantic, selectTopRated, selectTrending,
} from '../features/movie/MovieSlice'
import { setMovieDetail } from '../features/movie/MovieSlice';

const Recommends = () => {

    const dispatch = useDispatch();
    const actionMovie = useSelector(selectActionMovie);
    const comedy = useSelector(selectComedy);
    const documentries = useSelector(selectDocumentries);
    const horror = useSelector(selectHorror);
    const originals = useSelector(selectNetflix);
    const romantic = useSelector(selectRomantic);
    const topRated = useSelector(selectTopRated);
    const trending = useSelector(selectTrending);


    const movies = [
        {
            title: 'Trending Movies',
            type: trending,
        },
        {
            title: 'Documentries',
            type: documentries,
        },
        {
            title: 'Horror Movies',
            type: horror,
        },
        {
            title: 'Romantic Movies',
            type: romantic,
        },
        {
            title: 'Comedy Movies',
            type: comedy,
        },
        {
            title: 'Originals',
            type: originals,
        },
        {
            title: 'Top Rated Movies',
            type: topRated,
        },
        {
            title: 'Action Movies',
            type: actionMovie,
        },
    ];

    const baseURL = 'https://image.tmdb.org/t/p/original/';

    return (
        <Container>
            {
                movies && movies.map((item, key) => {
                    return (
                        <div key={key}>
                            <h3>{item.title}</h3>
                            <Content>
                                {
                                    item.type?.map((movie, key) => {
                                        return (
                                            <Wrap key={key} onClick={() => { dispatch(setMovieDetail({ movieDetail: movie })) }} >
                                                <Link to={'/detail/' + item.title + '/' + movie?.id} >
                                                    <img
                                                        src={`${baseURL}${movie?.backdrop_path}`}
                                                        alt={movie?.name}
                                                    />
                                                </Link>
                                            </Wrap>
                                        );
                                    })
                                }
                            </Content>
                        </div>
                    );
                })
            }
        </Container>
    );
};

const Container = styled.div`
    padding: 0 0 26px;
`;
const Content = styled.div`
    display:grid;
    grid-gap:25px;
    gap:25px;
    grid-template-columns: repeat(4,minmax(0,1fr));

    @media (max-width:768px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
`;

const Wrap = styled.div`
    padding-top:56.25%;
    border-radius:10px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px ;
    cursor: pointer;
    overflow:hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
    img{
        inset:0px;
        display:block;
        height:100%;
        object-fit:cover;
        opacity:1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width:100%;
        z-index:1;
        top:0;
    }
    &:hover{
        box-shadow:rgb(0 0 0 / 80%) 0 40px 58px -16px, rgb( 0 0 0 /72% ) 0 30px 22px -10px ;
        transform:scale(1.05);
        border-color:rgba(249, 249, 249, 0.8);
    }
`;

export default Recommends;