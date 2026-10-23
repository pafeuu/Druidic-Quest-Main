ServerEvents.recipes(e=>{
    
    const imbuement = e.recipes.ars_nouveau.imbuement;

    const SmallSourceAmount = 500;
    imbuement("#forge:foods/meat/raw","minecraft:rotten_flesh",SmallSourceAmount,["rotten_flesh","kubejs:corrupted_soul","rotten_flesh"])
    imbuement("#forge:foods/meat/raw","minecraft:bone",SmallSourceAmount,["bone","kubejs:corrupted_soul","bone"])
    imbuement("#forge:stripped_logs","naturesaura:wood_stand",SmallSourceAmount,["#forge:tools/knives","naturesaura:gold_leaf","naturesaura:gold_leaf"])
    imbuement("naturesaura:wood_stand","kubejs:basic_token",SmallSourceAmount,["#forge:tools/knives","naturesaura:token_joy","naturesaura:token_grief"])
    //imbuement("minecraft:rabbit","naturesaura:birth_spirit",SmallSourceAmount,["minecraft:egg","kubejs:life_essence"])
})