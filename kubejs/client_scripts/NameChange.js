ClientEvents.lang("en_us", event => {
	function tools(material,material2){
		event.renameItem('minecraft:'+material+'_axe', material2+' Axe')
		event.renameItem('minecraft:'+material+'_pickaxe', material2+' Pickaxe')
		event.renameItem('minecraft:'+material+'_hoe', material2+' Hoe')
		event.renameItem('minecraft:'+material+'_sword', material2+' Sword')
		event.renameItem('minecraft:'+material+'_shovel', material2+' Shovel')
	}
	tools('wooden','Flint')

	event.renameItem('irons_spellbooks:arcane_essence', 'Arcane Dust')
    event.renameItem('irons_spellbooks:cinder_essence', 'Cinder Dust')
    event.renameItem('tombstone:essence_of_undeath', 'Ectoplasm')
    event.renameItem('twilightforest:borer_essence', 'Borer Dust')
    event.renameItem('alexsmobs:poison_bottle', 'Poison Bottle')
    

    event.renameItem('enigmaticlegacy:infinimeal', 'Eternal Fertilizer')
    event.renameItem('enigmaticlegacy:evil_essence', 'Aspect of Evil')

    event.renameItem("immersiveengineering:fluid_pipe", "Iron Fluid Pipe")
    //event.renameItem("immmersiveengineering:dust_steel","Stainless Steel Dust")
    event.renameItem("immmersiveengineering:plate_steel","Stainless Steel Plate")
    event.renameItem("immmersiveengineering:nugget_steel","Stainless Steel Nugget")
    event.renameItem("immmersiveengineering:storage_steel","Stainless Steel Block")
    event.renameItem("immmersiveengineering:slab_storage_steel","Stainless Steel Slab")
    event.renameItem("immmersiveengineering:stick_steel","Stainless Steel Rod")
    event.renameItem("create:fluid_pipe", "Copper Fluid Pipe")
    event.renameItem("quark:copper_pipe", "Copper Item Pipe")
    event.renameItem("prettypipes:pipe", "Steel Item Pipe")
	event.renameItem("create:chute","Iron Chute")
})