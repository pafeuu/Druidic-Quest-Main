const $CuriosApi = Java.loadClass("top.theillusivec4.curios.api.CuriosApi")

ServerEvents.loaded(event => {
    const server = event.server
    server.gameRules.set("keepInventory", true)
    
})

PlayerEvents.respawned(event =>{
   
    const player = event.player

    player.foodLevel = 10
    player.saturation = 0
    player.experienceLevel = 0
    player.experienceProgress = 0
   
    
})