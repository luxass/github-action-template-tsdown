import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["cjs"],
  clean: true,
  dts: false,
  treeshake: true,
  noExternal: [
    "@actions/core",
  ],
  skipNodeModulesBundle: false,
});
