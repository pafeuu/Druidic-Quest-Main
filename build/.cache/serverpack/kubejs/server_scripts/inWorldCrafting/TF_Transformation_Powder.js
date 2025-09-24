ServerEvents.recipes(e=>{

    function OneWayTranformation(entity1,entity2)
    {
        e.custom({
        "type": "twilightforest:transformation_powder",
        "from": entity1,
        "reversible": false,
        "to": entity2
        })
    }
    function Transformation(entity1,entity2)
    {
        e.custom({
        "type": "twilightforest:transformation_powder",
        "from": entity1,
        "reversible": true,
        "to": entity2
        })
    }

    Transformation("alexsmobs:flutter","aether:aechor_plant")
    Transformation("salmon","deep_aether:aerglow_fish")
    Transformation("alexsmobs:tarantula_hawk","deep_aether:venomite")
    Transformation("alexsmobs:guster","aether:zephyr")
    Transformation("creeper","aether:sentry")
    Transformation("alexsmobs:bison","ancient_aether:fluffalo")
    Transformation("alexsmobs:emu","aether:cockatrice")
    
})