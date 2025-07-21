ServerEvents.recipes(event=>{

    const apparatus = event.recipes.ars_nouveau.enchanting_apparatus

    apparatus([
        "#forge:gears/arcane_gold",
        "#forge:gears/arcane_gold",
        "ars_nouveau:arcane_core"],
        "kubejs:magic_machine",
        "wizards_reborn:arcane_iterator").id("wizards_reborn:arcane_workbench/arcane_iterator")
   
})