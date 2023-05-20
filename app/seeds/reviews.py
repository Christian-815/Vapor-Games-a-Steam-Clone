from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text


def seed_reviews():
    review1 = Review(
        reviewer_id=1,
        game_id=1,
        description='This was a great game. Really fun and would definetely recommend!',
        recommended=True
    )

    review2 = Review(
        reviewer_id=2,
        game_id=1,
        description='This was a okay game. Kinda fun and I guess I would recommend.',
        recommended=True
    )

    review3 = Review(
        reviewer_id=3,
        game_id=2,
        description='This was a terrible game. No fun and would definetely not recommend!',
        recommended=False
    )

    all_reviews = [review1, review2, review3]
    add_reviews = [db.session.add(review) for review in all_reviews]
    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
