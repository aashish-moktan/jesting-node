import { greet } from "../src/greeting";

describe("Greeting Tests", () => {
  it("should greet with a name", () => {
    const name = "John";
    const greeting = greet(name);
    expect(greeting).toBe(`Hello, ${name}!`);
  });

  it("should not greet with a name", () => {
    const name = "John";
    const greeting = greet(name);
    expect(greeting).not.toBe(`Hello !`);
  });
});
