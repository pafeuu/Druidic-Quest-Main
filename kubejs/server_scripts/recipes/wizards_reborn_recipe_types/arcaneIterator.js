ServerEvents.recipes(event=>{

    event.custom(
        {
            "type": "wizards_reborn:arcane_iterator",
            "arcane_enchantment": {
                "arcane_enchantment": "wizards_reborn:sonar"
            },
            "wissen": 1500,
            "experience": 10,
            "ingredients": [
                {
                "item": "kubejs:infused_amethyst"
                },
                {
                "item": "kubejs:infused_diamond"
                },
                {
                "item": "kubejs:infused_emerald"
                },
                {
                "item": "thermal:sapphire"
                },
                {
                "item": "thermal:ruby"
                }
            ]
        }
    ).id("wizards_reborn:arcane_iterator/arcane_enchantments/sonar")

   event.custom(
    {
        
    "type": "wizards_reborn:arcane_iterator",
    "output": {
        "item": "wizards_reborn:music_disc_panache",
        "count": 1
    },
    "wissen": 2000,
    "ingredients": [
        {
        "tag": "wizards_reborn:music_disc_panache_ingredient"
        },
        {
        "tag": "wizards_reborn:arcane_wood_planks"
        },
        {
        "tag": "forge:ingots/arcane_gold"
        }
    ]
    }
   ).id("wizards_reborn:arcane_iterator/music_disc_panache")
})