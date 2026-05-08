// [customrecipe] type=Shaped 3x3 | out=hazennstuff:legionnaire_warlock_axe | in=create:sturdy_sheet,forbidden_arcanus:obsidiansteel_ingot,mysticalagriculture:awakened_supremium_axe,forbidden_arcanus:dark_nether_star,ars_nouveau:wilden_tribute
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('hazennstuff:legionnaire_warlock_axe', 1),
    [
      ' AA',
      'BCD',
      'EB '
    ],
    {
      A: 'create:sturdy_sheet',
      B: 'forbidden_arcanus:obsidiansteel_ingot',
      C: 'mysticalagriculture:awakened_supremium_axe',
      D: 'forbidden_arcanus:dark_nether_star',
      E: 'ars_nouveau:wilden_tribute'
    }
  )
})
