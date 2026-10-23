ServerEvents.recipes(event=>{

    const crushing = event.recipes.create.crushing

    crushing(Item.of("thermal:sulfur").withChance(0.05),"minecraft:sulfur_spike")
})