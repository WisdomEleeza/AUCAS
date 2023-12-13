module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "plugin: @typescript-eslint/recommended",
    "prettier",
    "plugin: prettier/recommended",
  ],
};
