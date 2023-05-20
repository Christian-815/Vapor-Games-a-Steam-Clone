from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, SubmitField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import Review


class ReviewForm(FlaskForm):
    description = StringField('Review', validators=[DataRequired(), Length(min=3, max=255, message='Review must be between 3 and 255 characters')])
    recommended = BooleanField('Recommended')
    submit = SubmitField('Submit')
