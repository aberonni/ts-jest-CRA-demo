function sum(a: number, b: number) {
  return a + b;
}

test("sum", () => {
  expect(sum(1, "2")).toEqual("12");
});
