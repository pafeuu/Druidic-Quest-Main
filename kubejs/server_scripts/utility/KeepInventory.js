

ServerEvents.loaded(event => {
    const server = event.server
    server.gameRules.set("keepInventory", false)
    server.gameRules.set("doInsomnia",false)
    
})

PlayerEvents.respawned(event =>{
   
    const player = event.player
    player.experienceLevel = 0
    player.experienceProgress = 0
    if(!player.isAdvancementDone("restrictedportals:twilightforest"))
        return;
    player.foodLevel = 10
    player.saturation = 0
       
})