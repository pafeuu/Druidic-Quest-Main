PlayerEvents.tick(event=>{
    
    let player = event.player

    if(player.age%200)
        return

    if(player.isCuriosEquipped("kubejs:mycelial_ring"))
    {
        player.addFood(1,0.3)
    }

})