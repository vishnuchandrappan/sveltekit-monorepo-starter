import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/*"],
  format: ["esm"],
  outDir: "dist",
  splitting: true,
  sourcemap: false,
  clean: true,
  dts: true,
});
