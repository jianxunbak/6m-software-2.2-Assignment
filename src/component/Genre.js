import Header from "./Header";
import Movie from "./Movie";

const Genre = ({ genre, movie1, movie2 }) => {
  return (
    <>
      <div className="genre">
        <p className="smallText">Films &gt; </p>
        <h1>{genre}</h1>
      </div>
      <Movie movieDetails={movie1} />
      <Movie movieDetails={movie2} />
    </>
  );
};

export default Genre;
