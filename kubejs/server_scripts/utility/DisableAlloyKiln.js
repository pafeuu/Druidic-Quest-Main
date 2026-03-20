BlockEvents.rightClicked("immersiveengineering:alloybrick",event=>{

    if(event.player.mainHandItem.id != "immersiveengineering:hammer")
        return;

    event.player.setStatusMessage("§c§lAlloy Kiln Disabled!")
    
    event.cancel()
    
})