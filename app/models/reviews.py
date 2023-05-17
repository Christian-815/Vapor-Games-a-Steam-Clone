from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import date


class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    reviewer_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    game_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('games.id')))
    description = db.Column(db.String(255), nullable=False)
    recommended = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.Date, default=date.today())
    updated_at = db.Column(db.Date, default=date.today())

    user_review = db.relationship("User", back_populates="review_user")
    game_review = db.relationship("Game", back_populates="review_game")


    def to_dict(self):
        return {
            'id': self.id,
            'reviewer_id': self.reviewer_id,
            'game_id': self.game_id,
            'description': self.description,
            'recommended': self.recommended,
            'created_at': self.created_at,
            'update_at': self.updated_at
        }
