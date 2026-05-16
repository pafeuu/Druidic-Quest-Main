//const $GlovesItem = Java.loadClass('com.aetherteam.aether.item.accessories.gloves.GlovesItem')
//const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties') // Already defined in another file

StartupEvents.registry('item', item => {


    function registerHands(id, tier, name) {

        let tierRarity
        switch (tier) {
            case 0:
            case 1:
                tierRarity = "common"
                break;
            case 2:
                tierRarity = "uncommon"
                break;
            case 3:
                tierRarity = "rare"
                break;
            case 4:
                tierRarity = "epic"
                break;
            case 5:
                tierRarity = "legendary"
        }

        if (typeof name === 'undefined') {
            item.create(id)
                .rarity(tierRarity)
                .unstackable()
                .tag(`dq:tier${tier}/accessories`)
                .tag("curios:hands")
                .attachCuriosCapability(CuriosJSCapabilityBuilder
                    .create()
                    .canEquip(() => true)
                )
        }
        else {
            item.create(id)
                .rarity(tierRarity)
                .displayName(name)
                .unstackable()
                .tag(`dq:tier${tier}/accessories`)
                .tag("curios:hands")
                .attachCuriosCapability(CuriosJSCapabilityBuilder
                    .create()
                    .canEquip(() => true)
                )
        }
    }



    registerHands("archers_glove", 1, "Archer's Glove")
    registerHands("mittens", 0)
    registerHands("sky_gloves", 4)
    registerHands("depth_gloves", 4)
    registerHands("arcane_gold_gloves", 3)
    registerHands("etherium_gloves", 5)
    registerHands("infused_iron_gloves", 2, "Botanist's Gloves")
    registerHands("lead_gloves", 1)
    registerHands("silver_gloves", 1)
    registerHands("steel_gloves", 3)

})