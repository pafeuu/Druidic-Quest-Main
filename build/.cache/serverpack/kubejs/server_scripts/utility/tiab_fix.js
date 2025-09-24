BlockEvents.rightClicked(event=>{
    
    let mainHand = event.player.mainHandItem
    if(!event.block.hasTag("dq:tiab_blacklist"))
        return;
    if(mainHand == "tiab:time_in_a_bottle")
        event.cancel()
})