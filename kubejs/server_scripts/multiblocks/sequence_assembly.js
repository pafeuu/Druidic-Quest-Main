ServerEvents.recipes(e=>{
    
    const assembly = e.recipes.create.sequenced_assembly
    const deploying = e.recipes.create.deploying
    assembly("immersiveengineering:blastbrick","kubejs:blast_brick",
        [
        deploying("kubejs:incomplete_blast_bricks",["kubejs:incomplete_blast_bricks","kubejs:brick_glue"]),
        deploying("kubejs:incomplete_blast_bricks",["kubejs:incomplete_blast_bricks","kubejs:blast_brick"])
    ]).transitionalItem("kubejs:incomplete_blast_bricks").loops(7)
    .id("immersiveengineering:crafting/blastbrick")

    assembly("forbidden_arcanus:clibano_core","#forge:gears/fiery",
        [
        deploying("kubejs:incomplete_clibano_core",["kubejs:incomplete_clibano_core","forbidden_arcanus:dark_rune"]),
        deploying("kubejs:incomplete_clibano_core",["kubejs:incomplete_clibano_core","#forge:ingots/phoenix"]),
        deploying("kubejs:incomplete_clibano_core",["kubejs:incomplete_clibano_core","forbidden_arcanus:dark_rune"]),
        deploying("kubejs:incomplete_clibano_core",["kubejs:incomplete_clibano_core","kubejs:death_essence"]),
        deploying("kubejs:incomplete_clibano_core",["kubejs:incomplete_clibano_core","forbidden_arcanus:dark_rune"]),
        deploying("kubejs:incomplete_clibano_core",["kubejs:incomplete_clibano_core","immersiveengineering:alloybrick"]),
    ]).transitionalItem("kubejs:incomplete_clibano_core").loops(8)
    .id("forbidden_arcanus:clibano_core")


})