StartupEvents.registry('item', item => {

    function registerBelt(id,tier,name)
    {
        if(typeof name === 'undefined')
        {
            item.create(id)
            .unstackable()
            .tag(`dq:tier${tier}/accessories`)
            .tag("curios:belt")
            .attachCuriosCapability(CuriosJSCapabilityBuilder
                .create()
                .canEquip(() => true)
            )
        }
        else
        {
            item.create(id)
            .displayName(name)
            .unstackable()
            .tag(`dq:tier${tier}/accessories`)
            .tag("curios:belt")
            .attachCuriosCapability(CuriosJSCapabilityBuilder
                .create()
                .canEquip(() => true)
            )
        }
        
    }
    
    registerBelt("travelers_belt",0,"Traveler's Belt")
    registerBelt("builders_belt",1,"Builder's Belt")
    registerBelt("evasion_belt",2,"Belt of Evasion")
    
})