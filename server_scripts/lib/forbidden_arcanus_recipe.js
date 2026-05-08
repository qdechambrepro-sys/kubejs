global.fa = (event, data) => {
  event.custom({
    essences: data.essences,
    forge_tier: data.tier,
    inputs: data.inputs,
    magic_circle: "forbidden_arcanus:create_item",
    main_ingredient: { item: data.main },
    result: {
      type: "forbidden_arcanus:create_item",
      result_item: {
        count: data.count ?? 1,
        id: data.result
      }
    }
  })
}