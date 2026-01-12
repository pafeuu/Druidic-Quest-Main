ServerEvents.recipes(e=>{
    
    const assembly = e.recipes.create.sequenced_assembly
    const deploying = e.recipes.create.deploying
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
        deploying("kubejs:incomplete_soul_core",["kubejs:incomplete_soul_core","wizards_reborn:arcane_gold_sheet"]),
        deploying("kubejs:incomplete_soul_core",["kubejs:incomplete_soul_core","immersiveengineering:alloybrick"]),
        deploying("kubejs:incomplete_soul_core",["kubejs:incomplete_soul_core","kubejs:infernal_bricks"])
    ]).transitionalItem("kubejs:incomplete_soul_core").loops(24)


})