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
})