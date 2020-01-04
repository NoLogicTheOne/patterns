const singleton = require("../singleton.js")

it("function correct exports", () => {
	expect(typeof singleton).toEqual("object")
})

it("has once instance", () => {
	let i1 = singleton.getInstance()
	i1.value = 5
	let i2 = singleton.getInstance()
	
	expect(i1.value).toEqual(i2.value)
})

it("impossible to cloning", () => {
	let i1 = singleton.getInstance()
	let singleton2 = {...singleton}

	expect(typeof singleton2.getInstance).toEqual("undefined")
})