ServerEvents.recipes(event=>{

    event.custom({
        "type": "apotheosis:spawner_modifier",
        "mainhand": {
            "item": "quark:diamond_heart"
        },
        "stat_changes": [{
            "id": "req_player_range",
            "value": 8,
            "min": -1,
            "max": 64
        }]
    })

    event.custom({
        "type": "apotheosis:spawner_modifier",
        "mainhand": {
            "item": "kubejs:dark_essence"
        },
        "stat_changes": [{
            "id": "ignore_light",
            "value": true
        }]
    })

    event.custom({
        "type": "apotheosis:spawner_modifier",
        "mainhand": {
            "item": "immersiveengineering:earmuffs"
        },
        "stat_changes": [{
            "id": "silent",
            "value": true
	    }]
    })

    event.custom({
        "type": "apotheosis:spawner_modifier",
        "mainhand": {
            "item": "kubejs:life_essence"
        },
        "stat_changes": [{
            "id": "ignore_players",
            "value": true
	    }]
    })

    event.custom({
        "type": "apotheosis:spawner_modifier",
        "mainhand": {
            "item": "minecraft:clock"
        },
        "stat_changes": [{
            "id": "max_delay",
            "value": -50,
            "min": 200,
            "max": -1
	    }]
    })

    event.custom({
        "type": "apotheosis:spawner_modifier",
        "mainhand": {
            "item": "vintageimprovements:redstone_module"
        },
        "stat_changes": [{
            "id": "redstone_control",
		    "value": true
	    }]
    })
})