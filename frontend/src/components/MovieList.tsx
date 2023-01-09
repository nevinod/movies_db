import { useQuery } from "@tanstack/react-query";
import { MovieItemProps, MovieItem } from "./MovieItem";
import { fetchMoviesList } from "../queries/fetchMoviesList";
import ListPagination from "./Pagination";
import { ConfigInterface } from "./MovieListContainer";

type MovieListProps = {
  filter: ConfigInterface;
  page: number;
};

export default function MovieList({ filter, page }: MovieListProps) {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["movies_list", filter, page],
    queryFn: () => fetchMoviesList(filter, page),
  });

  if (isLoading) {
    return <div></div>;
  }

  if (isError) {
    return <span>{"Error when fetching movies"}</span>;
  }

  return (
    <>
      <div className="list-container">
        {data.map((movie: MovieItemProps) => {
          return <MovieItem key={movie.movie_name} {...movie} />;
        })}
      </div>

      <ListPagination currentPage={page} />
    </>
  );
}
