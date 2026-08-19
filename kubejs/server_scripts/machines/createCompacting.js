ServerEvents.recipes((event) => {
  const compacting = event.recipes.create.compacting;

  compacting("farmersdelight:pie_crust", "5x create:dough")
    .heated()
    .id("farmersdelight:integration/create/mixing/pie_crust_from_mixing");

  /*compacting("create:blaze_cake_base", "5x sob:cinder_dough")
    .heated()
    .id("create:compacting/blaze_cake");*/
});
