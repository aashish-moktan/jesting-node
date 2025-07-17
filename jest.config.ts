import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.ts"],
  moduleFileExtensions: ["ts", "js", "json"],
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1", // if you use path aliases
  },
  clearMocks: true,
  coverageDirectory: "coverage",
};

export default config;
