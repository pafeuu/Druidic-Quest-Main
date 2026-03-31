
ItemEvents.rightClicked("firework_rocket", event=>{

    const player = event.player;

    if(player.chestArmorItem.id=="minecraft:elytra"||player.chestArmorItem.id=="immersiveengineering:glider")
    {

        player.setStatusMessage(Text.of("You can't use rockets with this type of Elytra").red())

        event.cancel()
    }

    "advancementframes:advancement_frame"
    //player.stopFallFlying()
        


    //player.setStatusMessage("You cant use rockets while wearing this type of elytra")
})
