ItemEvents.entityInteracted('kubejs:primitive_shears',event =>{

    const entityName = event.getTarget().entityType
    console.log("attack")
    //let entityName = event.getTarget().entityType
    //event.target.attack(2)
    if (entityName == "entity.minecraft.sheep")
    {
        console.log("this is a sheep")
        event.target.attack(2)

    }
})