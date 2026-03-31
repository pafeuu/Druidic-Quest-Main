ServerEvents.recipes(event=>{

    const ArmorSlot = ["helmet","chestplate","leggings","boots"]

	const NatureAuraArmorSlot = ["helmet","chest","pants","shoes"]

    function SmithingArmor(OutputArmor,InputArmor,SmithingTemplate,UpgradeMaterial)
	{
		ArmorSlot.forEach(id=>{
        	event.smithing(OutputArmor+"_"+id,
				SmithingTemplate,
				Item.of(InputArmor+"_"+id),
				UpgradeMaterial)

			event.remove({output:OutputArmor+"_"+id})
		})
	}

	 function NatureUpgrade(input,output,smith,material)
	{
		// Upgrades the armor and tools
		event.smithing("naturesaura:"+output+"_helmet","kubejs:"+smith+"_upgrade_smithing_template",input+"_helmet","naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_chest" ,"kubejs:"+smith+"_upgrade_smithing_template",input+"_chestplate","naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_pants" ,"kubejs:"+smith+"_upgrade_smithing_template",input+"_leggings","naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_shoes" ,"kubejs:"+smith+"_upgrade_smithing_template",input+"_boots","naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_pickaxe" ,"kubejs:"+smith+"_upgrade_smithing_template",input+"_pickaxe","naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_axe" ,"kubejs:"+smith+"_upgrade_smithing_template",input+"_axe","naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_sword" ,"kubejs:"+smith+"_upgrade_smithing_template",input+"_sword","naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_hoe" ,"kubejs:"+smith+"_upgrade_smithing_template",input+"_hoe","naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_shovel" ,"kubejs:"+smith+"_upgrade_smithing_template",input+"_shovel","naturesaura:"+material)
		
		// Removes the old recipes
		NatureAuraArmorSlot.forEach(id => {
			event.remove({output:"naturesaura:"+output+"_"+id})
		});
		
	}

	 function NatureUpgradeNoTools(input,output,smith,material)
	{
		// Upgrades the armor
		event.smithing("naturesaura:"+output+"_helmet","kubejs:"+smith+"_upgrade_smithing_template",input+"_helmet","naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_chest" ,"kubejs:"+smith+"_upgrade_smithing_template",input+"_chestplate","naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_pants" ,"kubejs:"+smith+"_upgrade_smithing_template",input+"_leggings","naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_shoes" ,"kubejs:"+smith+"_upgrade_smithing_template",input+"_boots","naturesaura:"+material)
		
		// Removes the old recipes
		NatureAuraArmorSlot.forEach(id => {
			event.remove({output:"naturesaura:"+output+"_"+id})
		});
		
	}

    NatureUpgrade("netherite","sky","skyseeker","sky_ingot")
	NatureUpgrade("iron","infused_iron","botanist","infused_iron")

	NatureUpgradeNoTools("aether:obsidian","depth","depth","depth_ingot")


	SmithingArmor("minecraft:golden",
		"kubejs:silver",
		"kubejs:gold_upgrade_smithing_template",
		"kubejs:gold_upgrade_parts")

	SmithingArmor("irons_spellbooks:pumpkin",
		"irons_spellbooks:wandering_magician",
		"kubejs:scarecrow_upgrade_smithing_template",
		"irons_spellbooks:magic_cloth")

	SmithingArmor("immersiveengineering:armor_faraday",
		"minecraft:leather",
		"kubejs:engineer_upgrade_smithing_template",
		"immersiveengineering:hemp_fabric")

	SmithingArmor("irons_spellbooks:wandering_magician",
		"minecraft:leather",
		"kubejs:wandering_magician_upgrade_smithing_template",
		"kubejs:arcane_leather")

	SmithingArmor("kubejs:bronze",
		"kubejs:copper",
		"kubejs:bronze_upgrade_smithing_template",
		"kubejs:bronze_upgrade_parts")

	SmithingArmor("twilightforest:fiery",
		"minecraft:iron",
		"kubejs:fiery_upgrade_smithing_template",
		"vintageimprovements:fiery_sheet")

	SmithingArmor("twilightforest:knightmetal",
		"kubejs:lead",
		"kubejs:knightmetal_upgrade_smithing_template",
		"vintageimprovements:knightmetal_sheet")

	SmithingArmor("twilightforest:steeleaf",
		"twilightforest:ironwood",
		"kubejs:steeleaf_upgrade_smithing_template",
		"kubejs:steeleaf_upgrade_parts")

	SmithingArmor("aether:zanite",
		"kubejs:lead",
		"kubejs:zanite_upgrade_smithing_template",
		"kubejs:zanite_upgrade_parts")

	SmithingArmor("deep_aether:skyjade",
		"kubejs:silver",
		"kubejs:skyjade_upgrade_smithing_template",
		"kubejs:skyjade_upgrade_parts")

	SmithingArmor("aether:obsidian",
		"twilightforest:knightmetal",
		"kubejs:obsidian_upgrade_smithing_template",
		"kubejs:obsidian_ingot")
    
	SmithingArmor("deep_aether:stormforged",
		"aether:phoenix",
		"deep_aether:stormforged_smithing_template",
		"deep_aether:squall_plate"
	)

    SmithingArmor("irons_spellbooks:netherite_mage",
        "minecraft:netherite",
        "kubejs:netherite_battlemage_upgrade_smithing_template",
        "kubejs:battlemage_cloth"
    )

    SmithingArmor("wizards_reborn:arcane_fortress",
        "wizards_reborn:arcane_gold",
        "kubejs:arcane_fortress_upgrade_smithing_template",
        "kubejs:arcane_plating"
    )

	SmithingArmor("aether:phoenix",
		"twilightforest:fiery",
		"kubejs:phoenix_upgrade_smithing_template",
		"kubejs:phoenix_ingot"
	)

	SmithingArmor("wizards_reborn:arcane_gold",
		"minecraft:golden",
		"kubejs:arcane_gold_upgrade_smithing_template",
		"kubejs:arcane_gold_upgrade_parts"
	)


	SmithingArmor("enigmaticlegacy:etherium",
		"deep_aether:stormforged",
		"kubejs:etherium_upgrade_smithing_template",
		"enigmaticlegacy:etherium_ingot"
	)

	

	event.smithing("ancient_aether:valkyrum_helmet","kubejs:valkyrum_upgrade_smithing_template","naturesaura:sky_helmet","ancient_aether:valkyrum")
	event.smithing("ancient_aether:valkyrum_chestplate" ,"kubejs:valkyrum_upgrade_smithing_template","naturesaura:sky_chest","ancient_aether:valkyrum")
	event.smithing("ancient_aether:valkyrum_leggings" ,"kubejs:valkyrum_upgrade_smithing_template","naturesaura:sky_pants","ancient_aether:valkyrum")
	event.smithing("ancient_aether:valkyrum_boots" ,"kubejs:valkyrum_upgrade_smithing_template","naturesaura:sky_shoes","ancient_aether:valkyrum")


	// TOOLS

	global.toolTypesWithSword.forEach(type => {
		
		event.smithing("ancient_aether:valkyrum_"+type ,"kubejs:valkyrum_upgrade_smithing_template","naturesaura:sky_"+type,"ancient_aether:valkyrum")
		event.smithing("minecraft:golden_"+type,"kubejs:gold_upgrade_smithing_template","kubejs:silver_"+type,"kubejs:gold_upgrade_parts")
		event.smithing("immersiveengineering:"+type+"_steel","kubejs:steel_upgrade_smithing_template","naturesaura:infused_iron_"+type,"kubejs:steel_upgrade_parts")
		event.smithing("deep_aether:skyjade_"+type,"kubejs:skyjade_upgrade_smithing_template","kubejs:silver_"+type,"kubejs:skyjade_upgrade_parts")
		event.smithing("aether:zanite_"+type,"kubejs:zanite_upgrade_smithing_template","kubejs:lead_"+type,"kubejs:zanite_upgrade_parts")
		event.smithing("wizards_reborn:arcane_gold_"+type,"kubejs:arcane_gold_upgrade_smithing_template","minecraft:golden_"+type,"kubejs:arcane_gold_upgrade_parts")
		event.smithing("minecraft:netherite_"+type,"minecraft:netherite_upgrade_smithing_template","minecraft:diamond_"+type,"netherite_ingot")
		event.smithing("kubejs:bronze_"+type,"kubejs:bronze_upgrade_smithing_template","kubejs:copper_"+type,"kubejs:bronze_upgrade_parts")
		event.smithing("deep_aether:stratus_"+type,"deep_aether:stratus_smithing_template","aether:gravitite_"+type,"deep_aether:stratus_ingot")
		event.smithing("twilightforest:steeleaf_"+type,"kubejs:steeleaf_upgrade_smithing_template","twilightforest:ironwood_"+type,"kubejs:steeleaf_upgrade_parts")
		event.smithing("naturesaura:depth_"+type,"kubejs:depth_upgrade_smithing_template","kubejs:obsidian_"+type,"kubejs:soulstrider_upgrade_parts")
		event.remove({id:"twilightforest:equipment/steeleaf_"+type})

	});

	global.toolTypes.forEach(type => {
		event.smithing("kubejs:stormforged_"+type,"deep_aether:stormforged_smithing_template","kubejs:phoenix_"+type,"deep_aether:squall_plate")
		if(type=="hoe") return;
		event.smithing("enigmaticlegacy:etherium_"+type,"kubejs:etherium_upgrade_smithing_template","kubejs:stormforged_"+type,"enigmaticlegacy:etherium_ingot")
	})
	
	const FieryTools = ["pickaxe","sword"]

	const newFieryTools = ["hoe","shovel","axe"]

	newFieryTools.forEach(id => {
		
		event.smithing("kubejs:fiery_"+id,"kubejs:fiery_upgrade_smithing_template","iron_"+id,"vintageimprovements:fiery_sheet")
		event.smithing("kubejs:phoenix_"+id,"kubejs:phoenix_upgrade_smithing_template","kubejs:fiery_"+id,"kubejs:phoenix_ingot")

	});

	FieryTools.forEach(id => {
		
		event.smithing("twilightforest:fiery_"+id,"kubejs:fiery_upgrade_smithing_template","iron_"+id,"vintageimprovements:fiery_sheet")
		event.smithing("kubejs:phoenix_"+id,"kubejs:phoenix_upgrade_smithing_template","twilightforest:fiery_"+id,"kubejs:phoenix_ingot")

	});

	const KnighmetalTools = ["pickaxe","axe","sword"]

	KnighmetalTools.forEach(type => {
		
		event.smithing("twilightforest:knightmetal_"+type,"kubejs:knightmetal_upgrade_smithing_template","kubejs:lead_"+type,"vintageimprovements:knightmetal_sheet")
		event.smithing("kubejs:obsidian_"+type,"kubejs:obsidian_upgrade_smithing_template","twilightforest:knightmetal_"+type,"kubejs:obsidian_ingot")
		
	});
	
	const newKnightmetalTools = ["hoe","shovel"]

	newKnightmetalTools.forEach(type => {
		event.smithing("kubejs:knightmetal_"+type,"kubejs:knightmetal_upgrade_smithing_template","kubejs:lead_"+type,"vintageimprovements:knightmetal_sheet")
		event.smithing("kubejs:obsidian_"+type,"kubejs:obsidian_upgrade_smithing_template","kubejs:knightmetal_"+type,"kubejs:obsidian_ingot")
	});
	
	//KNIVES

	
	//BOWS

	event.smithing("deep_aether:storm_bow",
        "deep_aether:stormforged_smithing_template",
        "aether:phoenix_bow",
		"deep_aether:squall_plate"
	)
        
    event.remove({id:"deep_aether:storm_bow_smithing"})
	//SWORDS

	event.smithing("deep_aether:storm_sword",
		"deep_aether:stormforged_smithing_template",
		"kubejs:phoenix_sword",
		"deep_aether:squall_plate").id("deep_aether:storm_sword_smithing")
	
	event.smithing("enigmaticlegacy:etherium_sword",
		"kubejs:etherium_upgrade_smithing_template",
		"deep_aether:storm_sword",
		"enigmaticlegacy:etherium_ingot")
	

	//GLOVES

	event.smithing("umbral_skies:fiery_gloves",
		"kubejs:fiery_upgrade_smithing_template",
		"aether:iron_gloves",
		"vintageimprovements:fiery_sheet")

	event.smithing("aether:phoenix_gloves",
		"kubejs:phoenix_upgrade_smithing_template",
		"umbral_skies:fiery_gloves",
		"kubejs:phoenix_ingot").id("aether:crafting/armor/phoenix_gloves")

	event.smithing("umbral_skies:steeleaf_gloves",
		"kubejs:steeleaf_upgrade_smithing_template",
		"umbral_skies:ironwood_gloves",
		"kubejs:steeleaf_upgrade_parts")

	event.smithing("kubejs:infused_iron_gloves",
		"kubejs:botanist_upgrade_smithing_template",
		"aether:iron_gloves",
		"naturesaura:infused_iron")

	event.smithing("deep_aether:stormforged_gloves",
		"deep_aether:stormforged_smithing_template",
		"aether:phoenix_gloves",
		"deep_aether:squall_plate")

	event.smithing("kubejs:etherium_gloves",
		"kubejs:etherium_upgrade_smithing_template",
		"deep_aether:stormforged_gloves",
		"enigmaticlegacy:etherium_ingot")

	event.smithing("aether:netherite_gloves",
		"minecraft:netherite_upgrade_smithing_template",
		"aether:diamond_gloves",
		"minecraft:netherite_ingot"
	)

	event.smithing("kubejs:sky_gloves",
		"kubejs:skyseeker_upgrade_smithing_template",
		"aether:netherite_gloves",
		"naturesaura:sky_ingot"
	)

	event.smithing("ancient_aether:valkyrum_gloves",
		"kubejs:valkyrum_upgrade_smithing_template",
		"kubejs:sky_gloves",
		"ancient_aether:valkyrum"
	)

	event.smithing("kubejs:steel_gloves",
		"kubejs:steel_upgrade_smithing_template",
		"kubejs:infused_iron_gloves",
		"kubejs:steel_upgrade_parts"
	)
	
	event.smithing("deep_aether:skyjade_gloves",
		"kubejs:skyjade_upgrade_smithing_template",
		"kubejs:silver_gloves",
		"kubejs:skyjade_upgrade_parts"
	)
	
	event.smithing("aether:golden_gloves",
		"kubejs:gold_upgrade_smithing_template",
		"kubejs:silver_gloves",
		"kubejs:gold_upgrade_parts"
	)

	event.smithing("kubejs:arcane_gold_gloves",
		"kubejs:arcane_gold_upgrade_smithing_template",
		"aether:golden_gloves",
		"kubejs:arcane_gold_upgrade_parts"
	)

	event.smithing("aether:zanite_gloves",
		"kubejs:zanite_upgrade_smithing_template",
		"kubejs:lead_gloves",
		"kubejs:zanite_upgrade_parts"
	)

	event.smithing("umbral_skies:knightmetal_gloves",
		"kubejs:knightmetal_upgrade_smithing_template",
		"kubejs:lead_gloves",
		"vintageimprovements:knightmetal_sheet"
	)

	event.smithing("aether:obsidian_gloves",
		"kubejs:obsidian_upgrade_smithing_template",
		"umbral_skies:knightmetal_gloves",
		"kubejs:obsidian_ingot"
	)

	event.smithing("kubejs:depth_gloves",
		"kubejs:depth_upgrade_smithing_template",
		"aether:obsidian_gloves",
		"naturesaura:depth_ingot"
	)

	event.smithing("deep_aether:stratus_gloves",
		"deep_aether:stratus_smithing_template",
		"aether:gravitite_gloves",
		"deep_aether:stratus_ingot"
	)

	
})