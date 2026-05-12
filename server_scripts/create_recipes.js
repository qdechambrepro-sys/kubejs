// priority: 1

ServerEvents.recipes((event) => {
  // THIS LINE IS IMPORTANT!
  // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
  addCreateRecipeHandler(event);
  //Sandpaper = grindstone recipes
  event.recipes.createSandpaperPolishing(
    ["minecraft:leather"],
    "minecraft:rotten_flesh",
  );

  //Mixing
  event.recipes.createMixing("createmechanisms:rubber", [
    "minecraft:kelp",
    "minecraft:kelp",
    "minecraft:kelp",
    "minecraft:kelp",
    Fluid.of("water", 250),
  ]);
  event.recipes.createMixing("culturaldelights:corn_dough", [
    "culturaldelights:corn_cob",
    "culturaldelights:corn_cob",
    "culturaldelights:corn_cob",
    Fluid.of("water", 250),
  ]);

  event.recipes.createMixing("2x minecraft:dirt", [
    "minecraft:mud",
    "minecraft:gravel",
    "minecraft:clay_ball",
  ]);
  event.recipes.createMixing("minecraft:warped_nylium", [
    "minecraft:netherrack",
    "minecraft:warped_fungus",
  ]);
  event.recipes.createMixing("minecraft:crimson_nylium", [
    "minecraft:netherrack",
    "minecraft:crimson_fungus",
  ]);
  event.recipes
    .createMixing("9x minecraft:gunpowder", [
      "minecraft:wither_rose",
      "biomeswevegone:blue_glowcane_powder",
      "biomeswevegone:red_glowcane_powder",
      "biomeswevegone:green_glowcane_powder",
      "biomeswevegone:yellow_glowcane_powder",
    ])
    .superheated();
  event.recipes
    .createMixing("minecraft:lapis_lazuli", [
      "minecraft:glowstone_dust",
      "minecraft:blue_dye",
      "amethyst_shard",
      Fluid.of("create_enchantment_industry:experience", 100),
    ])
    .superheated();
  event.recipes
    .createMixing("minecraft:ender_pearl", [
      Fluid.of("createaddition:bioethanol", 250),
      "createaddition:biomass_pellet",
      "createaddition:biomass_pellet",
      "createaddition:biomass_pellet",
      "minecraft:prismarine_shard",
      "minecraft:prismarine_shard",
      "minecraft:prismarine_shard",
      "minecraft:prismarine_crystals",
    ])
    .superheated();
  //event.recipes.createMixing(('3x createmechanisms:bronze'),['minecraft:copper_ingot','minecraft:copper_ingot','minecraft:copper_ingot','minecraft:iron_ingot']).heated()
  event.recipes
    .createMixing("kubejs:chromatic_compound", [
      "#c:dusts/glowstone",
      "#c:dusts/glowstone",
      "#c:dusts/glowstone",
      "create:cinder_flour",
      "create:cinder_flour",
      "create:cinder_flour",
      "create:powdered_obsidian",
      "create:powdered_obsidian",
      "create:polished_rose_quartz",
    ])
    .superheated();
  event.recipes
    .createMixing("createaddition:electrum_ingot", [
      "minecraft:gold_ingot",
      "#c:dusts/glowstone",
      "#c:gems/quartz",
    ])
    .heated();
  //

  // Deploy
  event.recipes.createDeploying("minecraft:shroomlight", [
    "minecraft:glowstone",
    "#c:mushrooms",
  ]);
  event.recipes.createDeploying("minecraft:glow_ink_sac", [
    "minecraft:ink_sac",
    "minecraft:glow_berries",
  ]);

  // Compacting
  event.recipes.createCompacting("minecraft:ink_sac", [
    "minecraft:dried_kelp",
    "minecraft:black_dye",
  ]);
  event.recipes.createCompacting("minecraft:moss_block", [
    "minecraft:cobblestone",
    "minecraft:cobblestone",
    "minecraft:cobblestone",
    "minecraft:vine",
  ]);
  event.recipes.createCompacting("minecraft:coal", [
    "minecraft:charcoal",
    "minecraft:charcoal",
    "minecraft:charcoal",
    "minecraft:charcoal",
    Fluid.of("lava", 250),
  ]);
  event.recipes
    .createCompacting(withChance("minecraft:amethyst_shard", 0.25), [
      "minecraft:iron_nugget",
      "minecraft:iron_nugget",
      "minecraft:iron_nugget",
      "minecraft:quartz",
      Fluid.of("lava", 250),
    ])
    .superheated();
  event.recipes.createCompacting("minecraft:shulker_shell", [
    "create:sturdy_sheet",
    "minecraft:popped_chorus_fruit",
    "minecraft:popped_chorus_fruit",
    "minecraft:popped_chorus_fruit",
    "minecraft:popped_chorus_fruit",
  ]);
  event.recipes.createCompacting("minecraft:tuff", [
    "minecraft:andesite",
    "minecraft:cobblestone",
    Fluid.of("lava", 250),
  ]);

  // Crushing
  event.recipes
    .createCrushing(
      [
        withChance("minecraft:glowstone_dust", 0.25),
        withChance("minecraft:glowstone_dust", 0.1),
      ],
      "minecraft:soul_sand",
    )
    .processingTime(100);

  event.recipes
    .createCrushing(
      [
        "irons_spellbooks:common_ink",
        withChance("irons_spellbooks:uncommon_ink", 0.5),
      ],
      "irons_spellbooks:scroll",
    )
    .processingTime(100);

  event.recipes
    .createCrushing(
      [
        "irons_spellbooks:common_ink",
        withChance("ars_nouveau:source_gem", 0.2),
        withChance("ars_nouveau:source_gem", 0.1),
      ],
      "ars_nouveau:novice_spell_book",
    )
    .processingTime(100);

  // mill
  event.recipes
    .createMilling(["garnished:small_chorus_plant"], "minecraft:chorus_fruit")
    .id("end:chorusfruit");

  // Filling
  event.recipes.createFilling("minecraft:magma_block", [
    "minecraft:netherrack",
    Fluid.of("lava", 250),
  ]);
  event.recipes.createFilling("create:rose_quartz", [
    "#c:gems/quartz",
    Fluid.of("kubejs:fluid_redstone", 400),
  ]);

  // Haunting
  event.recipes.createHaunting(["minecraft:wither_rose"], "minecraft:poppy");
  event.recipes.createHaunting(
    ["minecraft:magma_cream"],
    "minecraft:slime_ball",
  );

  event.recipes.create
    .cutting(
      ["snowball", "snowball", "snowball", "snowball"],
      ["minecraft:snow_block"],
    )
    .id("endsnowball");
  event.recipes.create.cutting(
    "garnished:small_chorus_plant",
    "minecraft:chorus_fruit",
  );
  //_______________________________________________________________
  //TOKEN METIERS
  //_______________________________________________________________
  event.shaped("kubejs:mystical_symbol", [" A ", "CBC", " A "], {
    A: "mysticalagriculture:inferium_gemstone",
    B: "minecraft:gold_ingot",
    C: "mysticalagriculture:prosperity_gemstone",
  });

  event
    .shaped("kubejs:mystical_symbol_ii", ["DAD", "CBC", "DAD"], {
      A: "mysticalagriculture:imperium_gemstone",
      B: "kubejs:mystical_symbol",
      C: "mysticalagriculture:tertium_gemstone",
      D: "mysticalagriculture:inferium_nugget",
    })
    .replaceIngredient("kubejs:mystical_symbol", "minecraft:gold_ingot");

  event.shaped("kubejs:bee_symbol", [" A ", "CBC", " A "], {
    A: "productivebees:wax",
    B: "minecraft:gold_ingot",
    C: "minecraft:honeycomb",
  });

  event
    .shaped("kubejs:bee_symbol_ii", ["DDD", "CBC", "DDD"], {
      B: "kubejs:bee_symbol",
      C: "minecraft:honeycomb",
      D: "productivebees:honey_treat",
    })
    .replaceIngredient("kubejs:bee_symbol", "minecraft:gold_ingot");

  event.shaped("kubejs:ars_symbol", [" A ", "CBC", " A "], {
    A: "ars_nouveau:source_gem",
    B: "minecraft:gold_ingot",
    C: "#c:elemental_essence",
  });

  event.shaped("kubejs:forbidden_symbol", [" A ", "CBC", " A "], {
    A: "forbidden_arcanus:arcane_crystal",
    B: "minecraft:gold_ingot",
    C: "forbidden_arcanus:darkstone",
  });

  event
    .shaped("kubejs:forbidden_symbol_ii", ["AAA", "CBC", "AAA"], {
      A: "forbidden_arcanus:mundabitur_dust",
      B: "kubejs:forbidden_symbol",
      C: "forbidden_arcanus:deorum_nugget",
    })
    .replaceIngredient("kubejs:forbidden_symbol", "minecraft:gold_ingot");

  //ARS_NOUVEAU

  //Enchanting_appartus
  event.recipes.ars_nouveau.enchanting_apparatus(
    ["ars_nouveau:earth_essence", "ars_nouveau:water_essence"], // input items
    "ars_nouveau:source_gem", // reagent
    "kubejs:swamp_essence", // output
    10, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ["ars_nouveau:earth_essence", "ars_nouveau:fire_essence"], // input items
    "ars_nouveau:source_gem", // reagent
    "kubejs:magma_essence", // output
    10, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ["ars_nouveau:water_essence", "ars_nouveau:air_essence"], // input items
    "ars_nouveau:source_gem", // reagent
    "kubejs:ice_essence", // output
    10, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ["ars_nouveau:water_essence", "ars_nouveau:fire_essence"], // input items
    "ars_nouveau:source_gem", // reagent
    "kubejs:steam_essence", // output
    10, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ["ars_nouveau:air_essence", "ars_nouveau:earth_essence"], // input items
    "ars_nouveau:source_gem", // reagent
    "kubejs:dust_essence", // output
    10, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ["ars_nouveau:air_essence", "ars_nouveau:fire_essence"], // input items
    "ars_nouveau:source_gem", // reagent
    "kubejs:incandescent_essence", // output
    10, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "irons_spellbooks:blood_vial",
      "forbidden_arcanus:bat_wing",
      "minecraft:redstone",
    ], // input items
    "ars_nouveau:source_gem", // reagent
    "kubejs:blood_essence", // output
    10, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "minecraft:poisonous_potato",
      "minecraft:rotten_flesh",
      "hazennstuff:spider_fang",
    ], // input items
    "ars_nouveau:source_gem", // reagent
    "kubejs:poison_essence", // output
    10, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );
  event.custom({
    type: "mysticalagriculture:awakening",
    essences: [
      {
        id: "ars_nouveau:air_essence",
        count: 12,
      },
      {
        id: "ars_nouveau:water_essence",
        count: 12,
      },
      {
        id: "ars_nouveau:air_essence",
        count: 12,
      },
      {
        id: "ars_nouveau:water_essence",
        count: 12,
      },
    ],
    input: {
      item: "ars_nouveau:source_gem",
    },
    ingredients: [
      {
        item: "kubejs:ice_essence",
      },
      {
        item: "kubejs:dust_essence",
      },
      {
        item: "kubejs:ice_essence",
      },
      {
        item: "kubejs:dust_essence",
      },
    ],
    result: {
      id: "kubejs:storm_essence",
    },
  });
  event.custom({
    type: "mysticalagriculture:awakening",
    essences: [
      {
        id: "ars_nouveau:fire_essence",
        count: 24,
      },
      {
        id: "ars_nouveau:air_essence",
        count: 24,
      },
      {
        id: "kubejs:incandescent_essence",
        count: 12,
      },
      {
        id: "kubejs:storm_essence",
        count: 12,
      },
    ],
    input: {
      item: "minecraft:nether_star",
    },
    ingredients: [
      {
        item: "minecraft:glowstone",
      },
      {
        item: "minecraft:amethyst_block",
      },
      {
        item: "kubejs:steam_essence",
      },
      {
        item: "kubejs:dust_essence",
      },
    ],
    result: {
      id: "kubejs:light_essence",
    },
  });
  event.custom({
    type: "mysticalagriculture:awakening",
    essences: [
      {
        id: "ars_nouveau:earth_essence",
        count: 24,
      },
      {
        id: "ars_nouveau:water_essence",
        count: 24,
      },
      {
        id: "kubejs:dust_essence",
        count: 12,
      },
      {
        id: "kubejs:ice_essence",
        count: 12,
      },
    ],
    input: {
      item: "minecraft:echo_shard",
    },
    ingredients: [
      {
        item: "minecraft:crying_obsidian",
      },
      {
        item: "minecraft:ender_eye",
      },
      {
        item: "kubejs:storm_essence",
      },
      {
        item: "kubejs:magma_essence",
      },
    ],
    result: {
      id: "kubejs:void_essence",
    },
  });
  event.recipes.ars_nouveau.enchanting_apparatus(
    ["minecraft:sand", "minecraft:sand", "minecraft:sand", "minecraft:sand"], // input items
    "minecraft:gunpowder", // reagent
    "minecraft:tnt", // output
    1000, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "hazennstuff:fireblossom",
      "hazennstuff:fireblossom",
      "hazennstuff:fireblossom",
      "ars_nouveau:fire_essence",
      "ars_nouveau:fire_essence",
      "minecraft:blaze_rod",
      "minecraft:magma_cream",
    ], // input items
    "irons_spellbooks:blank_rune", // reagent
    "hazennstuff:flaming_template", // output
    9000, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "forbidden_arcanus:arcane_crystal_dust",
      "forbidden_arcanus:corrupti_dust",
      "ars_nouveau:manipulation_essence",
    ], // input items
    "minecraft:armadillo_scute", // reagent
    "hazennstuff:shadow_scale", // output
    5000, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "minecraft:arrow",
      "minecraft:arrow",
      "minecraft:bow",
      "minecraft:spectral_arrow",
      "minecraft:spectral_arrow",
      "minecraft:spectral_arrow",
    ], // input items
    "irons_spellbooks:blank_rune", // reagent
    "hazennstuff:archery_rune", // output
    5000, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "minecraft:golden_carrot",
      "minecraft:golden_apple",
      "minecraft:golden_carrot",
      "minecraft:golden_apple",
      "irons_spellbooks:blood_vial",
      "irons_spellbooks:blood_vial",
    ], // input items
    "irons_spellbooks:blank_rune", // reagent
    "hazennstuff:health_rune", // output
    6000, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "#simplyswords:diamond_gear",
      "#simplyswords:diamond_gear",
      "#simplyswords:diamond_gear",
      "#simplyswords:diamond_gear",
      "#simplyswords:diamond_gear",
      "#simplyswords:diamond_gear",
    ], // input items
    "irons_spellbooks:blank_rune", // reagent
    "hazennstuff:melee_rune", // output
    5000, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );
  
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
"productivebees:wax",
"productivebees:wax",
"ars_nouveau:air_essence",
"ars_nouveau:fire_essence",
    ], // input items
    "minecraft:candle", // reagent
    "kubejs:magic_candle", // output
    1000, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );

  event.recipes.ars_nouveau.enchanting_apparatus(
    [
"mysticalagriculture:inferium_gemstone",
"mysticalagriculture:inferium_gemstone",
"ars_nouveau:earth_essence",
"ars_nouveau:fire_essence",
    ], // input items
    "minecraft:bucket", // reagent
    "kubejs:creuset", // output
    1000, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );
  //FORBIDDEN ARCANUS

  event.recipes.forbidden_arcanus
    .ritual(
      RitualResults.ofCreateItemResult(
        Item.of("alshanex_familiars:magic_power_tier_1"),
      ),
      "minecraft:gold_ingot",
    ) //Start with an output type and a primary material
    .addInput("ars_nouveau:source_gem", 3) //Add one input Do not be greater than 8 inputs
    .addInput("#curios:spellbook", 2) //Add one input Do not be greater than 8 inputs
    .essences(1, 0, 0, 0) //Essence input. The order is the same as the JEI order.
    .tier(2) //Forge table level requirements, optional, default 1
    .matchTierExact(false) //Strict matching level, optional, false by default//Enhancement sub-requirements None by default
    .magicCircles("forbidden_arcanus:upgrade_tier"); //Formulation of finished particles

  event.recipes.forbidden_arcanus
    .ritual(
      RitualResults.ofCreateItemResult(
        Item.of("alshanex_familiars:magic_power_tier_2"),
      ),
      "alshanex_familiars:magic_power_tier_1",
    ) //Start with an output type and a primary material
    .addInput("ars_nouveau:source_gem_block", 2) //Add one input Do not be greater than 8 inputs
    .addInput("#curios:spellbook", 2) //Add one input Do not be greater than 8 inputs
    .addInput("minecraft:diamond", 1) //Add one input Do not be greater than 8 inputs
    .addInput("#c:gems/quartz", 1) //Add one input Do not be greater than 8 inputs
    .essences(1, 0, 0, 0) //Essence input. The order is the same as the JEI order.
    .tier(3) //Forge table level requirements, optional, default 1
    .matchTierExact(false) //Strict matching level, optional, false by default//Enhancement sub-requirements None by default
    .magicCircles("forbidden_arcanus:upgrade_tier"); //Formulation of finished particles

  event.recipes.forbidden_arcanus
    .ritual(
      RitualResults.ofCreateItemResult(Item.of("kubejs:magical_imbued_ingot")),
      "#c:ingots",
    ) //Start with an output type and a primary material
    .addInput("ars_nouveau:air_essence", 2) //Add one input Do not be greater than 8 inputs
    .addInput("ars_nouveau:water_essence", 2) //Add one input Do not be greater than 8 inputs
    .addInput("ars_nouveau:earth_essence", 2) //Add one input Do not be greater than 8 inputs
    .addInput("ars_nouveau:fire_essence", 2) //Add one input Do not be greater than 8 inputs
    .essences(1, 0, 0, 0) //Essence input. The order is the same as the JEI order.
    .tier(3) //Forge table level requirements, optional, default 1
    .matchTierExact(false) //Strict matching level, optional, false by default//Enhancement sub-requirements None by default
    .magicCircles("forbidden_arcanus:upgrade_tier"); //Formulation of finished particles



