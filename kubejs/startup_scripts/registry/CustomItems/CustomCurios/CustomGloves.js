const $GlovesItem = Java.loadClass('com.aetherteam.aether.item.accessories.gloves.GlovesItem')
//const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties') // Already defined in another file

StartupEvents.registry('item', item => {
    item.create("archers_glove").displayName("Archer's Glove").unstackable().tag("curios:hands")
    item.create('mittens').displayName('Mittens').tag("curios:hands").unstackable()

    item.createCustom('kubejs:test_gloves',()=>
         new $GlovesItem['(net.minecraft.world.item.ArmorMaterial,double,net.minecraft.resources.ResourceLocation,java.util.function.Supplier,net.minecraft.world.item.Item$Properties)']
            ('iron',
            0.5,
            'kubejs:test_gloves',
            () => "minecraft:item.armor.equip_chain",
             new $ItemProperties()
            )
        )
})