ClientEvents.lang("en_us", event => {

   
	function tools(material,material2){
		event.renameItem('minecraft:'+material+'_axe', material2+' Axe')
		event.renameItem('minecraft:'+material+'_pickaxe', material2+' Pickaxe')
		event.renameItem('minecraft:'+material+'_hoe', material2+' Hoe')
		event.renameItem('minecraft:'+material+'_sword', material2+' Sword')
		event.renameItem('minecraft:'+material+'_shovel', material2+' Shovel')
	}
	tools('wooden','Flint')

	event.renameItem('irons_spellbooks:arcane_essence', 'Mystic Dust')
    event.renameItem('irons_spellbooks:cinder_essence', 'Cinder Dust')
    
    event.renameItem('twilightforest:borer_essence', 'Borer Dust')
    event.renameItem('alexsmobs:poison_bottle', 'Poison Bottle')
    

    event.renameItem('enigmaticlegacy:infinimeal', 'Eternal Fertilizer')
    event.renameItem('enigmaticlegacy:evil_essence', 'Aspect of Evil')

    event.renameItem("immersiveengineering:fluid_pipe", "Iron Fluid Pipe")
    event.renameItem("immmersiveengineering:dust_steel","Stainless Steel Dust")
    event.renameItem("immmersiveengineering:plate_steel","Stainless Steel Plate")
    event.renameItem("immmersiveengineering:nugget_steel","Stainless Steel Nugget")
    event.renameItem("immmersiveengineering:storage_steel","Stainless Steel Block")
    event.renameItem("immmersiveengineering:slab_storage_steel","Stainless Steel Slab")
    event.renameItem("immmersiveengineering:stick_steel","Stainless Steel Rod")
    event.renameItem("create:fluid_pipe", "Copper Fluid Pipe")
    event.renameItem("quark:copper_pipe", "Copper Item Pipe")
    event.renameItem("prettypipes:pipe", "Steel Item Pipe")
	event.renameItem("create:chute","Iron Chute")
    event.renameItem("effortlessbuilding:reach_upgrade1","Build Power Upgrade 1")
    event.renameItem("effortlessbuilding:reach_upgrade2","Build Power Upgrade 2")
    event.renameItem("effortlessbuilding:reach_upgrade3","Build Power Upgrade 3")

    event.renameBlock("wizards_reborn:fluid_pipe","Wisestone Fluid Pipe")
    event.renameBlock("wizards_reborn:fluid_extractor","Wisestone Fluid Extractor")

    event.renameBlock("thermal:fluid_duct","Bronze Fluid Pipe")
    event.renameBlock("thermal:fluid_duct_windowed","Windowed Bronze Fluid Pipe")
    event.renameItem("thermal:coal_coke","Coal Coke")
    event.renameBlock("thermal:coal_coke_block","Block of Coal Coke")

    event.renameItem("forbidden_arcanus:arcane_crystal","Twilight Crystal")
    event.renameItem("forbidden_arcanus:arcane_crystal_dust","Twilight Crystal Dust")
    event.renameItem("forbidden_arcanus:arcane_crystal_dust_speck","Twilight Crystal Dust Speck")
    event.renameItem("forbidden_arcanus:corrupted_arcane_crystal","Corrupted Twilight Crystal")
    event.renameBlock("forbidden_arcanus:arcane_crystal_block","Twilight Crystal Block")
    event.renameBlock("forbidden_arcanus:arcane_crystal_obelisk","Twilight Crystal Obelisk")
    event.renameBlock("forbidden_arcanus:corrupted_arcane_crystal_block","Corrupted Twilight Crystal Block")
    event.renameBlock("forbidden_arcanus:corrupted_arcane_crystal_obelisk","Corrupted Twilight Crystal Obelisk")

    event.renameItem("naturesaura:gold_powder","Gold Leaf Powder")

    event.renameBlock("immersive_weathering:permafrost","Gray Permafrost")
    event.renameBlock("immersive_weathering:grassy_permafrost","Grassy Gray Permafrost")

})