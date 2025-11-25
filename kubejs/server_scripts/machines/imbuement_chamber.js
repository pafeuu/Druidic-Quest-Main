ServerEvents.recipes(e=>{
    
    const imbuement = e.recipes.ars_nouveau.imbuement;

    const SmallSourceAmount = 500;
    imbuement("#forge:foods/meat/raw","minecraft:rotten_flesh",SmallSourceAmount,["rotten_flesh","forbidden_arcanus:corrupt_soul","rotten_flesh"])
    imbuement("#forge:foods/meat/raw","minecraft:bone",SmallSourceAmount,["bone","forbidden_arcanus:corrupt_soul","bone"])
    imbuement("#forge:stripped_logs","naturesaura:wood_stand",SmallSourceAmount,["#forge:tools/knives","naturesaura:gold_leaf","naturesaura:gold_leaf"])
    
})