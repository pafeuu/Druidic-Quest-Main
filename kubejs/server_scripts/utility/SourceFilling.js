ItemEvents.rightClicked([
  "naturesaura_plus:aura_mana_holder",
  "botania:mana_ring",
  "botania:mana_ring_greater"
  ],event => {
    
  event.cancel()
  
})

BlockEvents.rightClicked([
  "ars_nouveau:source_jar",
  "druidic_quest_core:big_source_jar",
  "druidic_quest_core:huge_source_jar"]
  ,event => {
  
  
  const block = event.block
  const player = event.player
  const mainHand = player.getMainHandItem()
  let manaStorageCapacity = 500000
  
  //console.log(event.player.hand)
  if(!mainHand.hasTag('dq:source_storage')) return;
  
  
  if(mainHand.hasTag('dq:big_source_storage'))
  {
    manaStorageCapacity=2000000
    console.log("greater mana ring used")
  }
    
  if(!mainHand.hasNBT())
  {
    player.getMainHandItem().setNbt({mana:0})
    console.log("Freshly made tablet")
  }
  if(mainHand.serializeNBT().tag.mana===NaN)
  {
    player.getMainHandItem().setNbt({mana:0}) 
  }
    
  
  let storedSourceJar = block.entity.serializeNBT().source
  let storedSourceTablet = player.getMainHandItem().serializeNBT().tag.mana
  let combinedSource = parseInt(storedSourceJar)+parseInt(storedSourceTablet)
  
  player.swing();
  
  if(combinedSource>manaStorageCapacity)
  {  
    storedSourceTablet=manaStorageCapacity
    storedSourceJar=combinedSource-manaStorageCapacity
  }
  else
  {
    storedSourceJar=0
    storedSourceTablet=combinedSource
  }
   
  player.getMainHandItem().setNbt({mana:storedSourceTablet});
  block.setEntityData({source:storedSourceJar}) 
  
})
