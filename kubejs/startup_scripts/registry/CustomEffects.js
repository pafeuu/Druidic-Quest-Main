StartupEvents.registry("mob_effect", event=>{

    event.create("tank_blessing")
    .modifyAttribute("minecraft:generic.max_health",UUID,1,"addition")
    .color(Color.RED)

    event.create("nutrition_blessing")
    .modifyAttribute("puffish_attributes:natural_regeneration",UUID,0.1,"multiply_base")
    .color(Color.LIME_DYE)

})