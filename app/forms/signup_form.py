from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User
from ..api.aws_helpers import ALLOWED_EXTENSIONS


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(), username_exists, Length(min=4, max=40, message='Username must be between 4 and 40 characters')])
    email = StringField('email', validators=[DataRequired(
    ), user_exists, Email(message='Please provide valid Email')])
    password = StringField('password', validators=[DataRequired(), Length(min=6, message='Password must be at least 6 characters')])
    profile_pic = FileField('Image File', validators=[FileRequired(message='A profile picture is required'), FileAllowed(list(ALLOWED_EXTENSIONS))])
