ServerEvents.recipes(event=>{

    function flowerWandRecipe(type,additive)
    {
        event.shaped(`druidic_quest_core:${type}_flower_staff`,
            [
                "  F",
                " S ",
                "A  "
            ],
            {
                F: `#forge:flowers/${type}`,
                S: "#c:rods/wooden",
                A: additive
            }
        )
    }

    flowerWandRecipe("crimson","coal")
    flowerWandRecipe("cobalt","minecraft:snowball")
    flowerWandRecipe("lush","#minecraft:saplings")
    flowerWandRecipe("ebony","ink_sac")
    flowerWandRecipe("golden","#forge:flowers/golden")
    flowerWandRecipe("pure","#c:rods/wooden")
})