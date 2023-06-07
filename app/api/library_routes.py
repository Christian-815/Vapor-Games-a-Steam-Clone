from flask import Blueprint, session, request, jsonify
from app.models import CartGame, Game, LibraryGame, db
from flask_login import login_required

library_routes = Blueprint('cart', __name__)


@library_routes.route('/')
@login_required
def get_user_library():
    owner_id = session.get('_user_id')
    user_library = LibraryGame.query.filter_by(user_id=owner_id).all()
    # print('user_library', user_library[0].to_dict())
    library = [libraryGame.to_dict() for libraryGame in user_library]

    for game in library:
        game_id = game['game_id']
        game = Game.query.get(game_id)
        user_game = game.to_dict()
        game['game_info'] = user_game

    return library




@library_routes.route('/', methods=['POST'])
@login_required
def add_to_library():
    owner_id = session.get('_user_id')
    id = request.json.get('game_id')
    # print('REQUEST=====================', request.json)
    library_game = Game.query.get(id)
    game_in_user_library = LibraryGame.query.filter(LibraryGame.game_id == id).filter(LibraryGame.user_id == owner_id).first()

    # print("DOES game EXIST IN USER library--------------", game_in_user_library.to_dict())

    # print ("OWNER ID--------------------", owner_id)

    if game_in_user_library is None:
        library_item = LibraryGame(user_id=owner_id, game_id=library_game.id, installed=False)
        db.session.add(library_item)
        db.session.commit()

        return (library_item.to_dict())

    else:
        return {'Error': 'Game already exist in library.'}




@library_routes.route('/deleteGame', methods=['DELETE'])
@login_required
def delete_game_from_library():
    data = request.get_json()
    game_id = data['id']
    owner_id = session.get('_user_id')

    # print("DELETE Game FROM library", owner_id)

    game_in_user_library = LibraryGame.query.filter(LibraryGame.game_id == game_id).filter(LibraryGame.user_id == owner_id).first()

    # print("DELETE game FROM library", game_in_user_library)

    db.session.delete(game_in_user_library)
    db.session.commit()

    # librarys = LibraryGame.query.filter_by(user_id=owner_id).all()
    return {'Message': "Game deleted from library"}



@library_routes.route('/updateInstall', methods=['PUT'])
@login_required
def update_game_install_in_library():
    data = request.get_json()
    game_id = data['id']
    owner_id = session.get('_user_id')

    game_in_user_library = LibraryGame.query.filter(LibraryGame.game_id == game_id).filter(LibraryGame.user_id == owner_id).first()

    if game_in_user_library:
        game_in_user_library['installed'] = data['installed']

        db.session.commit()
        return game_in_user_library.to_dict()
    return {'MESSAGE': "Game not found."}
