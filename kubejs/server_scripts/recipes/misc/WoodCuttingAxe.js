ItemEvents.rightClicked(event => {
    
    const player = event.player;
    const server = event.server;

    function StrippedWoodCutting(planks,log)
    {
		if(player.cooldowns.isOnCooldown(player.mainHandItem.id))
			return;
        if(player.mainHandItem.hasTag('forge:tools/axes') && player.offhandItem.id == log && !player.isCrouching())
            {
                player.give(Item.of(planks, 1));
            
                player.offHandItem.shrink(1)
                player.damageHeldItem()

                player.addItemCooldown(player.mainHandItem.id,6)
				server.runCommandSilent(`/execute at ${player.username} run playsound sawmill:ui.sawmill.take_result player ${player.username}`);
                player.addExhaustion(0.25)
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
	//StrippedWoodCutting("architects_palette:twisted_planks","architects_palette:stripped_twisted_log")
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
})