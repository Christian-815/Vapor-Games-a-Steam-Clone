from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo1 = User(
        username='Elden Lord', email='demo1@aa.io', password='password', profile_pic="https://preview.redd.it/ijg9df6v5df91.png?width=640&crop=smart&auto=webp&s=33d16b3316f2e87c285a945eec3bfee04ae54a0f")
    demo2 = User(
        username='Street Fighter', email='demo2@aa.io', password='password', profile_pic="https://assetsio.reedpopcdn.com/Street-Fighter-6-Ken.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp")
    demo3 = User(
        username='Best Gamer', email='demo3@aa.io', password='password', profile_pic="https://i.imgur.com/NhioVZC.png")
    demo4 = User(
        username='Tangerine', email='demo4@aa.io', password='password', profile_pic="https://pbs.twimg.com/media/FlfM-tsWIAI69fW.jpg:large")
    demo5 = User(
        username='Lemon', email='demo5@aa.io', password='password', profile_pic="https://pbs.twimg.com/media/FlfM-tsWIAI69fW.jpg:large")
    demo6 = User(
        username='Ratatouille', email='demo6@aa.io', password='password', profile_pic="https://static01.nyt.com/images/2020/11/22/multimedia/00xp-ratatouille/00xp-ratatouille-articleLarge.jpg?quality=75&auto=webp&disable=upscale")
    demo7 = User(
        username='Mapler', email='demo7@aa.io', password='password', profile_pic="https://i.imgur.com/NhioVZC.png")
    demo8 = User(
        username='Ellinia4lyfe', email='demo8@aa.io', password='password', profile_pic="https://i.imgur.com/NhioVZC.png")
    demo9 = User(
        username='Balrog', email='demo9@aa.io', password='password', profile_pic="https://i.imgur.com/NhioVZC.png")
    demo10 = User(
        username='Jr Balrog', email='demo10@aa.io', password='password', profile_pic="https://i.imgur.com/NhioVZC.png")
    Christian = User(
        username='TankTopTort', email='coviedo@gmail.com', password='coolbeans123', profile_pic="https://i.imgur.com/NhioVZC.png")
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', profile_pic="https://i.imgur.com/NhioVZC.png")

    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)
    db.session.add(demo7)
    db.session.add(demo8)
    db.session.add(demo9)
    db.session.add(demo10)
    db.session.add(Christian)
    db.session.add(bobbie)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
