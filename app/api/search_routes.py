from flask import Blueprint
from app.models import Game
from sqlalchemy import or_

search_routes = Blueprint('search', __name__)


@search_routes.route('/<string:query>')
def search_results(query):
    results = []

    if query:
        # Query books from the database
        games = Game.query.all()

# Perform a simple case-insensitive search based on the query string
        results = [game.to_dict() for game in games if query.lower() in game.game_name.lower()]

    return results
