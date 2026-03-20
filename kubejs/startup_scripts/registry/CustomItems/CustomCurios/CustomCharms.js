StartupEvents.registry('item', item => {
    
    /** @type {(id: string, tier: number, glowing?: boolean) => void} */
    function charm(id,tier,glowing)
    {
        if(typeof glowing === 'undefined') glowing=false
        
        item.create(id)
        .tag("curios:charm")
        .tag("dq:tier"+tier+"/accessories")
        .unstackable()
        .glow(glowing)
    }

    charm("warrior_charm",3)
    charm("tank_charm",3)
    charm("spellcaster_charm",4)
    charm("nutrition_charm",2)
    charm('the_ice_cube',0)
    charm('enchanted_watch',3,true)
})