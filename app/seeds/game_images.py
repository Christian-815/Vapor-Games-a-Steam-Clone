from app.models import db, GameImage, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date



def seed_game_images():

    game1img1 = GameImage(
        game_id = 1,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/ss_e589d6bb347c13f7226f0b294fd12880ced8d171.600x338.jpg?t=1684344870'
    )

    game1img2 = GameImage(
        game_id = 1,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/ss_6f2e72d773e4280f3a4860c7fb1d62e72932a9b0.600x338.jpg?t=1684344870'
    )

    game1img3 = GameImage(
        game_id=1,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/ss_f14055548a6c51171036ebb3d00ddf5c97e5bd05.600x338.jpg?t=1684344870'
    )

    game1img4 = GameImage(
        game_id=1,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/ss_bb84b8cbf9294c6166819c3d3328c4efbdb9d46c.600x338.jpg?t=1684344870'
    )

    game1img5 = GameImage(
        game_id=1,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/ss_3c8dd0328d9d5944083d1c1da10f316de090c67d.600x338.jpg?t=1684344870'
    )

    game1img6 = GameImage(
        game_id=1,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/ss_3ed1979b4d57f7819813e1c11462e1f631a83987.600x338.jpg?t=1684344870'
    )

    game1img7 = GameImage(
        game_id=1,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/ss_72e3265e1983d759d133338b613df2010cf5eb56.600x338.jpg?t=1684344870'
    )

    game1img8 = GameImage(
        game_id=1,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/ss_0400a734d8f53d0620ce8349aa30f984e794de92.600x338.jpg?t=1684344870'
    )

    all_games_images = [game1img1, game1img2, game1img3, game1img4,
                        game1img5, game1img6, game1img7, game1img8]
    add_game_images = [db.session.add(game_img) for game_img in all_games_images]
    db.session.commit()


def undo_game_images():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.gameimages RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM gameimages"))

    db.session.commit()
