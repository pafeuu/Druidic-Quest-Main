ServerEvents.recipes(event=>{

    event.remove({output:[global.nukelist]})
	event.remove({input:[global.nukelist]})

    event.remove({ type: "minecraft:crafting_shapeless", mod: "thermal", output: "#forge:dusts" })
	event.remove({ type: "minecraft:crafting_shapeless", mod: "thermal", output: "#forge:ingots", input: "minecraft:fire_charge" })
    
})