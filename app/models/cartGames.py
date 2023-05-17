from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import date


class CartGame(db.Model):
    __tablename__ = "cartgames"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    game_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('games.id')))
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    created_at = db.Column(db.Date, default=date.today())
    updated_at = db.Column(db.Date, default=date.today())

    user_cart = db.relationship("User", back_populates="cart_user")
    game_cart = db.relationship("Game", back_populates="cart_game")


    def to_dict(self):
        return {
            'id': self.id,
            'game_id': self.game_id,
            'user_id': self.user_id,
            'created_at': self.created_at,
            'update_at': self.updated_at
        }
