ServerEvents.recipes(event=>{
    function pylonTag(output,input,exp){
        event.custom({  
        "type": "lychee:block_interacting",
        "hide_in_viewer": true,
        "contextual": [
            {
                "type": "execute",
                "secret": true,
                "command": "execute if entity @p[level=1..]"
            }
        ],
        "post": [
            {
                "type": "drop_item",
                "item": output,
                "count": 1
            },
            {
                "type": "execute",
                "command": "experience add @p -"+exp+" points",
                "hide": true
            },
            {
                "type": "execute",
                "command": "playsound wizards_reborn:totem_of_disenchant_start neutral @p",
                "hide": true
            },
            {
                "type": "execute",
                "command": "particle wizards_reborn:karma ~ ~ ~ 0.1 0.1 0.1 0 1 force",
                "hide": true
            }
        ],
        "item_in": {
            tag: input
        },
        "block_in": "kubejs:arcanum_pylon"
        })

        // Second Recipe for better display in EMI
        event.custom({  
        "type": "lychee:block_interacting",
        "ghost": true,
        "post": [
            {
                "type": "drop_item",
                "item": output,
                "count": 1
            },
            {
                "type": "drop_item",
                "item": "experience_bottle",
                "nbt": {
                    "display":
                        {"Name":"\"-"+exp+" experience points from the player\""}
                },
                "count": 1
            }
        ],
        "item_in": {
            tag: input
        },
        "block_in": "kubejs:arcanum_pylon"
        })
    }

    function pylonItem(output,input,exp){
        event.custom({  
        "type": "lychee:block_interacting",
        "hide_in_viewer": true,
        "contextual": [
            {
                "type": "execute",
                "secret": true,
                "command": "execute if entity @p[level=1..]"
            }
        ],
        "post": [
            {
                "type": "drop_item",
                "item": output,
                "count": 1
            },
            {
                "type": "execute",
                "command": "experience add @p -"+exp+" points",
                "hide": true
            },
            {
                "type": "execute",
                "command": "playsound wizards_reborn:totem_of_disenchant_start neutral @p",
                "hide": true
            },
            {
                "type": "execute",
                "command": "particle wizards_reborn:karma ~ ~ ~ 0.1 0.1 0.1 0 1 force",
                "hide": true
            }
        ],
        "item_in": {
           item: input
        },
        "block_in": "kubejs:arcanum_pylon"
        })

        // Second Recipe for better display in EMI
        event.custom({  
        "type": "lychee:block_interacting",
        "ghost": true,
        "post": [
            {
                "type": "drop_item",
                "item": output,
                "count": 1
            },
            {
                "type": "drop_item",
                "item": "experience_bottle",
                "nbt": {
                    "display":
                        {"Name":"\"-"+exp+" experience points from the player\""}
                },
                "count": 1
            }
        ],
        "item_in": {
            "item": input
        },
        "block_in": "kubejs:arcanum_pylon"
        })
    }

    function TwoHandPylon(output,input1,input2,exp)
    {
        event.custom({  
        "type": "lychee:block_interacting",
        "hide_in_viewer": true,
        "contextual": [
            {
                "type": "execute",
                "secret": true,
                "command": "execute if entity @p[level=4..]"
            }
        ],
        "post": [
            {
                "type": "drop_item",
                "item": output,
                "count": 1
            },
            {
                "type": "execute",
                "command": "experience add @p -"+exp+" points",
                "hide": true
            },
            {
                "type": "execute",
                "command": "playsound wizards_reborn:totem_of_disenchant_start neutral @p",
                "hide": true
            },
            {
                "type": "execute",
                "command": "particle wizards_reborn:karma ~ ~ ~ 0.1 0.1 0.1 0 1 force",
                "hide": true
            }
        ],
        "item_in": [
            {"item": input1},
            {"item": input2}
        ],
        "block_in": "kubejs:arcanum_pylon"
        })

        // Second Recipe for better display in EMI
        event.custom({  
        "type": "lychee:block_interacting",
        "ghost": true,
        "post": [
            {
                "type": "drop_item",
                "item": output,
                "count": 1
            },
            {
                "type": "drop_item",
                "item": "experience_bottle",
                "nbt": {
                    "display":
                        {"Name":"\"-"+exp+" experience points from the player\""}
                },
                "count": 1
            }
        ],
        "item_in": [
            {"item": input1},
            {"item": input2}
        ],
        "block_in": "kubejs:arcanum_pylon"
        })
    }

    pylonTag("wizards_reborn:arcane_wood_log","minecraft:logs",10)
    pylonTag("deep_aether:squash_seeds","forge:seeds/pumpkin",10)
    pylonTag("aether:music_disc_aether_tune","aether:accepted_music_discs",10)
    pylonTag("aether:healing_stone","aether:holystone",10)
    pylonItem("ancient_aether:violet_aercloud","aether:blue_aercloud",20)
    pylonItem("deep_aether:enchanted_antidote","deep_aether:antidote",10)
    pylonItem("aether:golden_aercloud","aether:cold_aercloud",10)
    pylonItem("aether:enchanted_dart","aether:golden_dart",10)
    pylonItem("aether:enchanted_berry","aether:blue_berry",10)
    pylonItem("aether:music_disc_chinchilla","minecraft:music_disc_strad",10)
    pylonItem("deep_aether:music_disc_nabooru","minecraft:music_disc_pigstep",10)
    pylonItem("deep_aether:music_disc_a_morning_wish","minecraft:music_disc_otherside",10)
    pylonItem("deep_aether:chromatic_aercloud","deep_aether:sterling_aercloud",10)
    pylonItem("aether:enchanted_dart_shooter","aether:golden_dart_shooter",80)
    pylonItem("aether:skyroot_remedy_bucket","deep_aether:poison_bucket",40)
    TwoHandPylon("kubejs:corrupted_soul","quark:soul_bead","kubejs:sapphire",100)
    TwoHandPylon("kubejs:enchanted_soul","kubejs:corrupted_soul","kubejs:sapphire",200)
    
})