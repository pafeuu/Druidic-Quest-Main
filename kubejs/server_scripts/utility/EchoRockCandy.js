ItemEvents.foodEaten("sob:echo_rock_candy",event=>{
    
    let player = event.player
    let server = event.server
    //let uuid = player.getUuid()

    /*console.log(event.player.getName())
    console.log(event.player.getUuid())
    console.log(event.server.getPlayer(event.player.getUuid()).respawnPosition.getX())
    console.log(event.server.getPlayer(event.player.getUuid()).respawnPosition.getY())
    console.log(event.server.getPlayer(event.player.getUuid()).respawnPosition.getZ())
    console.log(event.server.getPlayer(event.player.getUuid()).respawnDimension)
    console.log(event.server.getPlayer(event.player.getUuid()).respawnAngle)*/

    
    server.runCommandSilent(`/execute at ${player.username} run playsound minecraft:entity.enderman.teleport player ${player.username}`)
    server.runCommandSilent(`/execute at ${player.username} run particle alembic:ender_magic ~ ~ ~ 0.2 0.2 0.2 0.3 200 normal`)
    player.setHealth(10)
    player.give("minecraft:echo_shard")
    //e.player.lastDeathLocation()
   
})