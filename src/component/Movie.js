import Details from "./Details";
import Header from "./Header";

const Movie = ({ movieDetails }) => {
  return (
    <Header>
      <img class="movieImg" src={movieDetails.img} />
      <Details>
        <h1>{movieDetails.title}</h1>
        <p>Year: {movieDetails.year}</p>
        <p>Description: {movieDetails.description}</p>
      </Details>
    </Header>
  );
};

export default Movie;
