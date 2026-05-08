// [customrecipe] type=Deploying | out=cataclysm:coral_bardiche | in=minecraft:trident+mysticalagriculture:prudentium_ingot
ServerEvents.recipes(event => {
  event.recipes.create.deploying(
    ['cataclysm:coral_bardiche'],
    ['minecraft:trident', 'mysticalagriculture:prudentium_ingot']
  )
})
