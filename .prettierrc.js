module.exports = {
  overrides: [
    {
      files: "docs/**/*.html",
      files: "slides/**/*.html",
      options: { parser: "markdown" },
    },
  ],
  tabWidth: 2,
  useTabs: false,
  semi: false,
  arrowParens: "avoid",
}
