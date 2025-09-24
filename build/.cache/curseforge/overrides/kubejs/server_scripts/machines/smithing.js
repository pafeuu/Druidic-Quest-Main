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

	event.smithing("umbral_skies:fiery_gloves",
		"kubejs:fiery_upgrade_smithing_template",
		"aether:iron_gloves",
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
		"forbidden_arcanus:obsidian_ingot")
    
	SmithingArmor("deep_aether:stormforged",
		"aether:phoenix",
		"deep_aether:stormforged_smithing_template",
		"deep_aether:squall_plate"
	)

    event.smithing("deep_aether:storm_bow",
        "deep_aether:stormforged_smithing_template",
        "aether:phoenix_bow",
		"deep_aether:squall_plate"
	)
        
    event.remove({id:"deep_aether:storm_bow_smithing"})

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

	event.smithing("aether:phoenix_gloves",
		"kubejs:phoenix_upgrade_smithing_template",
		"umbral_skies:fiery_gloves",
		"kubejs:phoenix_ingot").id("aether:crafting/armor/phoenix_gloves")

	SmithingArmor("wizards_reborn:arcane_gold",
		"minecraft:golden",
		"kubejs:arcane_gold_upgrade_smithing_template",
		"kubejs:arcane_gold_upgrade_parts"
	)

	SmithingArmor("forbidden_arcanus:draco_arcanus",
		"aether:obsidian",
		"kubejs:draco_arcanus_upgrade_smithing_template",
		"forbidden_arcanus:dragon_scale"
	)

	SmithingArmor("forbidden_arcanus:tyr",
		"forbidden_arcanus:draco_arcanus",
		"kubejs:tyr_upgrade_smithing_template",
		"forbidden_arcanus:aquatic_dragon_scale"
	)

	SmithingArmor("enigmaticlegacy:etherium",
		"deep_aether:stormforged",
		"kubejs:etherium_upgrade_smithing_template",
		"enigmaticlegacy:etherium_ingot"
	)

	event.smithing("ancient_aether:valkyrum_helmet","kubejs:valkyrum_upgrade_smithing_template","naturesaura:sky_helmet","kubejs:valkyrum_upgrade_parts")
	event.smithing("ancient_aether:valkyrum_chestplate" ,"kubejs:valkyrum_upgrade_smithing_template","naturesaura:sky_chest","kubejs:valkyrum_upgrade_parts")
	event.smithing("ancient_aether:valkyrum_leggings" ,"kubejs:valkyrum_upgrade_smithing_template","naturesaura:sky_pants","kubejs:valkyrum_upgrade_parts")
	event.smithing("ancient_aether:valkyrum_boots" ,"kubejs:valkyrum_upgrade_smithing_template","naturesaura:sky_shoes","kubejs:valkyrum_upgrade_parts")


	const tooltype = ['hoe','sword','pickaxe','axe','shovel'];

	tooltype.forEach(id => {
		
		event.smithing("ancient_aether:valkyrum_"+id ,"kubejs:valkyrum_upgrade_smithing_template","naturesaura:sky_"+id,"kubejs:valkyrum_upgrade_parts")

	});

	const FieryTools = ["pickaxe","sword"]
	
	FieryTools.forEach(id => {
		
		event.smithing("twilightforest:fiery_"+id,"kubejs:fiery_upgrade_smithing_template","iron_"+id,"vintageimprovements:fiery_sheet")

	});
	
	

	
})