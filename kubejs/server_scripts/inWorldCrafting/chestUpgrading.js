const chestVariants = [
    ["quark:nether_brick_chest","crimson"],
    ["quark:purpur_chest","cherry"],
    ["quark:prismarine_chest","warped"],
    ["quark:ancient_chest","quark:ancient"],
    ["quark:azalea_chest","quark:azalea"],
    ["quark:blossom_chest","quark:blossom"],
    ["ars_nouveau:archwood_chest","ars_nouveau:archwood"],
    ["everycomp:q/thermal/rubberwood_chest","thermal:rubberwood"],
    ['twilightforest:twilight_oak_chest',"twilightforest:twilight_oak"],
    ['twilightforest:canopy_chest',"twilightforest:canopy"],
    ['twilightforest:dark_chest',"twilightforest:dark"],
    ['twilightforest:time_chest',"twilightforest:time"], 
    ['twilightforest:transformation_chest',"twilightforest:transformation"], 
    ['twilightforest:mining_chest',"twilightforest:mining"],
    ['twilightforest:sorting_chest',"twilightforest:sorting"], 
    ['everycomp:q/mynethersdelight/powdery_chest',"mynethersdelight:powdery"], 
    ['everycomp:q/minecraft/pale_oak_chest',"minecraft:pale_oak"],
    ['everycomp:q/biomeswevegone/redwood_chest',"biomeswevegone:redwood"], 
    ['everycomp:q/biomeswevegone/sakura_chest',"biomeswevegone:sakura"], 
    ['everycomp:q/biomeswevegone/skyris_chest',"biomeswevegone:skyris"],
    ['everycomp:q/biomeswevegone/white_mangrove_chest',"biomeswevegone:white_mangrove"],
    ['everycomp:q/biomeswevegone/willow_chest',"biomeswevegone:willow"],
    ['everycomp:q/biomeswevegone/witch_hazel_chest',"biomeswevegone:witch_hazel"],
    ['everycomp:q/biomeswevegone/zelkova_chest',"biomeswevegone:zelkova"],
    ['everycomp:q/wizards_reborn/arcane_wood_chest',"wizards_reborn:arcane_wood"],
    ['everycomp:q/wizards_reborn/innocent_wood_chest',"wizards_reborn:innocent_wood"],
    ['everycomp:q/biomeswevegone/rainbow_eucalyptus_chest',"biomeswevegone:rainbow_eucalyptus"],
    ['everycomp:q/biomeswevegone/pine_chest',"biomeswevegone:pine"],
    ['everycomp:q/biomeswevegone/palm_chest',"biomeswevegone:palm"],
    ['everycomp:q/biomeswevegone/maple_chest',"biomeswevegone:maple"],
    ['everycomp:q/biomeswevegone/mahogany_chest',"biomeswevegone:mahogany"],
    ['everycomp:q/biomeswevegone/jacaranda_chest',"biomeswevegone:jacaranda"],
    ['everycomp:q/biomeswevegone/ironwood_chest',"biomeswevegone:ironwood"],
    ['everycomp:q/biomeswevegone/holly_chest',"biomeswevegone:holly"],
    ['everycomp:q/biomeswevegone/green_enchanted_chest',"biomeswevegone:green"],
    ['everycomp:q/ancient_aether/sakura_chest',"ancient_aether:sakura"],
    ['everycomp:q/ancient_aether/highsproot_chest',"ancient_aether:highsproot"],
    ['everycomp:q/deep_aether/sunroot_chest',"deep_aether:sunroot"],
    ['everycomp:q/deep_aether/conberry_chest',"deep_aether:conberry"],
    ['everycomp:q/deep_aether/cruderoot_chest',"deep_aether:cruderoot"],
    ['everycomp:q/deep_aether/yagroot_chest',"deep_aether:yagroot"],
    ['everycomp:q/deep_aether/roseroot_chest',"deep_aether:roseroot"],
    ['everycomp:q/biomeswevegone/florus_chest',"biomeswevegone:florus"],
    ['everycomp:q/naturesaura/ancient_chest',"crimson"],
    ['everycomp:q/aether/skyroot_chest',"aether:skyroot"],
    ['everycomp:q/biomeswevegone/fir_chest',"biomeswevegone:fir"],
    ['everycomp:q/biomeswevegone/ebony_chest',"biomeswevegone:ebony"],
    ['everycomp:q/biomeswevegone/cypress_chest',"biomeswevegone:cypress"],
    ['everycomp:q/biomeswevegone/cika_chest',"biomeswevegone:cika"],
    ['everycomp:q/biomeswevegone/blue_enchanted_chest',"biomeswevegone:blue_enchanted"],
    ['everycomp:q/biomeswevegone/baobab_chest',"biomeswevegone:baobab"],
    ['everycomp:q/biomeswevegone/aspen_chest',"biomeswevegone:aspen"],
    ['everycomp:q/twilightforest/mangrove_chest',"twilightforest:mangrove"]
]

