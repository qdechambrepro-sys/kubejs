// [customrecipe] type=Crushing | out=forbidden_arcanus:arcane_crystal_dust@50%;forbidden_arcanus:arcane_crystal_dust@50%;forbidden_arcanus:arcane_crystal_dust_speck@50% | in=forbidden_arcanus:arcane_crystal | time=200
ServerEvents.recipes(event => {
  event.recipes.create.crushing(
    [
      CreateItem.of('forbidden_arcanus:arcane_crystal_dust', 0,50),
      CreateItem.of('forbidden_arcanus:arcane_crystal_dust', 0,50),
      CreateItem.of('forbidden_arcanus:arcane_crystal_dust_speck', 0,50)
    ],
    'forbidden_arcanus:arcane_crystal'
  ).processingTime(200)
})
