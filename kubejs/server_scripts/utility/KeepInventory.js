
//const $CuriosApi = Java.loadClass("top.theillusivec4.curios.api.CuriosApi")

ServerEvents.loaded(event => {
    const server = event.server
    server.gameRules.set("keepInventory", true)
    
})

PlayerEvents.respawned(event =>{
    const server = event.server
    const player = event.player

    player.foodLevel = 10
    player.saturation = 0
    player.experienceLevel = 0
    player.experienceProgress = 0
    server.runCommandSilent("/effect give @p minecraft:weakness 60 0")
    if(player.inventory.find("thermal:xp_crystal") != -1 && Math.random()<0.15)
    {     
        player.tell(Text.red("Your XP crystal shattered on death..."))
        player.inventory.clear(`thermal:xp_crystal`)
    }

    /* // place this inside of the event and the constant above outside
        let curios_inventory = $CuriosApi.getCuriosInventory(event.player).get() // idk if this works
        let matching_curios = curios_inventory.findCurios("enigmaticlegacy:xp_scroll")

        for (let i = 0; i < matching_curios.length, i++;)
        {
        curios_inventory.setEquippedCurio(
            matching_curios[i].slotContext().identifier(),
            matching_curios[i].slotContext().index(),
            "minecraft:air"
        )
        }

    if(player.inventory.find("enigmaticlegacy:xp_scroll") != -1 && Math.random()<1)
    {
        
        player.tell(Text.red("Your XP Scroll burned from embaressment..."))
        player.inventory.clear(`enigmaticlegacy:xp_scroll`)
    }
    console.log(player.inventory.find("enigmaticlegacy:xp_scroll"))*/

    
    
    
})