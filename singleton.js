const singleton = (() => {
	let __instance = this
	const hardDescriptor = (defaultValue) => ({
		enumerable: false,
		configurable: false,
		writable: true,
		value: () => defaultValue
	})

	let obj = {}
	Object.defineProperty(obj, "getInstance", hardDescriptor(() => __instance))

	return obj
})()

module.exports = singleton