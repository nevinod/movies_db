import React, { useCallback, useEffect, useState } from 'react';
import { baseUrl, capitalize, filterColumnOptions, filterOrderOptions, itemsPerPage } from '../constants';
import { FilterDropdown } from './FilterDropdown';
import { MovieItemProps, MovieItem } from './MovieItem';
import ListPagination from './Pagination';

enum FilterColumns {
    Rating = "rating",
    Year = "year",
    Duration = "Duration"
}

enum FilterLabel {
    Column = "Sort By:",
    Order = "Order:"
}

type ConfigInterface = {
    column: string,
    desc: string,
    limit: number
}



export default function MovieList(props: any) {
    const [movies, setMovies] = useState<MovieItemProps[]>([])
    const [filter, setFilter] = useState<ConfigInterface>({
        column: FilterColumns.Rating,
        desc: "true",
        limit: itemsPerPage
    })

    const createFetchUrl = useCallback(() => {
        let url = `${baseUrl}sort?column=${filter.column}&limit=${filter.limit}&desc=${filter.desc}`;
        const pageNumber = parseInt(props.params.page)
        if(pageNumber > 0) {
            url += `&offset=${(pageNumber - 1) * itemsPerPage}`;
        }
        return url;
    }, [filter.column, filter.limit, filter.desc, props.params.page])


    const fetchMovies = useCallback(() => {
        fetch(createFetchUrl())
            .then(response => response.json())
            .then(data => setMovies(data))
    }, [createFetchUrl])


    function handleColumnDropdownClick(event: React.MouseEvent, column: string) {
        event.preventDefault()
        setFilter({...filter, column: column})
    }

    function handleOrderDropdownClick(event: React.MouseEvent, desc: string) {
        event.preventDefault()
        setFilter({...filter, desc: desc})
    }


    useEffect(() => {
        window.scrollTo(0, 0)
        fetchMovies()
    }, [fetchMovies])


    return (
        <>
            <div className="filters-container">
                <FilterDropdown 
                    options={filterColumnOptions}
                    handler={handleColumnDropdownClick}
                    label={`${FilterLabel.Column} ${capitalize(filter.column)}`}
                />
                <FilterDropdown 
                    options={filterOrderOptions}
                    handler={handleOrderDropdownClick} 
                    label={`${FilterLabel.Order} ${filter.desc === "true" ? "High -> Low" : "Low -> High"}`}
                />
            </div>


            <div className="list-container">
                {movies.map(movie => {
                    return (
                        <MovieItem
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
                    )
                })}
            </div>

            <ListPagination currentPage={props.params.page}/>
        </>
    )
}