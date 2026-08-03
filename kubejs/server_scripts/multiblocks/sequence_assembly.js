ServerEvents.recipes(e=>{
    
    const assembly = e.recipes.create.sequenced_assembly
    const deploying = e.recipes.create.deploying
    const filling = e.recipes.create.filling
    
    assembly("immersiveengineering:blastbrick","kubejs:blast_brick",
        [
            deploying("kubejs:incomplete_blast_bricks",["kubejs:incomplete_blast_bricks","kubejs:brick_glue"]),
            deploying("kubejs:incomplete_blast_bricks",["kubejs:incomplete_blast_bricks","kubejs:blast_brick"])
        ]).transitionalItem("kubejs:incomplete_blast_bricks").loops(7)
        .id("immersiveengineering:crafting/blastbrick")

    assembly("kubejs:soul_core","#forge:ingots/phoenix",
        [
            deploying("kubejs:incomplete_soul_core",["kubejs:incomplete_soul_core","kubejs:enchanted_soul"]),
            deploying("kubejs:incomplete_soul_core",["kubejs:incomplete_soul_core","kubejs:enchanted_soul"]),
            deploying("kubejs:incomplete_soul_core",["kubejs:incomplete_soul_core","kubejs:death_essence"]),
            deploying("kubejs:incomplete_soul_core",["kubejs:incomplete_soul_core","kubejs:arcane_gold_plate"]),
            deploying("kubejs:incomplete_soul_core",["kubejs:incomplete_soul_core","immersiveengineering:alloybrick"]),
            deploying("kubejs:incomplete_soul_core",["kubejs:incomplete_soul_core","kubejs:infernal_bricks"])
        ]).transitionalItem("kubejs:incomplete_soul_core").loops(24)

    function Pies(output,fruit)
    {
        assembly(output,"farmersdelight:pie_crust",
        [
            filling("kubejs:incomplete_cake",[Fluid.of("minecraft:milk",500),"kubejs:incomplete_cake"]),
            deploying("kubejs:incomplete_cake",["kubejs:incomplete_cake","sugar"]),
            deploying("kubejs:incomplete_cake",["kubejs:incomplete_cake","sugar"]),
            deploying("kubejs:incomplete_cake",["kubejs:incomplete_cake",fruit]),
            deploying("kubejs:incomplete_cake",["kubejs:incomplete_cake",fruit])
        ]).transitionalItem("kubejs:incomplete_cake").loops(1)
        e.remove({id:output})
    }

    Pies("minecraft:pumpkin_pie","pumpkin")
    Pies("cake","sugar")
    const ArsFruits = ["frostaya","bastion","mendosteen"]

    ArsFruits.forEach(fruit => {
        Pies(`arsdelight:${fruit}_pie`,`ars_nouveau:${fruit}_pod`)
    });
    Pies("arsdelight:bombegrante_pie","ars_nouveau:bombegranate_pod")
    Pies("farmersdelight:chocolate_pie","create:bar_of_chocolate")
    Pies("biomeswevegone:green_apple_pie","biomeswevegone:green_apple")
    Pies("biomeswevegone:blueberry_pie","fruitsdelight:blueberry")
    Pies("farmersdelight:apple_pie","apple")
    Pies("fruitsdelight:durian_pie","fruitsdelight:durian")
    Pies("fruitsdelight:pineapple_pie","fruitsdelight:pineapple")
    Pies("ars_nouveau:source_berry_pie","ars_nouveau:sourceberry_bush")
    Pies("fruitsdelight:mangosteen_cake","fruitsdelight:mangosteen")
    Pies("farmersdelight:sweet_berry_cheesecake","minecraft:sweet_berries")
    Pies("fruitsdelight:fig_tart","fruitsdelight:fig")
    Pies("fruitsdelight:lemon_tart","fruitsdelight:lemon")
    Pies("wizards_reborn:pitcher_turnip_pie","wizards_reborn:pitcher_turnip")
    Pies("wizards_reborn:mor_pie","wizards_reborn:mor")
    Pies("wizards_reborn:elder_mor_pie","wizards_reborn:elder_mor")
    Pies("wizards_reborn:carrot_pie","minecraft:carrot")

    assembly("farmersdelight:shepherds_pie_block","farmersdelight:pie_crust",
        [
            filling("kubejs:incomplete_cake",[Fluid.of("minecraft:milk",500),"kubejs:incomplete_cake"]),
            deploying("kubejs:incomplete_cake",["kubejs:incomplete_cake","#forge:cooked_mutton"]),
            deploying("kubejs:incomplete_cake",["kubejs:incomplete_cake","farmersdelight:onion"]),
            deploying("kubejs:incomplete_cake",["kubejs:incomplete_cake","minecraft:baked_potato"])
        ]).transitionalItem("kubejs:incomplete_cake").loops(3)

    assembly("mynethersdelight:magma_cake_block","create:blaze_cake_base",
        [
            filling("kubejs:incomplete_cake",[Fluid.of("minecraft:lava",500),"kubejs:incomplete_cake"]),
            deploying("kubejs:incomplete_cake",["kubejs:incomplete_cake","mynethersdelight:hot_cream"]),
            deploying("kubejs:incomplete_cake",["kubejs:incomplete_cake","sugar"]),
            deploying("kubejs:incomplete_cake",["kubejs:incomplete_cake","sugar"])
        ]).transitionalItem("kubejs:incomplete_cake").loops(1)
    
})