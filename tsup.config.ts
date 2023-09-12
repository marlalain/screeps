import type { Options } from "tsup";

const env = process.env.NODE_ENV;

export const tsup: Options = {
  format: ["cjs"], // generate cjs and esm files
  skipNodeModulesBundle: true,
  entryPoints: ["src/index.ts"],
  watch: true,
  target: "es2020",
  outDir: "../default/",
  entry: ["src/**/*.ts"], //include all files under src
};
