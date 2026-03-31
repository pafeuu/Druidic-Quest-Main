StartupEvents.registry('item', item => {
    
    item.create("star_monocle")
    .displayName("Monocle of the Stars")
    .unstackable()
    .tag("dq:tier1/accessories")
    .tag("curios:head")
    .attachCuriosCapability(CuriosJSCapabilityBuilder
                .create()
                .canEquip(() => true)
            )

})