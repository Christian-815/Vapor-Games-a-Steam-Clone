from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import date


class GameImage(db.Model):
    __tablename__ = "gameimages"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    game_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('games.id')))
    image = db.Column(db.String, nullable=False)
    created_at = db.Column(db.Date, default=date.today())
    updated_at = db.Column(db.Date, default=date.today())

    game_image = db.relationship("Game", back_populates="image_game")


    def to_dict(self):
        return {
            'id': self.id,
            'game_id': self.game_id,
            'image': self.image,
            'created_at': self.created_at,
            'update_at': self.updated_at
        }