//CREATE MECHANISMS
  let transitional = "createmechanisms:incomplete_wooden_mechanism";
  event.recipes
    .createSequencedAssembly(
      ["createmechanisms:wooden_mechanism"],
      "#c:stripped_woods",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "#createmechanisms:sawing_tools",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "garnished:boarded_pulp",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "create:andesite_alloy",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "create:cogwheel",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "create:large_cogwheel",
        ]),
        event.recipes.createPressing(transitional, transitional),
      ],
    )
    .transitionalItem(transitional)
    .loops(1)
    .id("end:wooden_mechanism");

  transitional = "kubejs:incomplete_blackstone";
  event.recipes
    .createSequencedAssembly(
      ["minecraft:gilded_blackstone"],
      "minecraft:blackstone",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "minecraft:gold_ingot",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "minecraft:gold_ingot",
        ]),
      ],
    )
    .transitionalItem(transitional)
    .loops(1)
    .id("end:black");

  transitional = "createmechanisms:incomplete_rubber_mechanism";
  event.recipes
    .createSequencedAssembly(
      ["createmechanisms:rubber_mechanism"],
      "createmechanisms:wooden_mechanism",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "createmechanisms:cured_rubber",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "createmechanisms:cured_rubber",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "garnished:hardened_wrap",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "create:copper_sheet",
        ]),
        event.recipes.createPressing(transitional, transitional),
      ],
    )
    .transitionalItem(transitional)
    .loops(1)
    .id("end:rubber_mechanism");

  transitional = "createmechanisms:incomplete_heat_mechanism";
  event.recipes
    .createSequencedAssembly(
      ["createmechanisms:heat_mechanism"],
      "createmechanisms:rubber_mechanism",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "createmechanisms:bronze",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "minecraft:gunpowder",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "garnished:baklava",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "create_things_and_misc:crushed_magma",
        ]),
        event.recipes.createFilling(transitional, [
          transitional,
          Fluid.of("create_bic_bit:frying_oil", 250),
        ]),
        event.recipes.createPressing(transitional, transitional),
      ],
    )
    .transitionalItem(transitional)
    .loops(2)
    .id("end:heat_mechanism");

  transitional = "createmechanisms:incomplete_ender_mechanism";
  event.recipes
    .createSequencedAssembly(
      ["createmechanisms:ender_mechanism"],
      "biomeswevegone:mossy_stone_slab",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "eternal_starlight:lunaris_cactus_gel",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "garnished:wrapped_warped_tangle",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "garnished:ethereal_compound",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "minecraft:ender_eye",
        ]),
        event.recipes.createPressing(transitional, transitional),
        event.recipes.createFilling(transitional, [
          transitional,
          Fluid.of("createmechanisms:enderiam", 350),
        ]),
      ],
    )
    .transitionalItem(transitional)
    .loops(2)
    .id("end:ender_mechanism");

  transitional = "createmechanisms:incomplete_advanced_precision_mechanism";
  event.recipes
    .createSequencedAssembly(
      ["createmechanisms:advanced_precision_mechanism"],
      "kubejs:chromatic_compound",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "createmechanisms:ender_mechanism",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "createmechanisms:heat_mechanism",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "create_things_and_misc:vibration_mechanism",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "createteleporters:quantum_mechanism",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "create:precision_mechanism",
        ]),
        event.recipes.createPressing(transitional, transitional),
      ],
    )
    .transitionalItem(transitional)
    .loops(3)
    .id("end:precision_mechanism");

  // FARMERS DELIGHT
  event.recipes.createMixing("farmersdelight:apple_pie", [
    "minecraft:wheat",
    "minecraft:wheat",
    "minecraft:apple",
    "minecraft:apple",
    "minecraft:apple",
    "minecraft:sugar",
    "minecraft:sugar",
    "farmersdelight:pie_crust",
  ]);
  event.recipes.createMixing("farmersdelight:sweet_berry_cheesecake", [
    "minecraft:sweet_berries",
    "minecraft:sweet_berries",
    "minecraft:sweet_berries",
    "minecraft:sweet_berries",
    "minecraft:sweet_berries",
    "minecraft:sweet_berries",
    Fluid.of("minecraft:milk", 1000),
    "farmersdelight:pie_crust",
  ]);
  event.recipes.createMixing("farmersdelight:fruit_salad", [
    "minecraft:apple",
    "minecraft:melon_slice",
    "minecraft:melon_slice",
    "#c:foods/berry",
    "#c:foods/berry",
    "farmersdelight:pumpkin_slice",
    "minecraft:bowl",
  ]);
  event.recipes.createMixing("farmersdelight:mixed_salad", [
    "#c:foods/cabbage",
    "farmersdelight:tomato",
    "minecraft:beetroot",
    "minecraft:bowl",
  ]);
  event.recipes.createMixing("farmersdelight:nether_salad", [
    "minecraft:crimson_fungus",
    "minecraft:warped_fungus",
    "minecraft:bowl",
  ]);

  transitional = "kubejs:incomplete_melon_popsicle";
  event.recipes
    .createSequencedAssembly(
      ["farmersdelight:melon_popsicle"],
      "minecraft:stick",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "minecraft:ice",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "minecraft:melon_slice",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "minecraft:melon_slice",
        ]),
      ],
    )
    .transitionalItem(transitional)
    .loops(2)
    .id("end:melon_popsicle");

  transitional = "kubejs:incomplete_barbecue_stick";
  event.recipes
    .createSequencedAssembly(
      ["farmersdelight:barbecue_stick"],
      "minecraft:stick",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:onion",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:tomato",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "#c:foods/cooked_meat",
        ]),
      ],
    )
    .transitionalItem(transitional)
    .loops(1)
    .id("end:barbecue_stick");

  transitional = "kubejs:incomplete_mutton_wrap";
  event.recipes
    .createSequencedAssembly(["farmersdelight:mutton_wrap"], "#c:foods/bread", [
      event.recipes.createDeploying(transitional, [
        transitional,
        "#c:foods/cooked_mutton",
      ]),
      event.recipes.createDeploying(transitional, [
        transitional,
        "#c:foods/cabbage",
      ]),
      event.recipes.createDeploying(transitional, [
        transitional,
        "farmersdelight:onion",
      ]),
    ])
    .transitionalItem(transitional)
    .loops(1)
    .id("end:mutton_wrap");

  transitional = "kubejs:incomplete_stuffed_potato";
  event.recipes
    .createSequencedAssembly(
      ["farmersdelight:stuffed_potato"],
      "minecraft:baked_potato",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "#c:foods/cooked_beef",
        ]),
        event.recipes.createFilling(transitional, [
          transitional,
          Fluid.of("minecraft:milk", 750),
        ]),
      ],
    )
    .transitionalItem(transitional)
    .loops(1)
    .id("end:stuffed_potato");

  transitional = "kubejs:incomplete_salmon_roll";
  event.recipes
    .createSequencedAssembly(
      ["farmersdelight:salmon_roll"],
      "farmersdelight:cooked_rice",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:salmon_slice",
        ]),
      ],
    )
    .transitionalItem(transitional)
    .loops(2)
    .id("end:salmon_roll");

  transitional = "kubejs:incomplete_cod_roll";
  event.recipes
    .createSequencedAssembly(
      ["farmersdelight:cod_roll"],
      "farmersdelight:cooked_rice",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:cod_slice",
        ]),
      ],
    )
    .transitionalItem(transitional)
    .loops(2)
    .id("end:cod_roll");

  transitional = "kubejs:incomplete_kelp_roll";
  event.recipes
    .createSequencedAssembly(
      ["farmersdelight:kelp_roll"],
      "minecraft:dried_kelp",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "minecraft:dried_kelp",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:cooked_rice",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "minecraft:carrot",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:cooked_rice",
        ]),
      ],
    )
    .transitionalItem(transitional)
    .loops(1)
    .id("end:kelp_roll");

  transitional = "kubejs:incomplete_rice_roll_medley_block";
  event.recipes
    .createSequencedAssembly(
      ["farmersdelight:rice_roll_medley_block"],
      "minecraft:bowl",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:cod_roll",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:kelp_roll_slice",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:salmon_roll",
        ]),
      ],
    )
    .transitionalItem(transitional)
    .loops(2)
    .id("end:rice_roll_medley_block");

  transitional = "kubejs:incomplete_shepherds_pie_block";
  event.recipes
    .createSequencedAssembly(
      ["farmersdelight:shepherds_pie_block"],
      "minecraft:bowl",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "minecraft:baked_potato",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "#c:foods/cooked_mutton",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:onion",
        ]),
        event.recipes.createFilling(transitional, [
          transitional,
          Fluid.of("minecraft:milk", 400),
        ]),
      ],
    )
    .transitionalItem(transitional)
    .loops(2)
    .id("end:shepherds_pie_block");

  transitional = "kubejs:incomplete_roast_chicken_block";
  event.recipes
    .createSequencedAssembly(
      ["farmersdelight:roast_chicken_block"],
      "minecraft:bowl",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "minecraft:cooked_chicken",
        ]),
        event.recipes.createDeploying(transitional, [transitional, "#c:eggs"]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "minecraft:carrot",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "minecraft:baked_potato",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:onion",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "minecraft:bread",
        ]),
      ],
    )
    .transitionalItem(transitional)
    .loops(1)
    .id("end:roast_chicken_block");

  transitional = "kubejs:incomplete_grilled_salmon";
  event.recipes
    .createSequencedAssembly(
      ["farmersdelight:grilled_salmon"],
      "minecraft:bowl",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "minecraft:sweet_berries",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:onion",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "#c:foods/cabbage",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "#c:foods/cooked_salmon",
        ]),
      ],
    )
    .transitionalItem(transitional)
    .loops(1)
    .id("end:grilled_salmon");

  transitional = "kubejs:incomplete_steak_and_potatoes";
  event.recipes
    .createSequencedAssembly(
      ["farmersdelight:steak_and_potatoes"],
      "minecraft:bowl",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "minecraft:cooked_beef",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "minecraft:baked_potato",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:onion",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:cooked_rice",
        ]),
      ],
    )
    .transitionalItem(transitional)
    .loops(1)
    .id("end:steak_and_potatoes");

  transitional = "kubejs:incomplete_roasted_mutton_chops";
  event.recipes
    .createSequencedAssembly(
      ["farmersdelight:roasted_mutton_chops"],
      "minecraft:bowl",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:cooked_mutton_chops",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "minecraft:beetroot",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:tomato",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:cooked_rice",
        ]),
      ],
    )
    .transitionalItem(transitional)
    .loops(1)
    .id("end:roasted_mutton_chops");

  transitional = "kubejs:incomplete_bacon_and_eggs";
  event.recipes
    .createSequencedAssembly(
      ["farmersdelight:bacon_and_eggs"],
      "minecraft:bowl",
      [
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:cooked_bacon",
        ]),
        event.recipes.createDeploying(transitional, [
          transitional,
          "farmersdelight:fried_egg",
        ]),
      ],
    )
    .transitionalItem(transitional)
    .loops(2)
    .id("end:bacon_and_eggs");

  // RECYCLE
  const equipmentRecyclingData = {
    diamond: {
      "minecraft:diamond_pickaxe": [0.3, 0.1],
      "minecraft:diamond_shovel": [0.2],
      "minecraft:diamond_axe": [0.3, 0.1],
      "minecraft:diamond_hoe": [0.2],
      "minecraft:diamond_sword": [0.3, 0.03],
      "minecraft:diamond_helmet": [1, 0.1, 0.05],
      "minecraft:diamond_chestplate": [1, 0.3, 0.1, 0.05],
      "minecraft:diamond_leggings": [1, 0.15, 0.05],
      "minecraft:diamond_boots": [1, 0.05],
      "simplyswords:diamond_longsword": [0.2],
      "simplyswords:diamond_twinblade": [0.2],
      "simplyswords:diamond_rapier": [0.2],
      "simplyswords:diamond_katana": [0.2],
      "simplyswords:diamond_sai": [0.2],
      "simplyswords:diamond_spear": [0.2],
      "simplyswords:diamond_glaive": [0.2],
      "simplyswords:diamond_warglaive": [0.2],
      "simplyswords:diamond_cutlass": [0.2],
      "simplyswords:diamond_claymore": [0.3],
      "simplyswords:diamond_greathammer": [0.3],
      "simplyswords:diamond_greataxe": [0.3],
      "simplyswords:diamond_chakram": [0.3],
      "simplyswords:diamond_scythe": [0.3],
      "simplyswords:diamond_halberd": [0.3],
    },
    iron: {
      "minecraft:iron_pickaxe": [0.6, 0.1],
      "minecraft:iron_shovel": [0.3],
      "minecraft:iron_axe": [0.6, 0.1],
      "minecraft:iron_hoe": [0.4],
      "minecraft:iron_sword": [0.6, 0.03],
      "minecraft:iron_helmet": [1, 0.1, 0.05],
      "minecraft:iron_chestplate": [1, 0.5, 0.1, 0.05],
      "minecraft:iron_leggings": [1, 0.3, 0.05],
      "minecraft:iron_boots": [1, 0.2],
      "simplyswords:iron_longsword": [0.6],
      "simplyswords:iron_twinblade": [0.6],
      "simplyswords:iron_rapier": [0.6],
      "simplyswords:iron_katana": [0.6],
      "simplyswords:iron_sai": [0.6],
      "simplyswords:iron_spear": [0.6],
      "simplyswords:iron_glaive": [0.6],
      "simplyswords:iron_warglaive": [0.5],
      "simplyswords:iron_cutlass": [0.5],
      "simplyswords:iron_claymore": [0.9],
      "simplyswords:iron_greathammer": [0.7],
      "simplyswords:iron_greataxe": [0.7],
      "simplyswords:iron_chakram": [0.7],
      "simplyswords:iron_scythe": [0.7],
      "simplyswords:iron_halberd": [0.7],
    },
    gold: {
      "minecraft:golden_pickaxe": [0.5, 0.05],
      "minecraft:golden_shovel": [0.5],
      "minecraft:golden_axe": [0.5, 0.05],
      "minecraft:golden_hoe": [0.4],
      "minecraft:golden_sword": [0.5, 0.02],
      "minecraft:golden_helmet": [0.8, 0.1, 0.05],
      "minecraft:golden_chestplate": [0.8, 0.4, 0.1, 0.05],
      "minecraft:golden_leggings": [0.8, 0.3, 0.05],
      "minecraft:golden_boots": [0.8, 0.2],
      "simplyswords:gold_longsword": [0.4],
      "simplyswords:gold_twinblade": [0.4],
      "simplyswords:gold_rapier": [0.4],
      "simplyswords:gold_katana": [0.4],
      "simplyswords:gold_sai": [0.4],
      "simplyswords:gold_spear": [0.4],
      "simplyswords:gold_glaive": [0.4],
      "simplyswords:gold_warglaive": [0.4],
      "simplyswords:gold_cutlass": [0.4],
      "simplyswords:gold_claymore": [0.6],
      "simplyswords:gold_greathammer": [0.6],
      "simplyswords:gold_greataxe": [0.5],
      "simplyswords:gold_chakram": [0.5],
      "simplyswords:gold_scythe": [0.5],
      "simplyswords:gold_halberd": [0.5],
    },
  };

  const recycleEquipment = (inputItem, outputItem, chances) => {
    let outputs = chances.map((chance) => withChance(outputItem, chance));
    event.recipes.create.crushing(outputs, inputItem);
  };

  const processRecyclingData = (event, material, data) => {
    Object.entries(data).forEach(([item, chances]) => {
      recycleEquipment(item, material, chances);
    });
  };

  // equipment recycling
  processRecyclingData(
    event,
    "minecraft:diamond",
    equipmentRecyclingData.diamond,
  );
  processRecyclingData(
    event,
    "minecraft:iron_ingot",
    equipmentRecyclingData.iron,
  );
  processRecyclingData(
    event,
    "minecraft:gold_ingot",
    equipmentRecyclingData.gold,
  );
  //RECIPE MODIFICATIONS :
  event.remove({ id: "mysticalagriculture:seed/crafting/ice" });
  event.remove({ id: "mysticalagriculture:seed/infusion/ice" });
  event.remove({ id: "mysticalagriculture:seed/reprocessor/ice" });

  event.replaceInput(
    { input: "mysticalagriculture:water_essence" }, // Arg 1: the filter
    "mysticalagriculture:water_essence", // Arg 2: the item to replace
    "ars_nouveau:water_essence", // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );

  event.replaceInput(
    { input: "mysticalagriculture:fire_essence" }, // Arg 1: the filter
    "mysticalagriculture:fire_essence", // Arg 2: the item to replace
    "ars_nouveau:fire_essence", // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );

  event.replaceInput(
    { input: "mysticalagriculture:earth_essence" }, // Arg 1: the filter
    "mysticalagriculture:earth_essence", // Arg 2: the item to replace
    "ars_nouveau:earth_essence", // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );
  event.replaceInput(
    { input: "mysticalagriculture:air_essence" }, // Arg 1: the filter
    "mysticalagriculture:air_essence", // Arg 2: the item to replace
    "ars_nouveau:air_essence", // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );

  event.replaceOutput(
    { output: "mysticalagriculture:water_essence" },
    "mysticalagriculture:water_essence",
    "ars_nouveau:water_essence",
  );
  event.replaceOutput(
    { output: "mysticalagriculture:fire_essence" },
    "mysticalagriculture:fire_essence",
    "ars_nouveau:fire_essence",
  );
  event.replaceOutput(
    { output: "mysticalagriculture:earth_essence" },
    "mysticalagriculture:earth_essence",
    "ars_nouveau:earth_essence",
  );
  event.replaceOutput(
    { output: "mysticalagriculture:air_essence" },
    "mysticalagriculture:air_essence",
    "ars_nouveau:air_essence",
  );

  // THIS LINE IS ALSO IMPORTANT!
  // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
  event.recipes.create.finalize();
});
