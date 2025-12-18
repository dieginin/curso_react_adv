module.exports = {
  globDirectory: "dist",
  globPatterns: ["**/*.{svg,webmanifest,html,css,js}"],
  swDest: "dist/sw.js",
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
}
