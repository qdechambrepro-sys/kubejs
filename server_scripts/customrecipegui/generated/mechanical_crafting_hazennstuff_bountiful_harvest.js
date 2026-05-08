// [customrecipe] type=MechanicalCrafting | out=hazennstuff:bountiful_harvest | in=mysticalagriculture:inferium_ingot,mysticalagriculture:prudentium_ingot,mysticalagriculture:supremium_scythe,mysticalagriculture:tertium_ingot,mysticalagriculture:awakened_supremium_ingot,minecraft:stick,mysticalagriculture:imperium_ingot
ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting(
    'hazennstuff:bountiful_harvest',
    [
      ' AB ',
      ' CDE',
      'F  G'
    ],
    {
      A: 'mysticalagriculture:inferium_ingot',
      B: 'mysticalagriculture:prudentium_ingot',
      C: 'mysticalagriculture:supremium_scythe',
      D: 'mysticalagriculture:tertium_ingot',
      E: 'mysticalagriculture:awakened_supremium_ingot',
      F: 'minecraft:stick',
      G: 'mysticalagriculture:imperium_ingot'
    }
  )
})
