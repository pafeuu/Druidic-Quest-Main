const chestVariants = [
    ["quark:ancient_chest",0xf9fffe,0x383127],
    ["quark:azalea_chest",13554795,0x383127],
    ["quark:blossom_chest",7025444,0x383127],
    ["quark:nether_brick_chest",5582388,15315221],
    ["quark:purpur_chest",13084871,9463184],
    ["quark:prismarine_chest",8570300,4292970],
    ["ars_nouveau:archwood_chest",8485252,16438858],
    ["everycomp:q/thermal/rubberwood_chest",5989689,0x383127],//After this point the colors are placeholders
    ['twilightforest:twilight_oak_chest',0xf9fffe,0x383127],
    ['twilightforest:canopy_chest',0xf9fffe,0x383127],
    ['twilightforest:dark_chest',0xf9fffe,0x383127],
    ['twilightforest:time_chest',0xf9fffe,0x383127], 
    ['twilightforest:transformation_chest',0xf9fffe,0x383127], 
    ['twilightforest:mining_chest',0xf9fffe,0x383127],
    ['twilightforest:sorting_chest',0xf9fffe,0x383127], 
    ['everycomp:q/mynethersdelight/powdery_chest',0xf9fffe,0x383127], 
    ['everycomp:q/minecraft/pale_oak_chest',0xf9fffe,0x383127], 
    ['everycomp:q/biomeswevegone/redwood_chest',0xf9fffe,0x383127], 
    ['everycomp:q/biomeswevegone/sakura_chest',0xf9fffe,0x383127], 
    ['everycomp:q/biomeswevegone/skyris_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/white_mangrove_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/willow_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/witch_hazel_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/zelkova_chest',0xf9fffe,0x383127],
    ['everycomp:q/wizards_reborn/arcane_wood_chest',0xf9fffe,0x383127],
    ['everycomp:q/wizards_reborn/innocent_wood_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/rainbow_eucalyptus_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/pine_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/palm_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/maple_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/mahogany_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/jacaranda_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/ironwood_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/holly_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/green_enchanted_chest',0xf9fffe,0x383127],
    ['everycomp:q/ancient_aether/sakura_chest',0xf9fffe,0x383127],
    ['everycomp:q/ancient_aether/highsproot_chest',0xf9fffe,0x383127],
    ['everycomp:q/deep_aether/sunroot_chest',0xf9fffe,0x383127],
    ['everycomp:q/deep_aether/conberry_chest',0xf9fffe,0x383127],
    ['everycomp:q/deep_aether/cruderoot_chest',0xf9fffe,0x383127],
    ['everycomp:q/deep_aether/yagroot_chest',0xf9fffe,0x383127],
    ['everycomp:q/deep_aether/roseroot_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/florus_chest',0xf9fffe,0x383127],
    ['everycomp:q/naturesaura/ancient_chest',0xf9fffe,0x383127],
    ['everycomp:q/aether/skyroot_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/fir_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/ebony_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/cypress_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/cika_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/blue_enchanted_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/baobab_chest',0xf9fffe,0x383127],
    ['everycomp:q/biomeswevegone/aspen_chest',0xf9fffe,0x383127],
    ['everycomp:q/twilightforest/mangrove_chest',0xf9fffe,0x383127]
]

chestVariants.forEach(([variant,color,accentColor])=>{
    BlockEvents.rightClicked(variant,event=>{

        const {player,block} = event

        if(player.mainHandItem.id !== "sophisticatedstorage:basic_tier_upgrade")
            return;//Check if the player is holding an upgrade

        const pos = block.pos // Position of the block
        const oldNbt = block.entity.serializeNBT() // Get the Nbt of the block
        const savedInventory = oldNbt.Items

        
        block.setEntityData({Items:[],x:pos.x,y:pos.y,z:pos.z})//Clear Inventory to prevent duping
        block.set("sophisticatedstorage:chest",block.properties)// Replace old chest with a new one
        block.setEntityData({
            "x": pos.x,
            "y": pos.y,
            "z": pos.z,
            "id": "sophisticatedstorage:chest",
            "storageWrapper": {
                "contents": {
                "inventory": {
                    "Size": 36,
                    "Items": savedInventory
                }
                },
            "mainColor": color,
            "accentColor": accentColor
            },
            "packed": 0
        })//Set the inventory and color
        player.mainHandItem.count--
    })
    
})
