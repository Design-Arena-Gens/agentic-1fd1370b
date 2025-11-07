import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./"
});

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom"
};

export default createJestConfig(customJestConfig);
