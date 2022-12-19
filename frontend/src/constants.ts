
export type filterOptionType = {
	value: string,
	label: string,
	uniqueId: string,
}

export const baseUrl: string = "http://127.0.0.1:5000/";

export const itemsPerPage: number = 12;

export const filterColumnOptions: filterOptionType[] = [
    { value: "rating", label: "Rating", uniqueId: "columnrating" },
    { value: "year", label: "Year", uniqueId: "columnyear" },
    { value: "Duration", label: "Duration", uniqueId: "columnduration" }
]

export const filterOrderOptions: filterOptionType[] = [
    { value: "true", label: "High -> Low", uniqueId: "orderdescending" },
    { value: "false", label: "Low -> High", uniqueId: "orderascending" }
]

export function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}