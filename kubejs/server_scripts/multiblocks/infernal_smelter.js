// priority: 0
ServerEvents.recipes(event=>{

    const smelting = event.recipes.mbd2.infernal_smelting

    const materials = [
        ["minecraft:copper_ingot","kubejs:crystalized_copper_ore","create:crushed_raw_copper"],
        ["minecraft:gold_ingot","kubejs:crystalized_gold_ore","create:crushed_raw_gold"],
        ["minecraft:iron_ingot","kubejs:crystalized_iron_ore","create:crushed_raw_iron"],
        ["thermal:tin_ingot","kubejs:crystalized_tin_ore","create:crushed_raw_tin"],
        ["thermal:nickel_ingot","kubejs:crystalized_nickel_ore","create:crushed_raw_nickel"],
        ["thermal:silver_ingot","kubejs:crystalized_silver_ore","create:crushed_raw_silver"],
        ["thermal:lead_ingot","kubejs:crystalized_lead_ore","create:crushed_raw_lead"],
        ["create:zinc_ingot","kubejs:crystalized_zinc_ore","create:crushed_raw_zinc"],
        ["immersiveengineering:ingot_uranium","kubejs:crystalized_uranium_ore","create:crushed_raw_uranium"],
        ["immersiveengineering:ingot_aluminum","kubejs:crystalized_aluminum_ore","create:crushed_raw_aluminum"],
    ]

    materials.forEach(([ingot,crystal])=>{

        smelting()
        .duration(200)
        .inputItems(crystal)
        .outputItems("2x "+ingot)
        .dimension("minecraft:the_nether")
        

    })

    event.forEachRecipe({output:"#forge:ingots",type:"minecraft:smelting",not:{input:"#c:hidden_from_recipe_viewers"}},r=>{

        let ingredients = r.originalRecipeIngredients
        let output = r.originalRecipeResult

        if(ingredients[0]==="twilightforest:raw_ironwood")
            return;

        smelting()
        .duration(200)
        .inputItems(ingredients[0])
        .outputItems(output)
        .dimension("minecraft:the_nether")
    })

    smelting()
        .duration(200)
        .inputItems("kubejs:raw_gravitite")
        .outputItems("kubejs:gravitite_ingot")
        .dimension("minecraft:the_nether")
    
})