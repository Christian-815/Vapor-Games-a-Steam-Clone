from flask import Blueprint
from flask_login import login_required
from app.models import Game, GameImage

game_routes = Blueprint('games', __name__)

@game_routes.route('/')
def get_all_games():
    all_games = Game.query.all()
    games = [game.to_dict() for game in all_games]

    for game in games:
        images = GameImage.query.filter_by(game_id=game['id']).all()
        game_images = [image.to_dict() for image in images]
        game['game_images'] = game_images

    return games

@game_routes.route('/<int:game_id>')
def get_individual_game(game_id):
    one_game = Game.query.get(game_id)
    if not one_game:
        return {'error': 'Game does not exist'}

    game = one_game.to_dict()

    images = GameImage.query.filter_by(game_id=game['id']).all()
    game_images = [image.to_dict() for image in images]
    game['game_images'] = game_images

    return game
