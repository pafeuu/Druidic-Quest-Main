ItemEvents.rightClicked(['kubejs:primitive_saw',"kubejs:basic_saw"], event => {
    
    const player = event.player;
    const server = event.server;

    function StrippedWoodCutting(planks,log)
    {
        if(player.offhandItem.id == log && !player.isCrouching())
            {
                player.give(Item.of(planks, 3));
            
                player.offHandItem.shrink(1)
                player.damageHeldItem()
                player.addExhaustion(0.15)

				server.runCommandSilent(`/execute at ${player.username} run playsound sawmill:ui.sawmill.take_result player ${player.username}`);
                player.addItemCooldown(player.mainHandItem.id,4)
                event.cancel()     
            }
    }

    function WoodCutting(planks,log)
    {
        if(player.offhandItem.id == log && !player.isCrouching())
            {
                player.give(Item.of(planks, 2));
            
                player.offHandItem.shrink(1)
                player.damageHeldItem()
                player.addExhaustion(0.15)

				server.runCommandSilent(`/execute at ${player.username} run playsound sawmill:ui.sawmill.take_result player ${player.username}`);
                player.addItemCooldown(player.mainHandItem.id,4)
                event.cancel()     
            }

    }
	StrippedWoodCutting("minecraft:pale_oak_planks","minecraft:stripped_pale_oak_log")
    StrippedWoodCutting("minecraft:oak_planks","minecraft:stripped_oak_log")
	StrippedWoodCutting("minecraft:spruce_planks","minecraft:stripped_spruce_log")
	StrippedWoodCutting("minecraft:birch_planks","minecraft:stripped_birch_log")
	StrippedWoodCutting("minecraft:jungle_planks","minecraft:stripped_jungle_log")
	StrippedWoodCutting("minecraft:acacia_planks","minecraft:stripped_acacia_log")
	StrippedWoodCutting("minecraft:dark_oak_planks","minecraft:stripped_dark_oak_log")
	StrippedWoodCutting("minecraft:crimson_planks","minecraft:stripped_crimson_stem")
	StrippedWoodCutting("minecraft:warped_planks","minecraft:stripped_warped_stem")
	StrippedWoodCutting("minecraft:mangrove_planks","minecraft:stripped_mangrove_log")
	StrippedWoodCutting("minecraft:cherry_planks","minecraft:stripped_cherry_log")
	StrippedWoodCutting("minecraft:bamboo_planks","minecraft:stripped_bamboo_block")
	StrippedWoodCutting("ancient_aether:highsproot_planks","ancient_aether:stripped_highsproot_log")
	StrippedWoodCutting("ancient_aether:sakura_planks","ancient_aether:stripped_sakura_log")
	StrippedWoodCutting("deep_aether:yagroot_planks","deep_aether:stripped_yagroot_log")
	StrippedWoodCutting("deep_aether:cruderoot_planks","deep_aether:stripped_cruderoot_log")
	StrippedWoodCutting("deep_aether:conberry_planks","deep_aether:stripped_conberry_log")
	StrippedWoodCutting("deep_aether:sunroot_planks","deep_aether:stripped_sunroot_log")
	StrippedWoodCutting("deep_aether:roseroot_planks","deep_aether:stripped_roseroot_log")
	StrippedWoodCutting("mynethersdelight:powdery_planks","mynethersdelight:stripped_powdery_block")
	StrippedWoodCutting("quark:ancient_planks","quark:stripped_ancient_log")
	StrippedWoodCutting("quark:azalea_planks","quark:stripped_azalea_log")
	StrippedWoodCutting("quark:blossom_planks","quark:stripped_blossom_log")

	StrippedWoodCutting("aether:skyroot_planks","aether:stripped_skyroot_log")
	StrippedWoodCutting("aether_redux:fieldsproot_planks","aether_redux:stripped_fieldsproot_log")
	StrippedWoodCutting("aether_redux:blightwillow_planks","aether_redux:stripped_blightwillow_log")
	StrippedWoodCutting("aether_redux:jellyshroom_planks","aether_redux:jellyshroom_stem")
	StrippedWoodCutting("aether_redux:jellyshroom_planks","aether_redux:jellyshroom_hyphae")
	StrippedWoodCutting("aether_redux:cloudcap_planks","aether_redux:stripped_cloudcap_stem")
	StrippedWoodCutting("aether_redux:crystal_planks","aether_redux:stripped_crystal_log")
	StrippedWoodCutting("aether_redux:glacia_planks","aether_redux:stripped_glacia_log")
	StrippedWoodCutting("twilightforest:twilight_oak_planks","twilightforest:stripped_twilight_oak_log")
	StrippedWoodCutting("twilightforest:canopy_planks","twilightforest:stripped_canopy_log")
	StrippedWoodCutting("twilightforest:mangrove_planks","twilightforest:stripped_mangrove_log")
	StrippedWoodCutting("twilightforest:dark_planks","twilightforest:stripped_dark_log")
	StrippedWoodCutting("twilightforest:transformation_planks","twilightforest:stripped_transformation_log")
	StrippedWoodCutting("twilightforest:mining_planks","twilightforest:stripped_mining_log")
	StrippedWoodCutting("twilightforest:sorting_planks","twilightforest:stripped_sorting_log")
	StrippedWoodCutting("twilightforest:time_planks","twilightforest:stripped_time_log")
	StrippedWoodCutting("thermal:rubberwood_planks","thermal:stripped_rubberwood_log")
	StrippedWoodCutting("ars_nouveau:archwood_planks","ars_nouveau:stripped_blue_archwood_log")
	StrippedWoodCutting("ars_nouveau:archwood_planks","ars_nouveau:stripped_green_archwood_log")
	StrippedWoodCutting("ars_nouveau:archwood_planks","ars_nouveau:stripped_red_archwood_log")
	StrippedWoodCutting("ars_nouveau:archwood_planks","ars_nouveau:stripped_purple_archwood_log")
	StrippedWoodCutting("wizards_reborn:innocent_wood_planks","wizards_reborn:stripped_innocent_wood_log")
	StrippedWoodCutting("wizards_reborn:arcane_wood_planks","wizards_reborn:stripped_arcane_wood_log")

	let naturesSpiritWoodTypes = [
		"redwood",
		"joshua",
		"sugi",
		"wisteria",
		"fir",
		"willow",
		"aspen",
		"maple",
		"cypress",
		"olive",
		"ghaf",
		"palo_verde",
		"coconut",
		"cedar",
		"larch",
		"mahogany",
		"saxaul"
	]
	naturesSpiritWoodTypes.forEach(woodType => {
		StrippedWoodCutting(`natures_spirit:${woodType}_planks`,`natures_spirit:stripped_${woodType}_log`)
		if(woodType=="joshua")
			return;
		StrippedWoodCutting(`natures_spirit:${woodType}_planks`,`natures_spirit:stripped_${woodType}_wood`)	
	});
	

	StrippedWoodCutting("minecraft:oak_planks","minecraft:stripped_oak_wood")
	StrippedWoodCutting("minecraft:spruce_planks","minecraft:stripped_spruce_wood")
	StrippedWoodCutting("minecraft:birch_planks","minecraft:stripped_birch_wood")
	StrippedWoodCutting("minecraft:jungle_planks","minecraft:stripped_jungle_wood")
	StrippedWoodCutting("minecraft:acacia_planks","minecraft:stripped_acacia_wood")
	StrippedWoodCutting("minecraft:dark_oak_planks","minecraft:stripped_dark_oak_wood")
	StrippedWoodCutting("minecraft:crimson_planks","minecraft:stripped_crimson_stem")
	StrippedWoodCutting("minecraft:warped_planks","minecraft:stripped_warped_stem")
	StrippedWoodCutting("mangrove_planks","stripped_mangrove_wood")
	StrippedWoodCutting("cherry_planks","stripped_cherry_wood")
	StrippedWoodCutting("ancient_aether:highsproot_planks","ancient_aether:stripped_highsproot_wood")
	StrippedWoodCutting("ancient_aether:sakura_planks","ancient_aether:stripped_sakura_wood")
	StrippedWoodCutting("deep_aether:yagroot_planks","deep_aether:stripped_yagroot_wood")
	StrippedWoodCutting("deep_aether:cruderoot_planks","deep_aether:stripped_cruderoot_wood")
	StrippedWoodCutting("deep_aether:conberry_planks","deep_aether:stripped_conberry_wood")
	StrippedWoodCutting("deep_aether:sunroot_planks","deep_aether:stripped_sunroot_wood")
	StrippedWoodCutting("deep_aether:roseroot_planks","deep_aether:stripped_roseroot_wood")
	StrippedWoodCutting("deeperdarker:echo_planks","deeperdarker:stripped_echo_wood")
	StrippedWoodCutting("deeperdarker:bloom_planks","deeperdarker:stripped_blooming_stem")
	
	StrippedWoodCutting("quark:ancient_planks","quark:stripped_ancient_wood")
	StrippedWoodCutting("quark:azalea_planks","quark:stripped_azalea_wood")
	StrippedWoodCutting("quark:blossom_planks","quark:stripped_blossom_wood")
	StrippedWoodCutting("aether:skyroot_planks","aether:stripped_skyroot_wood")
	StrippedWoodCutting("aether_redux:fieldsproot_planks","aether_redux:stripped_fieldsproot_wood")
	StrippedWoodCutting("aether_redux:blightwillow_planks","aether_redux:stripped_blightwillow_wood")
	StrippedWoodCutting("aether_redux:jellyshroom_planks","aether_redux:jellyshroom_stem")
	StrippedWoodCutting("aether_redux:jellyshroom_planks","aether_redux:jellyshroom_hyphae")
	StrippedWoodCutting("aether_redux:cloudcap_planks","aether_redux:stripped_cloudcap_stem")
	StrippedWoodCutting("aether_redux:crystal_planks","aether_redux:stripped_crystal_wood")
	StrippedWoodCutting("aether_redux:glacia_planks","aether_redux:stripped_glacia_wood")
	StrippedWoodCutting("twilightforest:twilight_oak_planks","twilightforest:stripped_twilight_oak_wood")
	StrippedWoodCutting("twilightforest:canopy_planks","twilightforest:stripped_canopy_wood")
	StrippedWoodCutting("twilightforest:mangrove_planks","twilightforest:stripped_mangrove_wood")
	StrippedWoodCutting("twilightforest:dark_planks","twilightforest:stripped_dark_wood")
	StrippedWoodCutting("twilightforest:transformation_planks","twilightforest:stripped_transformation_wood")
	StrippedWoodCutting("twilightforest:mining_planks","twilightforest:stripped_mining_wood")
	StrippedWoodCutting("twilightforest:sorting_planks","twilightforest:stripped_sorting_wood")
	StrippedWoodCutting("twilightforest:time_planks","twilightforest:stripped_time_wood")
	StrippedWoodCutting("thermal:rubberwood_planks","thermal:stripped_rubberwood_wood")
	StrippedWoodCutting("ars_nouveau:archwood_planks","ars_nouveau:stripped_blue_archwood_wood")
	StrippedWoodCutting("ars_nouveau:archwood_planks","ars_nouveau:stripped_green_archwood_wood")
	StrippedWoodCutting("ars_nouveau:archwood_planks","ars_nouveau:stripped_red_archwood_wood")
	StrippedWoodCutting("ars_nouveau:archwood_planks","ars_nouveau:stripped_purple_archwood_wood")
	StrippedWoodCutting("wizards_reborn:innocent_wood_planks","wizards_reborn:stripped_innocent_wood")
	StrippedWoodCutting("wizards_reborn:arcane_wood_planks","wizards_reborn:stripped_arcane_wood")
	StrippedWoodCutting("naturesaura:ancient_planks","naturesaura:stripped_ancient_bark")
	StrippedWoodCutting("naturesaura:ancient_planks","naturesaura:stripped_ancient_log")
	


	WoodCutting("minecraft:pale_oak_planks","minecraft:pale_oak_log")
    WoodCutting("minecraft:oak_planks","minecraft:oak_log")
	WoodCutting("minecraft:spruce_planks","minecraft:spruce_log")
	WoodCutting("minecraft:birch_planks","minecraft:birch_log")
	WoodCutting("minecraft:jungle_planks","minecraft:jungle_log")
	WoodCutting("minecraft:acacia_planks","minecraft:acacia_log")
	WoodCutting("minecraft:dark_oak_planks","minecraft:dark_oak_log")
	WoodCutting("minecraft:crimson_planks","minecraft:crimson_stem")
	WoodCutting("minecraft:warped_planks","minecraft:warped_stem")
	WoodCutting("mangrove_planks","mangrove_log")
	WoodCutting("cherry_planks","cherry_log")
	WoodCutting("bamboo_planks","bamboo_block")
	WoodCutting("ancient_aether:highsproot_planks","ancient_aether:highsproot_log")
	WoodCutting("ancient_aether:sakura_planks","ancient_aether:sakura_log")
	WoodCutting("deep_aether:yagroot_planks","deep_aether:yagroot_log")
	WoodCutting("deep_aether:cruderoot_planks","deep_aether:cruderoot_log")
	WoodCutting("deep_aether:conberry_planks","deep_aether:conberry_log")
	WoodCutting("deep_aether:sunroot_planks","deep_aether:sunroot_log")
	WoodCutting("deep_aether:roseroot_planks","deep_aether:roseroot_log")
	WoodCutting("deeperdarker:echo_planks","deeperdarker:echo_log")
	WoodCutting("deeperdarker:bloom_planks","deeperdarker:blooming_stem")
	WoodCutting("mynethersdelight:powdery_planks","mynethersdelight:powdery_block")
	WoodCutting("quark:ancient_planks","quark:ancient_log")
	WoodCutting("quark:azalea_planks","quark:azalea_log")
	WoodCutting("quark:blossom_planks","quark:blossom_log")
	
	WoodCutting("aether:skyroot_planks","aether:skyroot_log")
	WoodCutting("aether_redux:fieldsproot_planks","aether_redux:fieldsproot_log")
	WoodCutting("aether_redux:blightwillow_planks","aether_redux:blightwillow_log")
	WoodCutting("aether_redux:jellyshroom_planks","aether_redux:jellyshroom_stem")
	WoodCutting("aether_redux:jellyshroom_planks","aether_redux:jellyshroom_hyphae")
	WoodCutting("aether_redux:cloudcap_planks","aether_redux:cloudcap_stem")
	WoodCutting("aether_redux:crystal_planks","aether_redux:crystal_log")
	WoodCutting("aether_redux:glacia_planks","aether_redux:glacia_log")
	WoodCutting("twilightforest:twilight_oak_planks","twilightforest:twilight_oak_log")
	WoodCutting("twilightforest:canopy_planks","twilightforest:canopy_log")
	WoodCutting("twilightforest:mangrove_planks","twilightforest:mangrove_log")
	WoodCutting("twilightforest:dark_planks","twilightforest:dark_log")
	WoodCutting("twilightforest:transformation_planks","twilightforest:transformation_log")
	WoodCutting("twilightforest:mining_planks","twilightforest:mining_log")
	WoodCutting("twilightforest:sorting_planks","twilightforest:sorting_log")
	WoodCutting("twilightforest:time_planks","twilightforest:time_log")
	WoodCutting("thermal:rubberwood_planks","thermal:rubberwood_log")
	WoodCutting("ars_nouveau:archwood_planks","ars_nouveau:blue_archwood_log")
	WoodCutting("ars_nouveau:archwood_planks","ars_nouveau:green_archwood_log")
	WoodCutting("ars_nouveau:archwood_planks","ars_nouveau:red_archwood_log")
	WoodCutting("ars_nouveau:archwood_planks","ars_nouveau:purple_archwood_log")
	WoodCutting("wizards_reborn:innocent_wood_planks","wizards_reborn:innocent_wood_log")
	WoodCutting("wizards_reborn:arcane_wood_planks","wizards_reborn:arcane_wood_log")
	naturesSpiritWoodTypes.forEach(woodType => {
		StrippedWoodCutting(`natures_spirit:${woodType}_planks`,`natures_spirit:${woodType}_log`)
		if(woodType=="joshua")
			return;
		StrippedWoodCutting(`natures_spirit:${woodType}_planks`,`natures_spirit:${woodType}_wood`)	
	});

	WoodCutting("minecraft:oak_planks","minecraft:oak_wood")
	WoodCutting("minecraft:spruce_planks","minecraft:spruce_wood")
	WoodCutting("minecraft:birch_planks","minecraft:birch_wood")
	WoodCutting("minecraft:jungle_planks","minecraft:jungle_wood")
	WoodCutting("minecraft:acacia_planks","minecraft:acacia_wood")
	WoodCutting("minecraft:dark_oak_planks","minecraft:dark_oak_wood")
	WoodCutting("minecraft:crimson_planks","minecraft:crimson_stem")
	WoodCutting("minecraft:warped_planks","minecraft:warped_stem")
	WoodCutting("mangrove_planks","mangrove_wood")
	WoodCutting("cherry_planks","cherry_wood")
	WoodCutting("ancient_aether:highsproot_planks","ancient_aether:highsproot_wood")
	WoodCutting("ancient_aether:sakura_planks","ancient_aether:sakura_wood")
	WoodCutting("deep_aether:yagroot_planks","deep_aether:yagroot_wood")
	WoodCutting("deep_aether:cruderoot_planks","deep_aether:cruderoot_wood")
	WoodCutting("deep_aether:conberry_planks","deep_aether:conberry_wood")
	WoodCutting("deep_aether:sunroot_planks","deep_aether:sunroot_wood")
	WoodCutting("deep_aether:roseroot_planks","deep_aether:roseroot_wood")
	WoodCutting("deeperdarker:echo_planks","deeperdarker:echo_wood")
	WoodCutting("deeperdarker:bloom_planks","deeperdarker:blooming_stem")
	
	WoodCutting("quark:ancient_planks","quark:ancient_wood")
	WoodCutting("quark:azalea_planks","quark:azalea_wood")
	WoodCutting("quark:blossom_planks","quark:blossom_wood")
	WoodCutting("aether:skyroot_planks","aether:skyroot_wood")
	WoodCutting("aether_redux:fieldsproot_planks","aether_redux:fieldsproot_wood")
	WoodCutting("aether_redux:blightwillow_planks","aether_redux:blightwillow_wood")
	WoodCutting("aether_redux:jellyshroom_planks","aether_redux:jellyshroom_stem")
	WoodCutting("aether_redux:jellyshroom_planks","aether_redux:jellyshroom_hyphae")
	WoodCutting("aether_redux:cloudcap_planks","aether_redux:cloudcap_stem")
	WoodCutting("aether_redux:crystal_planks","aether_redux:crystal_wood")
	WoodCutting("aether_redux:glacia_planks","aether_redux:glacia_wood")
	WoodCutting("twilightforest:twilight_oak_planks","twilightforest:twilight_oak_wood")
	WoodCutting("twilightforest:canopy_planks","twilightforest:canopy_wood")
	WoodCutting("twilightforest:mangrove_planks","twilightforest:mangrove_wood")
	WoodCutting("twilightforest:dark_planks","twilightforest:dark_wood")
	WoodCutting("twilightforest:transformation_planks","twilightforest:transformation_wood")
	WoodCutting("twilightforest:mining_planks","twilightforest:mining_wood")
	WoodCutting("twilightforest:sorting_planks","twilightforest:sorting_wood")
	WoodCutting("twilightforest:time_planks","twilightforest:time_wood")
	WoodCutting("thermal:rubberwood_planks","thermal:rubberwood_wood")
	WoodCutting("ars_nouveau:archwood_planks","ars_nouveau:blue_archwood_wood")
	WoodCutting("ars_nouveau:archwood_planks","ars_nouveau:green_archwood_wood")
	WoodCutting("ars_nouveau:archwood_planks","ars_nouveau:red_archwood_wood")
	WoodCutting("ars_nouveau:archwood_planks","ars_nouveau:purple_archwood_wood")
	WoodCutting("wizards_reborn:innocent_wood_planks","wizards_reborn:innocent_wood")
	WoodCutting("wizards_reborn:arcane_wood_planks","wizards_reborn:arcane_wood")
	WoodCutting("naturesaura:ancient_planks","naturesaura:ancient_log")
	WoodCutting("naturesaura:ancient_planks","naturesaura:ancient_bark")
	WoodCutting("wizards_reborn:cork_bamboo_planks","wizards_reborn:cork_bamboo_block")
  
});