import { ConfigInterface } from "../components/MovieListContainer";
import { baseUrl, itemsPerPage } from "../constants";

export async function fetchMoviesList(filter: ConfigInterface, page: number) {
  let url = `${baseUrl}sort?column=${filter.column}&limit=${filter.limit}&desc=${filter.desc}`;
  if (page > 0) {
    url += `&offset=${(page - 1) * itemsPerPage}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error when fetching movies");
  }
  return response.json();
}
