from app.models import db, GameImage, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date



def seed_game_images():
    #game 1
    game1img1 = GameImage(
        game_id = 1,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/ss_e589d6bb347c13f7226f0b294fd12880ced8d171.600x338.jpg?t=1684344870'
    )

    game1img2 = GameImage(
        game_id = 1,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/ss_6f2e72d773e4280f3a4860c7fb1d62e72932a9b0.600x338.jpg?t=1684344870'
    )

    game1img3 = GameImage(
        game_id=1,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/ss_f14055548a6c51171036ebb3d00ddf5c97e5bd05.600x338.jpg?t=1684344870'
    )

    game1img4 = GameImage(
        game_id=1,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/ss_bb84b8cbf9294c6166819c3d3328c4efbdb9d46c.600x338.jpg?t=1684344870'
    )

    game1img5 = GameImage(
        game_id=1,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/ss_3c8dd0328d9d5944083d1c1da10f316de090c67d.600x338.jpg?t=1684344870'
    )

    game1img6 = GameImage(
        game_id=1,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/ss_3ed1979b4d57f7819813e1c11462e1f631a83987.600x338.jpg?t=1684344870'
    )

    game1img7 = GameImage(
        game_id=1,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/ss_72e3265e1983d759d133338b613df2010cf5eb56.600x338.jpg?t=1684344870'
    )

    game1img8 = GameImage(
        game_id=1,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/ss_0400a734d8f53d0620ce8349aa30f984e794de92.600x338.jpg?t=1684344870'
    )


    # game2
    game2img1 = GameImage(
        game_id = 2,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.600x338.jpg?t=1671485009'
    )

    game2img2 = GameImage(
        game_id=2,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.600x338.jpg?t=1671485009'
    )

    game2img3 = GameImage(
        game_id=2,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/ss_668dafe477743f8b50b818d5bbfcec669e9ba93e.600x338.jpg?t=1671485009'
    )

    game2img4 = GameImage(
        game_id=2,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/ss_4ce07ae360b166f0f650e9a895a3b4b7bf15e34f.600x338.jpg?t=1671485009'
    )

    game2img5 = GameImage(
        game_id=2,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/ss_d1a8f5a69155c3186c65d1da90491fcfd43663d9.600x338.jpg?t=1671485009'
    )


    # game3
    game3img1 = GameImage(
        game_id=3,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/945360/ss_1fbd9dc9fd6a2710d233a088ef426a6d78fcf884.600x338.jpg?t=1684189647'
    )

    game3img2 = GameImage(
        game_id=3,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/945360/ss_9d11502fa973580a82b532b25f1901b8425c28f9.600x338.jpg?t=1684189647'
    )

    game3img3 = GameImage(
        game_id=3,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/945360/ss_17be75e178e3520c986504504ada8535de19cc0d.600x338.jpg?t=1684189647'
    )

    game3img4 = GameImage(
        game_id=3,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/945360/ss_a1872c1c594ad4e5885d248516919d85243d9c1f.600x338.jpg?t=1684189647'
    )

    game3img5 = GameImage(
        game_id=3,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/945360/ss_7ccc894b8f95091f608fa012450549091cce2423.600x338.jpg?t=1684189647'
    )

    game3img6 = GameImage(
        game_id=3,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/945360/ss_13ec9b7b0ad4d154a99a8cbbc4a0c12c02d0421f.600x338.jpg?t=1684189647'
    )

    game3img7 = GameImage(
        game_id=3,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/945360/ss_7b628153ef470f3c6bbd7d1159bcef106a88e042.600x338.jpg?t=1684189647'
    )

    game3img8 = GameImage(
        game_id=3,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/945360/ss_41c3f20fa1faf5c9c7548b38a22c449bcfa9bc5e.600x338.jpg?t=1684189647'
    )


    # game 4
    game4img1 = GameImage(
        game_id=4,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/892970/ss_a600a7d4ca954543e22f571a9629521a13f82143.600x338.jpg?t=1676365340'
    )

    game4img2 = GameImage(
        game_id=4,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/892970/ss_cd0262c5abf8a90ee5e1059acafc5a92b6be0e73.600x338.jpg?t=1676365340'
    )

    game4img3 = GameImage(
        game_id=4,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/892970/ss_3db385fc1223914dadb199ac8682683a8c59454e.600x338.jpg?t=1676365340'
    )

    game4img4 = GameImage(
        game_id=4,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/892970/ss_6032c9336c6cf9c1ebc914cedf022b38e97fd271.600x338.jpg?t=1676365340'
    )

    game4img5 = GameImage(
        game_id=4,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/892970/ss_f6cbfeea728d557fa9f483685fea3205f08f5d9e.600x338.jpg?t=1676365340'
    )

    game4img6 = GameImage(
        game_id=4,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/892970/ss_551f06a43b72609d7ca3cd63e93c58e949d58384.600x338.jpg?t=1676365340'
    )

    game4img7 = GameImage(
        game_id=4,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/892970/ss_f4ea4f0f93cc8b38042f6d5916413da185ec221c.600x338.jpg?t=1676365340'
    )

    game4img8 = GameImage(
        game_id=4,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/892970/ss_553301e2432883e9f026fe1dd0e91d7a8886d6f1.600x338.jpg?t=1676365340'
    )

    game4img9 = GameImage(
        game_id=4,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/892970/ss_9b4abc60696de192c40064364a1395ad5074e5c3.600x338.jpg?t=1676365340'
    )

    game4img10 = GameImage(
        game_id=4,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/892970/ss_15a86a1c4175f9392127265735c177a91535de65.600x338.jpg?t=1676365340'
    )


    # game 5
    game5img1 = GameImage(
        game_id=5,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/739630/ss_c88170bed9bf8690963323d20e3f9e836cb9aed9.600x338.jpg?t=1683281716'
    )

    game5img2 = GameImage(
        game_id=5,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/739630/ss_f0377c02897de8831a5f032f13a6dc0f994516d5.600x338.jpg?t=1683281716'
    )

    game5img3 = GameImage(
        game_id=5,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/739630/ss_ce1062b9312afbc12000f980087ede8fa718445d.600x338.jpg?t=1683281716'
    )

    game5img4 = GameImage(
        game_id=5,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/739630/ss_8032ff1ebe2aad6871c45b30458d7a6c868f2212.600x338.jpg?t=1683281716'
    )

    game5img5 = GameImage(
        game_id=5,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/739630/ss_b446d0ca191cf5a183ac3cc9538a59aa7575c14c.600x338.jpg?t=1683281716'
    )

    game5img6 = GameImage(
        game_id=5,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/739630/ss_dcf3fde71a8104c068d9fd1c122361af9677737a.600x338.jpg?t=1683281716'
    )

    game5img7 = GameImage(
        game_id=5,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/739630/ss_d33aaa88ff7429590a1ead0b9cced32df2c38696.600x338.jpg?t=1683281716'
    )



    # game 6
    game6img1 = GameImage(
        game_id=6,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/289070/ss_12cc6e1f4084de5bc0f66bfdbe3aaf3e59388b53.600x338.jpg?t=1680898825'
    )

    game6img2 = GameImage(
        game_id=6,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/289070/ss_6c4a3cfb61f1a9677cf2ac549c2816a4e651f741.600x338.jpg?t=1680898825'
    )

    game6img3 = GameImage(
        game_id=6,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/289070/ss_b2bf12299c38214fe520af0f724a6349d17ed330.600x338.jpg?t=1680898825'
    )

    game6img4 = GameImage(
        game_id=6,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/289070/ss_7f598198526afc260d939a98af4d76d95f5349e4.600x338.jpg?t=1680898825'
    )

    game6img5 = GameImage(
        game_id=6,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/289070/ss_7ca34ff8ae81fb10ddc540187e2e21d1b8e1dfe9.600x338.jpg?t=1680898825'
    )

    game6img6 = GameImage(
        game_id=6,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/289070/ss_36c63ebeb006b246cb740fdafeb41bb20e3b330d.600x338.jpg?t=1680898825'
    )

    game6img7 = GameImage(
        game_id=6,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/289070/ss_cf53258cb8c4d283e52cf8dce3edf8656f83adc6.600x338.jpg?t=1680898825'
    )

    game6img8 = GameImage(
        game_id=6,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/289070/ss_f501156a69223131ee8b12452f3003698334e964.600x338.jpg?t=1680898825'
    )


    # game 7
    game7img1 = GameImage(
        game_id=7,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_007703880007a4c8e82e95131ac0ea711cf0ac79.600x338.jpg?t=1685123076'
    )

    game7img2 = GameImage(
        game_id=7,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_fdc1e9672845f80692f2c495b242ba1a061a5d47.600x338.jpg?t=1685123076'
    )

    game7img3 = GameImage(
        game_id=7,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_88b5ded3e0e32512e55c5a8396623277af5cd88b.600x338.jpg?t=1685123076'
    )

    game7img4 = GameImage(
        game_id=7,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_df3ca0e4d069bf22ae0790234626ce6a8bd49c72.600x338.jpg?t=1685123076'
    )

    game7img5 = GameImage(
        game_id=7,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_c4e4f1406f8d4d2c608e6f6d2a927ed17fc86663.600x338.jpg?t=1685123076'
    )

    game7img6 = GameImage(
        game_id=7,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_0231b1ed6032f8643f5d86cbeeb1662ae840bbd3.600x338.jpg?t=1685123076'
    )

    game7img7 = GameImage(
        game_id=7,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_1fe76e28526e55c5df2abce93655c80516180a22.600x338.jpg?t=1685123076'
    )

    game7img8 = GameImage(
        game_id=7,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_e8d3060841b91ce65668cb61151f19742ce26978.600x338.jpg?t=1685123076'
    )


    # game 8
    game8img1 = GameImage(
        game_id=8,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_ae44317e3bd07b7690b4d62cc5d0d1df30367a91.600x338.jpg?t=1683618443'
    )

    game8img2 = GameImage(
        game_id=8,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_e80a907c2c43337e53316c71555c3c3035a1343e.600x338.jpg?t=1683618443'
    )

    game8img3 = GameImage(
        game_id=8,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_b70e156adf9e40aed24c10fb352b7813586e7290.600x338.jpg?t=1683618443'
    )

    game8img4 = GameImage(
        game_id=8,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_3aec1455923ef49f4e777c2a94dbcd0256f77eb0.600x338.jpg?t=1683618443'
    )

    game8img5 = GameImage(
        game_id=8,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_b6c4cdb36cebdbd52b97ab6e0851b7d3e41f03b3.600x338.jpg?t=1683618443'
    )

    game8img6 = GameImage(
        game_id=8,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_e87a3e84890ab19f8995566e62762d5f8ed39315.600x338.jpg?t=1683618443'
    )

    game8img7 = GameImage(
        game_id=8,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_1e3dfe515c04f4071207f01d62b85a1d6b560ced.600x338.jpg?t=1683618443'
    )

    game8img8 = GameImage(
        game_id=8,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_3e556415d1bda00d749b2166ced264bec76f06ee.600x338.jpg?t=1683618443'
    )

    game8img9 = GameImage(
        game_id=8,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_8b58d96262fb0d62a482621b86c6ff85f4f57997.600x338.jpg?t=1683618443'
    )

    game8img10 = GameImage(
        game_id=8,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_41e2e8f3b0ad631e929e0c2ec3d1f21de883e98c.600x338.jpg?t=1683618443'
    )


    # game 9
    game9img1 = GameImage(
        game_id=9,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/2369390/ss_195eb286dad05d3b9e56f22eafacce7efe9c9ebf.600x338.jpg?t=1684591369'
    )

    game9img2 = GameImage(
        game_id=9,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/2369390/ss_65c6467467795423bb959aa2c76ad2659f6553cd.600x338.jpg?t=1684591369'
    )

    game9img3 = GameImage(
        game_id=9,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/2369390/ss_b0fa07116df319216ac4a4e7855a4c4a1d224bd0.600x338.jpg?t=1684591369'
    )

    game9img4 = GameImage(
        game_id=9,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/2369390/ss_8bf4118728c0df8340c665329b78e428ed0a7c9f.600x338.jpg?t=1684591369'
    )

    game9img5 = GameImage(
        game_id=9,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/2369390/ss_d3b78bb05886f9961869b03701f5920537e0decc.600x338.jpg?t=1684591369'
    )



    # game10
    game10img1 = GameImage(
        game_id=10,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/ss_3e59753eefaba9a7704a18e902b48e8d38e95e0b.600x338.jpg?t=1679951279'
    )

    game10img2 = GameImage(
        game_id=10,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/ss_6e987a0678b013bfd0073a9ac4703e1f04ca4dea.600x338.jpg?t=1679951279'
    )

    game10img3 = GameImage(
        game_id=10,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/ss_fdac523e3ea4d2f32a44449bb8c224857563bd7d.600x338.jpg?t=1679951279'
    )

    game10img4 = GameImage(
        game_id=10,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/ss_4a62bc8fa398fc5b2094a6225dc5ecff9485f824.600x338.jpg?t=1679951279'
    )

    game10img5 = GameImage(
        game_id=10,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/ss_a15164ddd357ab3c0b2aff575a6b215b2d91b406.600x338.jpg?t=1679951279'
    )

    game10img6 = GameImage(
        game_id=10,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/ss_d7a931229cbf1cc25975bb5860cbde5b9bbc826a.600x338.jpg?t=1679951279'
    )

    game10img7 = GameImage(
        game_id=10,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/ss_6f7b65b8613afbcb2616bff8ed0283d0629b6572.600x338.jpg?t=1679951279'
    )

    game10img8 = GameImage(
        game_id=10,
        image='https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/ss_6ce2d50261a94284c72164e2d6d3721fe2f00013.600x338.jpg?t=1679951279'
    )



    all_games_images = [game1img1, game1img2, game1img3, game1img4, game1img5, game1img6,
                        game1img7, game1img8, game2img1, game2img2, game2img3, game2img4, game2img5, game3img1, game3img2, game3img3, game3img4, game3img5, game3img6, game3img7, game3img8, game4img1, game4img2, game4img3, game4img4, game4img5, game4img6, game4img7, game4img8, game4img9, game4img10, game5img1, game5img2, game5img3, game5img4, game5img5, game5img6, game5img7, game6img1, game6img2, game6img3, game6img4, game6img5, game6img6, game6img7, game6img8, game7img1, game7img2, game7img3, game7img4, game7img5, game7img6, game7img7, game7img8, game8img1, game8img2, game8img3, game8img4, game8img5, game8img6, game8img7, game8img8, game8img9, game8img10, game9img1, game9img2, game9img3, game9img4, game9img5, game10img1, game10img2, game10img3, game10img4, game10img5, game10img6, game10img7, game10img8]
    add_game_images = [db.session.add(game_img) for game_img in all_games_images]
    db.session.commit()


def undo_game_images():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.gameimages RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM gameimages"))

    db.session.commit()
