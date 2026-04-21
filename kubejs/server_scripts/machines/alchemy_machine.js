ServerEvents.recipes(event=>{

    function alchemyMachine(output,amount,items,wissen)
    {
        event.custom({
        "type": "wizards_reborn:alchemy_machine",
        "outputItem": {
            "item": output,
            "count": amount
        },
        "steam": 100,
        "wissen": wissen,
        "ingredients": items,
        "fluidIngredients": [
            {
            "name": "wizards_reborn:alchemy_oil",
            "amount" : 150
            }
        ]
        })
    }

    alchemyMachine("kubejs:primitive_alchemical_dust",1,[
        {item:"wizards_reborn:arcanum_dust"},
        {item:"thermal:lapis_dust"},
        {item:"kubejs:infused_emerald"}
    ],500)

    alchemyMachine("kubejs:basic_alchemical_dust",1,[
        {item:"kubejs:primitive_alchemical_dust"},
        {item:"wizards_reborn:alchemy_calx"},
        {tag:"forge:dusts/gold"},
        {item:"kubejs:infused_diamond"}
    ],2500)

    alchemyMachine("kubejs:improved_alchemical_dust",1,[
        {item:"kubejs:basic_alchemical_dust"},
        {item:"wizards_reborn:natural_calx"},
        {tag:"forge:dusts/silver"},
        {item:"thermal:sapphire"}
    ],4000)

    alchemyMachine("kubejs:improved_alchemical_dust",1,[
        {item:"kubejs:basic_alchemical_dust"},
        {item:"wizards_reborn:scorched_calx"},
        {tag:"forge:dusts/silver"},
        {item:"thermal:sapphire"}
    ],3000)

    alchemyMachine("kubejs:advanced_alchemical_dust",1,[
        {item:"kubejs:improved_alchemical_dust"},
        {item:"wizards_reborn:enchanted_calx"},
        {item:"ars_nouveau:abjuration_essence"},
        {item:"thermal:ruby"}
    ],5000)

    alchemyMachine("kubejs:ultimate_alchemical_dust",1,[
        {item:"kubejs:advanced_alchemical_dust"},
        {item:"wizards_reborn:distant_calx"},
        {tag:"forge:dusts/silver"},
        {item:"thermal:sapphire"},
        {item:"thermal:ruby"}
    ],10000)

    
})