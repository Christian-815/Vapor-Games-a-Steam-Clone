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

    shop_product = db.relationship("Shop", cascade="all, delete-orphan", back_populates="product_shop")
    review_product = db.relationship("Review", cascade="all, delete-orphan", back_populates="product_review")
    cart_product = db.relationship("Shopping_Cart", cascade="all, delete-orphan", back_populates="product_cart")
    image_product = db.relationship("Product_Image", cascade="all, delete-orphan", back_populates="product_image")




    def to_dict(self):
        return {
            'id': self.id,
            'owner_id': self.owner_id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'preview_img': self.preview_img,
            'created_at': self.created_at,
            'update_at': self.updated_at
        }
