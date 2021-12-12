describe("split words function", () => {

  it("returns the array of words reconstructed from string", () => {
    var actual = getWordsSplit(['quick', 'brown', 'the', 'fox'], 'thequickbrownfox');
    expect(actual).toEqual(['the', 'quick', 'brown', 'fox']);
  });

  it("returns first array found from several reconstructions", () => {
    var actual = getWordsSplit(['bed', 'bath', 'and', 'beyond', 'bedbath'], 'bedbathandbeyond');
    expect(actual).toEqual(['bed','bath','and','beyond']);
  });

  it("returns empty array due to no possible reconstruction", () => {
    var actual = getWordsSplit(['bed', 'bath', 'and', 'beyond', 'bedbath'], 'bednightbathandbeyond');
    expect(actual).toEqual([]);
  });

  it("returns empty array due to empty words array parameter", () => {
    var actual = getWordsSplit([], 'thequickbrownfox');
    expect(actual).toEqual([]);
  });

  it("returns empty array due to empty string parameter", () => {
    var actual = getWordsSplit(['quick', 'brown', 'the', 'fox'], '');
    expect(actual).toEqual([]);
  });

  it("returns empty array due to no string parameter", () => {
    var actual = getWordsSplit(['quick', 'brown', 'the', 'fox']);
    expect(actual).toEqual([]);
  });

  it("returns empty array due to words array of wrong type", () => {
    var actual = getWordsSplit('array', 'bedbathandbeyond');
    expect(actual).toEqual([]);
  });

})