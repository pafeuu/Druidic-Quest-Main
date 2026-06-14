/*ItemEvents.foodEaten("kubejs:recall_potion",event=>{
    
    let player = event.player
    let server = event.server
    let uuid = player.getUuid()
    
    //console.log(server.getPlayer(uuid).respawnPosition)
    if(server.getPlayer(uuid).respawnPosition==undefined)
    {
        console.log("Player without set spawn point")
        let WorldSpawn = server.overworld().getSharedSpawnPos()
        let WorldSpawnAngle = server.overworld().getSharedSpawnAngle()

        server.runCommandSilent(`/execute at ${player.username} run playsound minecraft:entity.enderman.teleport player ${player.username}`)
        player.teleportTo("minecraft:overworld",WorldSpawn.getX(),WorldSpawn.getY(),WorldSpawn.getZ(),WorldSpawnAngle,1)
        server.runCommandSilent(`/execute at ${player.username} run particle alembic:ender_magic ~ ~ ~ 0.2 0.2 0.2 0.3 200 normal`)
        player.give("wizards_reborn:alchemy_vial")
    }
    else
    {
        let positionX = server.getPlayer(uuid).respawnPosition.getX()
        let positionY = server.getPlayer(uuid).respawnPosition.getY()
        let positionZ = server.getPlayer(uuid).respawnPosition.getZ()
        let dimension = server.getPlayer(player.getUuid()).respawnDimension
        let angle = server.getPlayer(player.getUuid()).respawnAngle

        server.runCommandSilent(`/execute at ${player.username} run playsound minecraft:entity.enderman.teleport player ${player.username}`)
        player.teleportTo(dimension,positionX,positionY,positionZ,angle,1)
        server.runCommandSilent(`/execute at ${player.username} run particle alembic:ender_magic ~ ~ ~ 0.2 0.2 0.2 0.3 200 normal`)
        player.give("wizards_reborn:alchemy_vial")
    }  
   
})*/