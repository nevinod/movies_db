from flask_api import FlaskAPI
from flask_cors import CORS

from handlers.GET_handlers import (
    get_movie_handler,
    get_movies_by_genre_handler,
    get_sorted_movies_handler
)

# Server
app = FlaskAPI(__name__)
CORS(app)

app.config['DEFAULT_RENDERERS'] = [
    'flask_api.renderers.JSONRenderer',
    'flask_api.renderers.BrowsableAPIRenderer',
]


@app.route('/', methods=["GET"])
def landing():
    return "<h1>Welcome to the homepage</h1>"


@app.route('/sort', methods=['GET'])
def get_sorted_movies():
    return get_sorted_movies_handler()


@app.route("/genre", methods=["GET"])
def get_movies_by_genre():
    return get_movies_by_genre_handler()


@app.route('/movie/<name>', methods=["GET"])
def get_movie(name):
    return get_movie_handler(name)


if __name__ == '__main__':
    app.run()
