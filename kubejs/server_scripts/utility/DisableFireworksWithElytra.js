
ItemEvents.rightClicked("firework_rocket", event=>{

    const player = event.player;

    if(player.chestArmorItem.id=="minecraft:elytra")
    {

        player.setStatusMessage(Text.of("You can't use rockets with this type of Elytra").red())

        event.cancel()
    }

    "advancementframes:advancement_frame"
})
