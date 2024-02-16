module.exports = {
    roots: ["./build"], // Specifica la directory in cui si trovano i file di test compilati
    transform: {
      "^.+\\.tsx?$": "ts-jest" // Utilizza il trasformatore ts-jest per i file TypeScript
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js$", // Pattern per individuare i file di test JavaScript
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"] // Estensioni dei moduli da gestire
  };