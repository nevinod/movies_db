import React, { useEffect, useState } from "react";
import { baseUrl} from "../constants";
import { MovieItemProps, MovieItem } from "./MovieItem";
import ListPagination from "./Pagination"

interface ConfigInterface {
    column: string,
    desc: boolean,
    limit: number
}

export default function MovieList(props: any) {
    const [movies, setMovies] = useState<MovieItemProps[]>([])
    const [fetchConfig] = useState<ConfigInterface>({
        column: "rating",
        desc: true,
        limit: 12
    })

    function createFetchUrl(config: ConfigInterface) {
        let url = `${baseUrl}sort?column=${config.column}&limit=${config.limit}`;
        if(!config.desc) url += "&desc=false";
        if(parseInt(props.params.page) > 0) url += `&offset=${(props.params.page - 1) * 12}`;
        console.log(url)
        return url;
    }


    useEffect(() => {
        window.scrollTo(0, 0)
        function fetchMovies() {
            fetch(createFetchUrl(fetchConfig))
                .then(response => response.json())
                .then(data => setMovies(data))
        }
        fetchMovies()
    }, [fetchConfig, props.params.page])


    return (
        <>
            <div className="list-container">
                {movies.map(movie => {
                    return <MovieItem
                        movie_name={movie.movie_name}
                        Duration={movie.Duration}
                        year={movie.year}
                        genre={movie.genre}
                        director={movie.director}
                        rating={movie.rating}
                        country={movie.country}
                        actors={movie.actors}
                        key={movie.movie_name}
                    />
                })}
            </div>

            <ListPagination currentPage={props.params.page}/>
        </>
    )
}