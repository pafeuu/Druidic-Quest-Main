PlayerEvents.tick(event=>{
    
    let player = event.player

    if(player.age%160)
        return;

    if(player.isCuriosEquipped("kubejs:ruby_ring"))
    {
        player.heal(2)
    }
    else if(player.isCuriosEquipped("kubejs:ruby_pendant"))
    {
        player.heal(3)
    }

})