ItemEvents.event(event=>{
    
    event.addAdvanced("kubejs:stone_claymore", (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.gold('10% chance to apply Bleeding on hit'))
    }
  })

  event.addAdvanced("twilightforest:glass_sword", (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.gold('Applies Bleeding on hit'))
    }
  })

  event.addAdvanced("kubejs:copper_trident", (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.gold('20% chance to apply Thunderstorm on hit'))
    }
  })

  event.addAdvanced("kubejs:iron_scythe", (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.gold('15% chance to apply Bleeding on hit'))
    }
  })

  event.addAdvanced("kubejs:royal_guard_sword", (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.gold('Right click on a carved pumpkin to summon a Guard for a cost of 100 durability'))
    }
  })

  event.addAdvanced("tide:blazing_swordfish", (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.gold('Right click while sneaking to empower yourself with fire!'))
    }
  })
})