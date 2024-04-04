import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addtrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const response = await data.json();

    const filterData = response?.results.filter((e) => e.type === "Trailer");
    const trailer = filterData.length ? filterData[2] : response?.results[0];
    dispatch(addtrailerVideo(trailer))
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
}

export default useMovieTrailer
