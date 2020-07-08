

describe('#canBuildNote', function() {
	

	it("returns false if cannot build the note with repeated letters", function() {
		let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
		"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
		let note = "iisat"
		expect(canBuildNote(magazine, note)).toEqual(false)
	})


})