chestVariants.forEach(([variant,woodType])=>{
    BlockEvents.rightClicked(variant,event=>{

        const {player,block} = event

        if(player.mainHandItem.id !== "sophisticatedstorage:basic_tier_upgrade")
            return;//Check if the player is holding an upgrade

        const pos = block.pos // Position of the block
        const oldNbt = block.entity.serializeNBT() // Get the Nbt of the block
        const savedInventory = oldNbt.Items

        let posX = pos.x;
        let posY = pos.y;
        let posZ = pos.z;
        
        console.log(player.mainHandItem.getCount())
        if(block.properties.get("type")!="single")
        {

            if (player.mainHandItem.getCount()<2)
            {
                player.setStatusMessage("Upgrading requires 2 Basic Tier Upgrades")
                return;
            }
            
            let offsetX = 0;
            let offsetZ = 0
            if (block.properties.get("type")=="right")
                {
                    if(block.properties.get("facing")=="east")
                        offsetZ--
                    if(block.properties.get("facing")=="south")
                        offsetX++
                    if(block.properties.get("facing")=="west")
                        offsetZ++
                    if(block.properties.get("facing")=="north")
                        offsetX--
                }
            if (block.properties.get("type")=="left")
                {
                    if(block.properties.get("facing")=="east")
                        offsetZ++
                    if(block.properties.get("facing")=="south")
                        offsetX--
                    if(block.properties.get("facing")=="west")
                        offsetZ--
                    if(block.properties.get("facing")=="north")
                        offsetX++
                }
            
            let oldNbt2 = block.offset(offsetX,0,offsetZ).entity.serializeNBT()
            let secondChestInventory = oldNbt2.Items
            
            block.offset(offsetX,0,offsetZ).setEntityData({Items:[],x:posX,y:posY,z:posZ})
            block.setEntityData({Items:[],x:posX,y:posY,z:posZ})//Clear Inventory to prevent duping
            
            block.offset(offsetX,0,offsetZ).set("sophisticatedstorage:chest",block.offset(offsetX,0,offsetZ).properties)
            block.set("sophisticatedstorage:chest",block.properties)// Replace old chest with a new one

            secondChestInventory.forEach(entry => {
                entry.Slot = entry.Slot + 27;
            });
            
            if(block.properties.get("type")=="left")//this is necessary because sophisticated double chest need to keep their inventory in the "right" chest
            {
                block.setEntityData({
                    "id": "sophisticatedstorage:chest",
                    "woodType": woodType
                })//You dont need to set the inventory here since sophisticated double chests handle inventory in only one block
                
                block.offset(offsetX,0,offsetZ).setEntityData({
                    "id": "sophisticatedstorage:chest",
                    "storageWrapper": {
                        "contents": {
                            "inventory": {
                                "Size": 54,
                                "Items": savedInventory.concat(secondChestInventory)
                            }
                        },
                        "numberOfInventorySlots": 54
                    },
                    "woodType": woodType
                })
            }

            if(block.properties.get("type")=="right")
            {
                block.setEntityData({
                    "id": "sophisticatedstorage:chest",
                    "storageWrapper": {
                        "contents": {
                            "inventory": {
                                "Size": 54,
                                "Items": savedInventory.concat(secondChestInventory)
                            }
                        },
                        "numberOfInventorySlots": 54
                    },
                    "woodType": woodType
                })
                
                block.offset(offsetX,0,offsetZ).setEntityData({
                    "id": "sophisticatedstorage:chest",
                    "woodType": woodType
                })//You dont need to set the inventory here since sophisticated double chests handle inventory in only one block
            }
            
            
            

            player.mainHandItem.shrink(2)
        }

        if(block.properties.get("type")=="single")
        {
            block.setEntityData({Items:[],x:posX,y:posY,z:posZ})//Clear Inventory to prevent duping
            block.set("sophisticatedstorage:chest",block.properties)// Replace old chest with a new one
            block.setEntityData({
                "id": "sophisticatedstorage:chest",
                "storageWrapper": {
                    "contents": {
                    "inventory": {
                        "Size": 27,
                        "Items": savedInventory
                    }
                    },
                },
                "woodType": woodType,
                "packed": 0
            })//Set the inventory and color
            player.mainHandItem.count--
        }
        
    })
    
})
