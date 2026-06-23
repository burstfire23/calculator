import js from "@eslint/js";
import jest from "eslint-plugin-jest";

export default [
  js.configs.recommended,

  {
    files: ["**/*.test.js", "**/*.spec.js"],
    plugins: {
      jest,
    },
    ...jest.configs["flat/recommended"],
  },
];