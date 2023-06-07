# Welcome to VaporGames

Welcome to Vapor Games, your ultimate destination for a diverse and exciting game experience experience! Vapor Games is a Steam Games clone with the goal of replicating Steam's functionality and ease of use! On Vapor games, you can currently view the site's game library and read individual details for each game. Each game also has a reviews list, if reviews have been left, that you can read do to decide if you want to purchase that game. If you create an account, you can leave reviews and purchase games that will eventually be able to be added to your library. 

<br />


Vapor Games Live Link --> https://vaporgames.onrender.com/

<br />

### Vapor Games was created with the following languages and frameworks:

<br />

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Python](https://img.shields.io/badge/Python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-%23FCA121.svg?style=for-the-badge&logo=sqlalchemy&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

<br />

**For additional information please check out the WIKI page on this repo:**

[WIKI](https://github.com/Christian-815/Vapor-Games-a-Steam-Clone/wiki)

<br />

## VaporGames Showcase

### HomePage
![Vaporgames-home](https://github.com/Christian-815/Vapor-Games-a-Steam-Clone/assets/108007042/60595771-3ca5-443d-8ec7-0ffd2d3b8e9b)

## Single Game Page
![vaporgames-indivgame](https://github.com/Christian-815/Vapor-Games-a-Steam-Clone/assets/108007042/13f4acfd-dc15-4250-abcd-3bbce7addcb3)

## Game Reviews
![vaporgames-gamereviews](https://github.com/Christian-815/Vapor-Games-a-Steam-Clone/assets/108007042/27433563-ad9b-45a7-9c95-1701d4d77fb2)
![vaporgames-leavereview](https://github.com/Christian-815/Vapor-Games-a-Steam-Clone/assets/108007042/ad9ad86b-a2dd-4742-a38a-b0c5f173f3da)

## User Reviews
![vaporgames-userreviews](https://github.com/Christian-815/Vapor-Games-a-Steam-Clone/assets/108007042/67fa9297-494b-41f6-a714-00b0e640c3c5)

## User Cart
![vaporgames-cart](https://github.com/Christian-815/Vapor-Games-a-Steam-Clone/assets/108007042/01c36d6d-85d8-4d4d-9699-8f6d71b20b5b)

##Login/Signup
![vaporgames-login](https://github.com/Christian-815/Vapor-Games-a-Steam-Clone/assets/108007042/ece0eb37-8dba-411e-b985-440b25268804)
![vaporgames-signup](https://github.com/Christian-815/Vapor-Games-a-Steam-Clone/assets/108007042/6635c363-969a-4074-b38d-f45a9ad00dac)


### How to Build/Run Site Locally -> 
To install and run VaporGames, follow these steps:

```
1.  Clone the repository from GitHub:

git clone git@github.com:Christian-815/Vapor-Games-a-Steam-Clone.git

2.  Install the required Python packages:

pipenv install -r requirements.txt

3.  Install the required JavaScript packages:

cd react-app
npm install

4.  Start the Flask server:

'in a seperate terminal'

cd app
pipenv shell;
flask db init;
flask db migrate;
flask db upgrade;
flask seed all; (flask seed undo <- `to undo all seeds`)
flask run;

5.  Start the React app:

'in a seperate terminal'

cd react-app
npm start
```
