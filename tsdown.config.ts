import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["esm"],
  clean: true,
  dts: false,
  treeshake: true,
  noExternal: [
    "@actions/core",
  ],
  skipNodeModulesBundle: false,
});
