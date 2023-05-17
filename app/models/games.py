from .db import db, environment, SCHEMA
from datetime import date


class Game(db.Model):
    __tablename__ = 'games'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    game_name = db.Column(db.String(100), nullable=False)
    main_img = db.Column(db.String, nullable=False)
    release_date = db.Column(db.Date, default=date.today())
    developer = db.Column(db.String(100), nullable=False)
    publisher = db.Column(db.String(100), nullable=False)
    intro_description = db.Column(db.String(500), nullable=False)
    full_description = db.Column(db.String(1000), nullable=False)
    price = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, default=date.today())
    updated_at = db.Column(db.DateTime, default=date.today())

    review_game = db.relationship("Review", back_populates="game_review")




    def to_dict(self):
        return {
            'id': self.id,
            'game_name': self.game_name,
            'main_img': self.main_img,
            'release_date': self.release_date,
            'developer': self.developer,
            'publisher': self.publisher,
            'intro_description': self.intro_description,
            'full_description': self.full_description,
            'price': self.price,
            'created_at': self.created_at,
            'update_at': self.updated_at
        }
