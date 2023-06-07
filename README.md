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
