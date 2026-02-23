StartupEvents.registry('item', item => {

    function armorRegistry(material,tier)
    {
        global.armorSlots.forEach(slot => {
            item.create(`${material}_${slot}`,slot).tier(material).tag(`dq:tier${tier}/armor`) 
        });
    }

    armorRegistry("cactus",0)
    armorRegistry("copper",1)
    armorRegistry("silver",1)
    armorRegistry("lead",1)
    armorRegistry("bronze",1)
    armorRegistry("uranium",2)

})