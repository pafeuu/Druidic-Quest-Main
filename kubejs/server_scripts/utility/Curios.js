PlayerEvents.tick(event=>{
    
    const server = event.server
    const player = event.player
    
    if(player.age%20)
        return;
      
    if(player.isCuriosEquipped("kubejs:tank_charm"))
    {
       if(player.getArmorValue()>20)
        {
            let health = parseInt(((player.getArmorValue()-20)/2)-1)
            
            server.runCommandSilent(`/effect give ${player.username} kubejs:tank_blessing 5 ${health} true`)
            //console.log(`Player gets ${health} extra health from berserk charm`
        } 
    }

    if(player.isCuriosEquipped("kubejs:nutrition_charm"))
    {
        console.log("Player equipped the nutrition charm")
        if(player.getMaxHealth()>20)
        {
            console.log("Player has over 20 max hp")
            let regen = parseInt(((player.getMaxHealth()-20)/2)-1)
            console.log(regen)
            server.runCommandSilent(`/effect give ${player.username} kubejs:nutrition_blessing 5 ${regen} true`)
        }
    }
    
})