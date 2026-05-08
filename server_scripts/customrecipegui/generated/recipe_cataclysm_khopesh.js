// [customrecipe] type=Shaped 3x3 | out=cataclysm:khopesh | in=forbidden_arcanus:deorum_ingot,constructionstick:copper_stick
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('cataclysm:khopesh', 1),
    [
      ' AA',
      ' A ',
      'B  '
    ],
    {
      A: 'forbidden_arcanus:deorum_ingot',
      B: 'constructionstick:copper_stick'
    }
  )
})
