from flask import Blueprint, session, request
from flask_login import login_required
from app.models import Game, Review, User, db
from app.forms.review_form import ReviewForm



review_routes = Blueprint('reviews', __name__)

@review_routes.route('/game/<int:game_id>')
def get_reviews_by_game_id(game_id):
    reviews_list = Review.query.filter_by(game_id=game_id).all()
    reviews = [review.to_dict() for review in reviews_list]

    for review in reviews:
        userId = review['reviewer_id']
        user = User.query.get(userId)
        review_user = user.to_dict()
        review['reviewer_username'] = review_user['username']
        review['reviewer_profile_pic'] = review_user['profile_pic']

    return reviews

@review_routes.route('/new/game/<int:game_id>', methods=["POST"])
@login_required
def create_review_for_game_by_game_id(game_id):
    form = ReviewForm()
    user_id = session.get('_user_id')
    print('FORM DATA:', form.data['recommended'], user_id)
    form['csrf_token'].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        new_review = Review(
            reviewer_id=user_id,
            game_id=game_id,
            description=form.data['description'],
            recommended=form.data['recommended']
        )

        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    return form.errors


@review_routes.route('/user/<int:user_id>')
@login_required
def get_reviews_of_user(user_id):
    reviews_list = Review.query.filter_by(reviewer_id=user_id).all()
    reviews = [review.to_dict() for review in reviews_list]

    for review in reviews:
        game_id = review['game_id']
        game = Game.query.get(game_id)
        game_review = game.to_dict()
        review['game_img'] = game_review['main_img']

    return reviews
