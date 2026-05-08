ServerEvents.tags("block", (event) => {
  event.add("ftbchunks:interact_whitelist", [
    "minecraft:crafting_table",
    "#minecraft:doors",
    "#minecraft:beds",
    "minecraft:bell",
    "create:desk_bell",
    "create_things_and_misc:card_reader",
    "refurbished_furniture:post_box",
    "create:contraption_controls",
    "#create:table_cloths",
    "#waystones:waystones",
    "#waystones:sharestones",
    "#lootr:containers",
    "farmingforblockheads:market",
  ]);

  event.add("c:honey", ["productivebees:honey", "create:honey"]);

  const vents = [
    "molten_vents:dormant_molten_asurine",
    "molten_vents:active_molten_asurine",
    "molten_vents:dormant_molten_veridium",
    "molten_vents:active_molten_veridium",
    "molten_vents:dormant_molten_crimsite",
    "molten_vents:active_molten_crimsite",
    "molten_vents:dormant_molten_ochrum",
    "molten_vents:active_molten_ochrum",
  ];
  event.add("buildinggadgets2:deny", vents);
  event.add("forge:relocation_not_supported", vents);
});

ServerEvents.tags("item", (event) => {
  event.add("ftbchunks:right_click_whitelist", ["create:shopping_list"]);
  event.add("c:stripped_woods", [
    "hazennstuff:stripped_wisewood_wood",
    "biomeswevegone:stripped_palo_verde_wood",
    "deeperdarker:stripped_echo_wood",
    "garnished:stripped_nut_wood",
    "arts_and_crafts:stripped_cork_wood",
    "phantasm:stripped_pream_wood",
  ]);

  event.add("c:elemental_essence", [
    "mysticalagriculture:air_essence",
    "mysticalagriculture:earth_essence",
    "mysticalagriculture:water_essence",
    "mysticalagriculture:fire_essence",
    "ars_nouveau:air_essence",
    "ars_nouveau:earth_essence",
    "ars_nouveau:water_essence",
    "ars_nouveau:fire_essence",
  ]);

  event.add("c:job_symbols", [
    "kubejs:ars_symbol",
    "kubejs:mystical_symbol",
    "kubejs:mystical_symbol_ii",
    "kubejs:forbidden_symbol_ii",
    "kubejs:forbidden_symbol",
    "kubejs:bee_symbol_ii",
    "kubejs:bee_symbol",
  ]);

  event.add("c:job_symbols_i", [
    "kubejs:ars_symbol",
    "kubejs:mystical_symbol",
    "kubejs:forbidden_symbol",
    "kubejs:bee_symbol",
  ]);

    event.add("c:job_symbols_ii", [
    "kubejs:ars_symbol",
    "kubejs:mystical_symbol_ii",
    "kubejs:forbidden_symbol_ii",
    "kubejs:bee_symbol_ii",
  ]);

  event.add("c:elemental_essence_air", [
    "mysticalagriculture:air_essence",
    "ars_nouveau:air_essence",
  ]);
  event.add("c:elemental_essence_water", [
    "mysticalagriculture:water_essence",
    "ars_nouveau:water_essence",
  ]);
  event.add("c:elemental_essence_earth", [
    "mysticalagriculture:earth_essence",
    "ars_nouveau:earth_essence",
  ]);
  event.add("c:elemental_essence_fire", [
    "mysticalagriculture:fire_essence",
    "ars_nouveau:fire_essence",
  ]);



  /*     event.add("hazennstuff:armors/helmets", [
        'hazennstuff:miner_helmet',
        'hazennstuff:fireblossom_crown',
        'hazennstuff:spectral_spelunker_helmet',
        'hazennstuff:arbitrium_robes_helmet'
    ]);
    event.add("hazennstuff:armors/chestplates", [
        'hazennstuff:miner_chestplate',
        'hazennstuff:spectral_spelunker_chestplate',
        'hazennstuff:arbitrium_robes_chestplate'
    ]);
    event.add("hazennstuff:armors/leggings", [
        'hazennstuff:miner_leggings',
        'hazennstuff:spectral_spelunker_leggings',
        'hazennstuff:arbitrium_robes_leggings'
    ]);
    event.add("hazennstuff:armors/boots", [
        'hazennstuff:miner_boots',
        'hazennstuff:spectral_spelunker_boots',
        'hazennstuff:arbitrium_robes_boots'
    ]);
})

    ]); */
});

ServerEvents.tags("entity_type", (event) => {
  // Liste des mobs qu'on veut **interdire** pour les jars et les Drygmys
  const impossibleMobs = [
    "minecraft:iron_golem", // par défaut
    "minecraft:ender_dragon",
    "minecraft:wither",
    "minecraft:warden",
    "minecraft:elder_guardian",
    "ars_nouveau:wilden_boss",
    "ars_nouveau:drygmy",
    "conjurer_illager:conjurer",
    "irons_spellbooks:citadel_keeper",
    "irons_spellbooks:dead_king",
    /golemoverhaul:.+/,
    /productivebees:.+/,
    /bosses_of_mass_destruction:.+/,
    /cataclysm:.+/,
    /artifacts:mimic/,
    /.*boss.*/i,
  ];

  // Appliquer la blacklist aux Drygmys
  event.add("ars_nouveau:drygmy_blacklist", impossibleMobs);

  // Appliquer la blacklist aux jars
  event.add("ars_nouveau:jar_blacklist", impossibleMobs);
});
