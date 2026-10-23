BlockEvents.rightClicked(event=>{

    const player = event.player
    const block = event.block
    const mainHand = player.mainHandItem.id
    
    if(mainHand!="kubejs:warp_scroll")
        return;
    if(!player.isCrouching())
        return;
    
    player.swing();
    
    
    console.log("dimension: "+block.getDimension())

    player.mainHandItem.setNbt(
        {an_warp_scroll:
            {
                dim:block.getDimension().toString(),
                x:block.pos.getX(),
                xRot:player.getPitch(),
                y:block.pos.getY(),
                yRot:player.getYaw(),
                z:block.pos.getZ()
            }
        })
    console.log("rightclicked with a warp scroll")

})

ItemEvents.rightClicked("kubejs:warp_scroll",event=>{
    const item = event.getItem(); 
    const player = event.player
    const nbt = item.getNbt()
    const server = event.server

    if(player.isCrouching())
        return;

    console.log("teleport to dimension:"+nbt.an_warp_scroll.dim)
    /*if(!nbt)
        return;*/

    server.runCommandSilent(`/execute at ${player.username} run playsound minecraft:entity.illusioner.cast_spell player ${player.username}`)
    server.runCommandSilent(`/execute at ${player.username} run particle alembic:ender_magic ~ ~ ~ 0.2 0.2 0.2 0.3 20 normal`)

    player.teleportTo(
        nbt.an_warp_scroll.dim,
        nbt.an_warp_scroll.x+0.5,
        nbt.an_warp_scroll.y+1.5,
        nbt.an_warp_scroll.z+0.5,
        nbt.an_warp_scroll.yRot,
        nbt.an_warp_scroll.xRot)

    server.runCommandSilent(`/execute at ${player.username} run playsound minecraft:entity.illusioner.cast_spell player ${player.username}`)
    server.runCommandSilent(`/execute at ${player.username} run particle alembic:ender_magic ~ ~ ~ 0.2 0.2 0.2 0.3 20 normal`)

    if(!player.isCreative())
    {
        player.mainHandItem.shrink(1)
    }
    
})