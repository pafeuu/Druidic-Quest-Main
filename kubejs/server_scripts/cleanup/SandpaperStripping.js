ServerEvents.recipes(event => {

    Ingredient.of("#minecraft:logs")
        .subtract("#forge:stripped_blocks")
        .getItemIds().forEach(id => {
            let Log = id
            let StrippedLog = id.replace(":", ":stripped_")
            if(Log.startsWith("botania:glimmering"))
            {
                StrippedLog = StrippedLog.replace("stripped_glimmering","glimmering_stripped")
            }
            if(Log.startsWith("aether:golden_oak"))
            {
                StrippedLog = StrippedLog.replace("golden_oak","skyroot")
            }  
            event.shapeless(StrippedLog, ["#create:sandpaper", Log])
                .damageIngredient("#create:sandpaper", 1)
        });

})