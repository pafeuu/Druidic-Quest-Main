StartupEvents.registry('entity_type', event=>{

    event.create("explosive_arrow",'entityjs:arrow')
    .setBaseDamage(2)
    .onHitBlock(context => {
            const { entity, arrow } = context;
           
            let explosion = entity.block.createExplosion()
            explosion.strength(2)
            explosion.explosionMode('tnt')
            explosion.explode()
            
            entity.discard()
        })
    .onHitEntity(context => {
            const { entity, arrow } = context;
            let explosion = entity.block.createExplosion()
            explosion.strength(2)
            explosion.explosionMode('tnt')
            explosion.explode()
        })

    event.create("lightning_arrow", "entityjs:arrow")
    .setBaseDamage(2)
    .onHitBlock(ctx => {
        const { entity} = ctx;
        const pos = entity.blockPosition();
        console.log("Lightning Arrow has hit the block");
        console.log("position:"+pos.x+" "+pos.y+" "+pos.z)
        
        entity.getServer().runCommandSilent(`summon minecraft:lightning_bolt ${pos.x} ${pos.y} ${pos.z}`)
        entity.discard()
    })
    .onHitEntity(ctx => {
        const { entity,target} = ctx;
        const pos = entity.blockPosition();
        console.log("Lightning Arrow has hit the block");
        console.log("position:"+pos.x+" "+pos.y+" "+pos.z)
        
        entity.getServer().runCommandSilent(`summon minecraft:lightning_bolt ${pos.x} ${pos.y} ${pos.z}`)
           
    })

    event.create("power_arrow","entityjs:arrow")
    .setBaseDamage(4)
    .setKnockback(4)
})