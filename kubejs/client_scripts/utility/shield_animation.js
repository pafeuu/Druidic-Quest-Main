PlayerEvents.tick(event => {
    let player = event.player
    let item = player.mainHandItem
    if (item.id != 'kubejs:primitive_shield') return
    let using = player.isUsingItem()
    let nbt = item.nbt || {}
    if (!nbt.CustomModelData) nbt.CustomModelData = 0
    if (using) {
        nbt.CustomModelData = 1
    } else {
        if (nbt.CustomModelData == 1 && !using) {
            nbt.CustomModelData = 0
        }
    }
})