// [customrecipe] type=Shapeless 3x3 | out=cataclysm:lacrima | in=mysticalagriculture:imperium_gemstone,forbidden_arcanus:arcane_crystal_dust,ars_nouveau:water_essence
ServerEvents.recipes(event => {
  event.shapeless('1x cataclysm:lacrima', [
    'mysticalagriculture:imperium_gemstone',
    'mysticalagriculture:imperium_gemstone',
    'forbidden_arcanus:arcane_crystal_dust',
    'ars_nouveau:water_essence',
    'forbidden_arcanus:arcane_crystal_dust'
  ])
})
