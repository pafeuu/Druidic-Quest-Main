
ItemEvents.rightClicked(event=>{

    const item = event.item
    const player = event.player
    const server = event.server

    if(item.id == "tide:blazing_swordfish" && player.isCrouching()){
        player.setSecondsOnFire(5)
        server.runCommandSilent(`/playsound sawmill:ui.sawmill.take_result master ${player.username}`)
        server.runCommandSilent("/effect give @p irons_spellbooks:hastened 30 1")
    }
})
