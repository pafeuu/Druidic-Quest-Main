ServerEvents.recipes(event => {

    Ingredient.of("#minecraft:logs")
        .subtract("#forge:stripped_blocks")
        .getItemIds().forEach(id => {
            let Log = id
            let StrippedLog = id.replace(":", ":stripped_")
            if(Log.startsWith("aether:golden_oak"))
            {
                console.log("logged")
                StrippedLog = StrippedLog.replace("golden_oak","skyroot")
            }
                
            console.log(StrippedLog)
            event.shapeless(StrippedLog, ["#create:sandpaper", Log])
                .damageIngredient("#create:sandpaper", 1)
        });

})