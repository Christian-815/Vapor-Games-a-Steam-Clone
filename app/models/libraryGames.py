from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import date


class LibraryGame(db.Model):
    __tablename__ = "librarygames"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    game_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('games.id')))
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    installed = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.Date, default=date.today())
    updated_at = db.Column(db.Date, default=date.today())

    user_library = db.relationship("User", back_populates="library_user")
    game_library = db.relationship("Game", back_populates="library_game")


    def to_dict(self):
        return {
            'id': self.id,
            'game_id': self.game_id,
            'user_id': self.user_id,
            'installed': self.installed,
            'created_at': self.created_at,
            'update_at': self.updated_at
        }
