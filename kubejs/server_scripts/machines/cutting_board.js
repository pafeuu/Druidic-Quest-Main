ServerEvents.recipes(event=>{

    const cutting = event.recipes.farmersdelight.cutting
    cutting("#minecraft:flowers","#forge:tools/knives","wizards_reborn:petals").id("wizards_reborn:mortar/petals")

    cutting("hopper_minecart","#forge:tools/pickaxes",["minecart","hopper"])
    cutting("tnt_minecart","#forge:tools/pickaxes",["minecart","tnt"])
    cutting("furnace_minecart","#forge:tools/pickaxes",["minecart","furnace"])
    cutting("chest_minecart","#forge:tools/pickaxes",["minecart","chest"])
    cutting("supplementaries:dispenser_minecart","#forge:tools/pickaxes",["minecart","dispenser"])
    cutting("naturesaura:mover_cart","#forge:tools/pickaxes",["minecart","3x naturesaura:infused_brick","naturesaura:infused_iron_block"])
    cutting("naturesaura:ancient_log","#forge:tools/axes",["naturesaura:stripped_ancient_log","farmersdelight:tree_bark"]).id("everycomp:fd/naturesaura/cutting/ancient_log")
    cutting("naturesaura:ancient_bark","#forge:tools/axes",["naturesaura:stripped_ancient_bark","farmersdelight:tree_bark"]).id("everycomp:fd/naturesaura/cutting/ancient_wood")

})