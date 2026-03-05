StartupEvents.registry('item', item => {
    function charm(id,tier)
    {
        item.create(id).tag("curios:charm").tag("dq:tier"+tier+"/accessories").unstackable()
    }

    charm("warrior_charm",3)
    charm("tank_charm",3)
    charm("spellcaster_charm",4)
    charm("nutrition_charm",2)
    charm('the_ice_cube',0)
    charm('enchanted_clock',3)
})