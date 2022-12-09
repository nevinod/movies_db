from flask import request
from operator import itemgetter
from tinydb import TinyDB, Query

from .errors import (
    INVALID_REQUEST,
    NOT_FOUND,
    INTERNAL_SERVER_ERROR
)
from .utilities import format_genre, validate_sort_request

# Database
db = TinyDB('records.db')

Movie = Query()


def get_movie_handler(name):
    formatted_name = name.replace("_", " ")
    record = db.search(Movie.movie_name == formatted_name)
    if record:
        return record
    return NOT_FOUND


def get_sorted_movies_handler():
    try:
        args = request.args
        if not validate_sort_request(args):
            return INVALID_REQUEST

        column = args.get("column")
        limit = args.get("limit")
        offset = args.get("offset")
        should_reverse = not args.get("desc") == "false"

        records = sorted(db.all(), key=itemgetter(column), reverse=should_reverse)
        if limit and offset:
            return records[int(offset):int(limit) + int(offset)]
        elif limit:
            return records[:int(limit)]
        return records

    except:
        return INTERNAL_SERVER_ERROR


def get_movies_by_genre_handler():
    try:
        args = request.args
        genres = args.get("selected")
        limit = args.get("limit")

        formatted_genres = format_genre(genres)
        records = db.search(Movie.genre.any(formatted_genres))

        if limit:
            return records[:int(limit)]
        return records

    except:
        return INTERNAL_SERVER_ERROR

