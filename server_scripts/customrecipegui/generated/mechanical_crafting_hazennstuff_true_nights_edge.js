// [customrecipe] type=MechanicalCrafting | out=hazennstuff:true_nights_edge | in=hazennstuff:demonite_ingot,mysticalagradditions:insanium_ingot,hazennstuff:nights_edge,kubejs:magical_imbued_ingot
ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting(
    'hazennstuff:true_nights_edge',
    [
      '   A',
      '  AB',
      'BCB ',
      'DB  '
    ],
    {
      A: 'hazennstuff:demonite_ingot',
      B: 'mysticalagradditions:insanium_ingot',
      C: 'hazennstuff:nights_edge',
      D: 'kubejs:magical_imbued_ingot'
    }
  )
})
