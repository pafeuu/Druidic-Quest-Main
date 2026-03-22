//const $GlovesItem = Java.loadClass('com.aetherteam.aether.item.accessories.gloves.GlovesItem')
//const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties') // Already defined in another file

StartupEvents.registry('item', item => {
    

    function registerHands(id,tier,name)
    {

        if(typeof name === 'undefined')
        {
            item.create(id)
            .unstackable()
            .tag(`dq:tier${tier}/accessories`)
            .tag("curios:hands")
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
            .tag("curios:hands")
            .attachCuriosCapability(CuriosJSCapabilityBuilder
                .create()
                .canEquip(() => true)
            )
        }
    }

    function registerAetherGloves(material,tier,attackDamage,firstResistance,firstAmount,secondResistance,secondAmount)
    {
        item.create(`${material}_gloves`)
            .unstackable()
            .tag(`dq:tier${tier}/accessories`)
            .tag("curios:hands")
            .attachCuriosCapability(CuriosJSCapabilityBuilder
                .create()
                .canEquip(() => true)
                .addAttribute(
                    "minecraft:generic.attack_damage",
                    UUID,
                    attackDamage,
                    'addition'
                )
                .addAttribute(
                    firstResistance,
                    UUID,
                    firstAmount,
                    'addition'
                )
                .addAttribute(
                    secondResistance,
                    UUID,
                    secondAmount,
                    'addition'
                )
            )
    }
    registerHands("archers_glove",1,"Archer's Glove")
    registerHands("mittens",0)

    registerAetherGloves("sky",
        4,
        1,
        "alembic:holy_damage.resistance",6
        ,"alembic:true_damage.resistance",6)

    registerAetherGloves("depth",
        4,
        1,
        "alembic:fire_damage.resistance",6
        ,"alembic:true_damage.resistance",6)

    registerAetherGloves("arcane_gold",
        3,
        0.5,
        "alembic:fire_damage.resistance",6
        ,"alembic:arcane_damage.resistance",6)

    registerAetherGloves("etherium",
        5,
        1,
        "alembic:arcane_damage.resistance",8,
        "alembic:fire_damage.resistance",8)

    registerAetherGloves("infused_iron",
        2,
        0.75,
        "minecraft:generic.armor",4,
        "alembic:alchemical_damage.resistance",2)

    registerAetherGloves("lead",
        1,
        0.25,
        "minecraft:generic.armor",3,
        "alembic:true_damage.resistance",1)

    registerAetherGloves("silver",
        1,
        0.25,
        "minecraft:generic.armor",1,
        "alembic:true_damage.resistance",3)

    registerAetherGloves("steel",
        3,
        1,
        "alembic:true_damage.resistance",4,
        "alembic:alchemical_damage.resistance",4)

    /*item.createCustom('kubejs:test_gloves',()=>
         new $GlovesItem['(net.minecraft.world.item.ArmorMaterial,double,net.minecraft.resources.ResourceLocation,java.util.function.Supplier,net.minecraft.world.item.Item$Properties)']
            ('iron',
            0.5,
            'kubejs:test_gloves',
            () => "minecraft:item.armor.equip_chain",
             new $ItemProperties()
            )
        )*/
})