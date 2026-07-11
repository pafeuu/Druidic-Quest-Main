const $CountedItem = Java.loadClass('cofh.core.common.item.CountedItem')
StartupEvents.registry('item', item => {

    function plate(material,tier)
    {
        item.createCustom(`${material}_plate`,()=> $CountedItem(new $ItemProperties))
        .tag("forge:plates")
        .tag(`forge:plates/${material}`)
        .tag(`dq:tier${tier}/component`)
    }

    plate("diamond",1)
    plate("brass",1)
    plate("zinc",1)
    plate("ironwood",1)
    plate("knightmetal",1)

    plate("source_alloy",2)
    plate("arcanum_alloy",2)
    plate("infused_iron",2)
    plate("tainted_gold",2)
    plate("uranium",2)
    plate("fiery",2)
    plate("storm",3)
    plate("gravitite",3)
    plate("andesite_alloy",3)
    plate("arcane_gold",3)
    plate("sky",4)
    plate("aluminum",4)
    plate("depth",5)
    

    item.create('tainted_gold_sheet').tag('forge:plates').tag('forge:plates/tainted_gold').tag("dq:tier2/component")
    item.create('storm_sheet').tag('forge:plates').tag('forge:plates/storm').tag("dq:tier3/component")
    item.create('gravitite_sheet').tag('forge:plates').tag('forge:plates/gravitite').tag("dq:tier3/component")
    item.create('sky_sheet').tag('forge:plates').tag('forge:plates/sky').tag("dq:tier4/component")
    item.create('depth_sheet').tag('forge:plates').tag('forge:plates/depth')
})