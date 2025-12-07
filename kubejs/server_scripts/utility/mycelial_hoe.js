PlayerEvents.tick(event=>{
    
    let player = event.player

    let mainhand = player.mainHandItem

    let offhand = player.offHandItem

    if(player.age%40)
        return

    if(offhand.id == "kubejs:mycelial_hoe" || mainhand.id == "kubejs:mycelial_hoe")
    {
        player.addFood(1,0.3)
    }

})