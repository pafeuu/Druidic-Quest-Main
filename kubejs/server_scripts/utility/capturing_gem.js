//Server Script

ItemEvents.entityInteracted("kubejs:capturing_gem",event => {

    const entityId = event.getTarget().type;
    const entityNbt = event.getTarget().getNbt()
    const ItemNbt = event.player.getMainHandItem().getNbt()
    const targetPosition = event.getTarget().position()   
    

    if(ItemNbt.captured)
        return;

    if ( event.target.entityType.tags.anyMatch(
        (tag) => tag.location() == "dq:capturing_blacklist"
        ) 
    )
    {
        event.player.setStatusMessage("§c§lThis mob cannot be captured!");
        event.level.spawnParticles("minecraft:angry_villager", true,
            targetPosition.x(), targetPosition.y()+0.5, targetPosition.z(),
            0.3, 0.3, 0.3,
            10,
            0.01)
        return;
    }
    
    
    event.level.spawnParticles("minecraft:poof",true,
            targetPosition.x(), targetPosition.y()+0.5, targetPosition.z(),
            0.3, 0.3, 0.3,
            30,
            0.01)
    
        
    
    event.item.setNbt({
        captured: true,
        entity: entityId,
        data: entityNbt,
        custom_model_data: 1
    });// Stores entity details in the item's NBT
   
    event.getTarget().discard();// Removes Entity from the world

    event.player.addItemCooldown("kubejs:capturing_gem",10)// Adds cooldown
});



ItemEvents.rightClicked("kubejs:capturing_gem",event=>{
    const item = event.getItem(); 
    const nbt = item.getNbt();

    if (nbt && nbt.captured)//checks if the items has any entity inside
    {
        const entityId = nbt.entity;
        const mob = event.target.block.createEntity(entityId)

        const pos = event.target.block.pos; 
        
        mob.setNbt(nbt.data)// Gives all the data 
        mob.setPosition(pos.getX()+0.5, pos.getY()+1, pos.getZ()+0.5)// Sets the position of the mob in the center on the block
        mob.spawn()
        
        item.setNbt({ captured: false, custom_model_data: 0 })// Sets the nbt data of the item back to the original
    
    }

})