ServerEvents.recipes(event=>{

    const saw = event.recipes.create.cutting

    saw("vintagedelight:cucumber_noodles","vintagedelight:cucumber").id("vintagedelight:cutting/cucumber_cutting")
})