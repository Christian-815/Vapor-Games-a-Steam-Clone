from flask import Blueprint
from app.models import Game
from sqlalchemy import or_

search_routes = Blueprint('search', __name__)


@search_routes.route('/<string:search_terms>')
def search(search_terms):

    print('INTIAL SEARCH TERMS', search_terms)

    search_terms = search_terms.split()

    print("fsdfsdfsdfsfsfs", search_terms)

    search_matched_games = []

    for term in search_terms:

        print('GJGJHGJHGJHGKHJGKJ', term)

        # the or_() method from SQLAlchemy to combine two filter conditions using the OR operator
        # This query creates two filter conditions using the ilike() method to perform a case-INSENSITIVE search for search_terms in the name and description fields of the game table. These conditions are then combined using the or_() method, which results in a query that matches records where either condition is true. Finally, the all() method is called to execute the query and return all matching records.

        term_matched_games = Game.query.filter(or_(Game.game_name.ilike(f'%{term}%'), Game.full_description.ilike(f'%{term}%'))).all()

        search_matched_games.extend(term_matched_games)

    # cast results to a set to eliminate multiple query results of the same game
    unique_search_results = set(search_matched_games)

    search_results_to_dict = [game.to_dict() for game in unique_search_results]

    # print(search_results_to_dict)

    return search_results_to_dict
