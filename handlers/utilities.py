
VALID_SORT_ARGS = ["column", "limit", "desc", "offset"]

VALID_SORT_COLS = ["Duration", "rating", "year"]

VALID_GENRE_ARGS = ["selected", "limit"]


# check if the sort GET request is valid
def validate_sort_request(args):
    for key in args:
        if key not in VALID_SORT_ARGS:
            return False

    column = args.get("column")
    if not column:
        return False
    elif column not in VALID_SORT_COLS:
        return False
    return True


# check if genre GET request query string is valid
def validate_genre_request(args):
    for key in args:
        if key not in VALID_GENRE_ARGS:
            return False

    selected = args.get("selected")
    if not selected:
        return False
    return True


# separate genre query string into list of genres
def format_genre(string):
    string = string.strip()
    print(string)
    genre_list = [genre.split('_') for genre in string.split(", ")]
    formatted_genres = [" ".join(genre) for genre in genre_list]
    return formatted_genres



