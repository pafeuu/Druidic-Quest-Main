//Server Script

ItemEvents.entityInteracted("kubejs:capturing_gem",event => {

    const entityId = event.getTarget().type;
    //const entityTag = entityId.hasTag()("forge:bosses");
    const entityNbt = event.getTarget().getNbt()

    /*const blacklist = Tag.of("#forge:bosses").contains(entityId)

    console.log(blacklist)
    if(blacklist)
    {
        console.log("This entity cannot be captured")
        return;
    }*/
        
    if(event.entity)
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