from app.models import db, Game, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date


def seed_games():

    game1 = Game(
        game_name = 'STAR WARS Jedi: Survivor™',
        main_img = 'https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/header.jpg?t=1684344870',
        release_date = date(2023, 4, 27),
        developer='Respawn',
        publisher='Electronic Arts',
        intro_description = 'The story of Cal Kestis continues in STAR WARS Jedi: Survivor™, a galaxy-spanning, third-person, action-adventure game.',
        full_description='The story of Cal Kestis continues in Star Wars Jedi: Survivor™, a third-person, galaxy-spanning, action-adventure game from Respawn Entertainment, developed in collaboration with Lucasfilm Games. This narratively driven, single-player title picks up 5 years after the events of Star Wars Jedi: Fallen Order™ and follows Cal’s increasingly desperate fight as the galaxy descends further into darkness. Pushed to the edges of the galaxy by the Empire, Cal will find himself surrounded by threats new and familiar. As one of the last surviving Jedi Knights, Cal is driven to make a stand during the galaxy’s darkest times — but how far is he willing to go to protect himself, his crew, and the legacy of the Jedi Order?',
        price = 69.99,
        created_at = date.today(),
        updated_at = date.today()
    )


    game2 = Game(
        game_name = 'Red Dead Redemption 2',
        main_img = 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1647410989',
        release_date = date(2019, 11, 5),
        developer='Rockstar Games',
        publisher='Rockstar Games',
        intro_description = 'America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.',
        full_description='America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.',
        price = 59.99,
        created_at = date.today(),
        updated_at = date.today()
    )

    game3 = Game(
        game_name = 'Among Us',
        main_img = 'https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg?t=1645201749',
        release_date = date(2018, 11, 16),
        developer='InnerSloth',
        publisher='InnerSloth',
        intro_description = 'Play with 4-15 player online or via local WiFi as you attempt to prepare your spaceship for departure, but beware as one or more random players among the Crew are Impostors bent on killing everyone!',
        full_description='Play with 4-15 player online or via local WiFi as you attempt to prepare your spaceship for departure, but beware as one or more random players among the Crew are Impostors bent on killing everyone! Originally created as a party game, we recommend playing with friends at a LAN party or online using voice chat. Enjoy cross-platform play between Android, iOS and PC.',
        price = 4.99,
        created_at = date.today(),
        updated_at = date.today()
    )

    game4 = Game(
        game_name = 'Valheim',
        main_img = 'https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg?t=1648880767',
        release_date = date(2021, 2, 2),
        developer='Iron Gate AB',
        publisher='Coffee Stain Publishing',
        intro_description = "Valheim is a brutal exploration and survival game for 1-10 players, set in a procedurally-generated purgatory inspired by viking culture. Battle, build, and conquer your way to a saga worthy of Odin's patronage!",
        full_description="A battle-slain warrior, the Valkyries have ferried your soul to Valheim, the tenth Norse world. Besieged by creatures of chaos and ancient enemies of the gods, you are the newest custodian of the primordial purgatory, tasked with slaying Odin's ancient rivals and bringing order to Valheim.",
        price = 19.99,
        created_at = date.today(),
        updated_at = date.today()
    )

    game5 = Game(
        game_name = 'Phasmophobia',
        main_img = 'https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg?t=1638547194',
        release_date = date(2020, 9, 18),
        developer='Kinetic Games',
        publisher='Kinetic Games',
        intro_description = 'Phasmophobia is a 4 player online co-op psychological horror where you and your team members of paranormal investigators will enter haunted locations filled with paranormal activity and gather as much evidence of the paranormal as you can. You will use your ghost hunting equipment to search for and record evidence of whatever ghost is haunting the location to sell onto a ghost removal team.',
        full_description='Phasmophobia is a 4 player online co-op psychological horror where you and your team members of paranormal investigators will enter haunted locations filled with paranormal activity and gather as much evidence of the paranormal as you can. You will use your ghost hunting equipment to search for and record evidence of whatever ghost is haunting the location to sell onto a ghost removal team. You can choose to support your team by monitoring the location with CCTV cameras and motion sensors from the safety of the truck or head inside and get your hands dirty with the ghostly activity that will get increasingly hostile as time goes on.',
        price = 13.99,
        created_at = date.today(),
        updated_at = date.today()
    )

    game6 = Game(
        game_name = "Sid Meier's Civilization VI",
        main_img = 'https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg?t=1626268082',
        release_date = date(2016, 10, 20),
        developer='Firaxis Games',
        publisher='2K',
        intro_description = "Civilization VI offers new ways to interact with your world, expand your empire across the map, advance your culture, and compete against history's greatest leaders to build a civilization that will stand the test of time. Play as one of 20 historical leaders including Roosevelt (America) and Victoria (England).",
        full_description="Civilization VI offers new ways to interact with your world, expand your empire across the map, advance your culture, and compete against history's greatest leaders to build a civilization that will stand the test of time. Play as one of 20 historical leaders including Roosevelt (America) and Victoria (England). Originally created by legendary game designer Sid Meier, Civilization is a turn-based strategy game in which you attempt to build an empire to stand the test of time. Become Ruler of the World by establishing and leading a civilization from the Stone Age to the Information Age. Wage war, conduct diplomacy, advance your culture, and go head-to-head with history's greatest leaders as you attempt to build the greatest civilization the world has ever known.",
        price = 59.99,
        created_at = date.today(),
        updated_at = date.today()
    )

    game7 = Game(
        game_name = 'Apex Legends',
        main_img = 'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg?t=1638492222',
        release_date = date(2019, 2, 4),
        developer='Respawn Entertainment',
        publisher='Electronic Arts',
        intro_description = 'Apex Legends is a free-to-play battle royale game where legendary characters with powerful abilities team up to battle for fame and fortune on the fringes of the Frontier. Master an ever-growing roster of diverse Legends, deep tactical squad play, and bold new innovations in the next evolution of battle royale.',
        full_description='Apex Legends is a free-to-play battle royale game where legendary characters with powerful abilities team up to battle for fame and fortune on the fringes of the Frontier. Master an ever-growing roster of diverse Legends, deep tactical squad play, and bold new innovations that level up the Battle Royale experience—all within a rugged world where anything goes. Welcome to the next evolution of Battle Royale.',
        price = 0,
        created_at = date.today(),
        updated_at = date.today()
    )

    game8 = Game(
        game_name = 'Elden Ring',
        main_img = 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg?t=1683618443',
        release_date = date(2022, 2, 25),
        developer='FromSoftware',
        publisher='Bandai Namco Entertainment',
        intro_description = "FromSoftware and George R.R. Martin bring you Elden Ring, a new epic fantasy action-RPG set in a sprawling world ravaged by a powerful and devastating curse. Unravel the mysteries of the Elden Ring's power, confront the strength and madness of its rulers, and rise to conquer the lands threatened by the curse.",
        full_description="FromSoftware and George R.R. Martin bring you Elden Ring, a new epic fantasy action-RPG set in a sprawling world ravaged by a powerful and devastating curse. Unravel the mysteries of the Elden Ring's power, confront the strength and madness of its rulers, and rise to conquer the lands threatened by the curse. Explore a vast, open world filled with danger and discovery, where you'll find secret paths, hidden treasures, and new challenges around every corner. With a robust character creator and deep customization options, you can craft your own unique hero and take on the challenge of Elden Ring in your own way. Whether you prefer to fight with a sword, master arcane spells, or rely on stealth and cunning, the fate of the world rests in your hands.",
        price = 59.99,
        created_at = date.today(),
        updated_at = date.today()
    )

    game9 = Game(
        game_name = 'Far Cry 6',
        main_img = 'https://cdn.cloudflare.steamstatic.com/steam/apps/2369390/header.jpg?t=1683827881',
        release_date = date(2022, 10, 7),
        developer='Ubisoft Toronto',
        publisher='Ubisoft',
        intro_description = 'Welcome to Yara, a tropical paradise frozen in time. As dictator of Yara, Anton Castillo is intent on restoring his nation back to its former glory by any means, with his son, Diego, following in his bloody footsteps. Their oppressive rule has ignited a revolution.',
        full_description="Welcome to Yara, a tropical paradise frozen in time. As dictator of Yara, Anton Castillo is intent on restoring his nation back to its former glory by any means, with his son, Diego, following in his bloody footsteps. Their oppressive rule has ignited a revolution. Play as Dani Rojas, a local Yaran and become a guerrilla fighter to liberate your nation. Fight against Castillo's regime in the most ambitious Far Cry to date. Explore the largest open world in a Far Cry game yet, including sprawling cities, beaches, and farmland, all brimming with life. Customize your weapons and gear to suit your playstyle, and recruit a colorful cast of unforgettable characters to join your fight. Far Cry 6 also introduces new gameplay elements like animal companions, the ability to operate tanks and helicopters, and the option to tackle missions solo or with a friend in co-op mode.",
        price = 69.99,
        created_at = date.today(),
        updated_at = date.today()
    )

    game10 = Game(
        game_name = 'It Takes Two',
        main_img = 'https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/header.jpg?t=1626951261',
        release_date = date(2021, 3, 26),
        developer='Hazelight Studios',
        publisher='Electronic Arts',
        intro_description = 'Embark on the craziest journey of your life in It Takes Two, a genre-bending platform adventure created purely for co-op. Play as the clashing couple Cody and May, two humans turned into dolls by a magic spell. Together, trapped in a fantastical world where the unpredictable hides around every corner, they are reluctantly challenged with saving their fractured relationship.',
        full_description="Embark on the craziest journey of your life in It Takes Two, a genre-bending platform adventure created purely for co-op. Invite a friend to join for free with Friend's Pass** across an abundance of gleefully disruptive gameplay challenges. Play as the clashing couple Cody and May, two humans turned into dolls by a magic spell. Together, trapped in a fantastical world where the unpredictable hides around every corner, they are reluctantly challenged with saving their fractured relationship. Master unique and connected character abilities in every new level. Help each other across an abundance of unexpected obstacles and laugh-out-loud moments. Kick gangster squirrels' furry tails, pilot a pair of underpants or dance your way to glory, all in seamless drop-in/out co-op. As you journey through a metaphorical tale of their relationship, exciting gameplay and hilarious antics will ensue.",
        price = 39.99,
        created_at = date.today(),
        updated_at = date.today()
    )


    all_games = [game1, game2, game3, game4, game5, game6, game7, game8, game9, game10]
    add_games = [db.session.add(game) for game in all_games]
    db.session.commit()








def undo_games():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.games RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM games"))

    db.session.commit()
