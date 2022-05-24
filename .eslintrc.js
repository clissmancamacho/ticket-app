module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ["react"],
  extends: ["eslint:recommended"],
  parser: "babel-eslint",
}