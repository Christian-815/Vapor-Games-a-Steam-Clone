from flask import Blueprint, session, request, jsonify
from app.models import CartGame, Game, LibraryGame, db
from flask_login import login_required

library_routes = Blueprint('library', __name__)


@library_routes.route('/')
@login_required
def get_user_library():
    owner_id = session.get('_user_id')
    user_library = LibraryGame.query.filter_by(user_id=owner_id).all()
    # print('user_library', user_library[0].to_dict())
    library = [libraryGame.to_dict() for libraryGame in user_library]

    for game in library:
        game_id = game['game_id']
        game_data = Game.query.get(game_id)
        user_game = game_data.to_dict()
        game['game_info'] = user_game

    return library




@library_routes.route('/', methods=['POST'])
@login_required
def add_to_library():
    owner_id = session.get('_user_id')
    game_list = request.get_json()
    # print('REQUEST=====================', game_list)
    # games_list = [game.to_dict() for game in game_list]



    for game in game_list:
        library_game = Game.query.get(game['game_id'])
        game_in_user_library = LibraryGame.query.filter(LibraryGame.game_id == library_game.id).filter(LibraryGame.user_id == owner_id).first()
        if game_in_user_library is None:
            library_item = LibraryGame(user_id=owner_id, game_id=library_game.id, installed=False)
            db.session.add(library_item)
            db.session.commit()
            library_item.to_dict()
        else:
            return {'Error': 'Game already exist in library.'}

    # new_library_games = [game.to_dict() for game in game_list]

    return game_list


    # print("DOES game EXIST IN USER library--------------", game_in_user_library.to_dict())

    # print ("OWNER ID--------------------", owner_id)






@library_routes.route('/deleteGame', methods=['DELETE'])
@login_required
def delete_game_from_library():
    data = request.get_json()
    game_id = data['game_id']
    owner_id = session.get('_user_id')

    # print("DELETE Game FROM library", owner_id, game_id, '-----------------------', data)

    game_in_user_library = LibraryGame.query.filter(LibraryGame.game_id == game_id).filter(LibraryGame.user_id == owner_id).first()

    # print("DELETE game FROM library", game_in_user_library)

    db.session.delete(game_in_user_library)
    db.session.commit()

    # librarys = LibraryGame.query.filter_by(user_id=owner_id).all()
    return {'Message': "Game deleted from library"}


@library_routes.route('/updateInstall/<int:game_id>', methods=['PUT'])
@login_required
def update_game_install_in_library(game_id):
    data = request.get_json()
    owner_id = session.get('_user_id')


    game_in_user_library = LibraryGame.query.filter(LibraryGame.game_id == game_id).filter(LibraryGame.user_id == owner_id).first()

    print("DELETE Game FROM library", game_in_user_library.installed)
    if game_in_user_library.installed == True:
        game_in_user_library.installed = False

        db.session.commit()
        return game_in_user_library.to_dict()
    elif game_in_user_library.installed == False:
        game_in_user_library.installed = True

        db.session.commit()
        return game_in_user_library.to_dict()
    else:
        return {'MESSAGE': "Game not found."}
