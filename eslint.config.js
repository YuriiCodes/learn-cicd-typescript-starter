import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import pluginSecurity from "eslint-plugin-security";

export default defineConfig([
  globalIgnores(["node_modules", "dist", "build", "coverage"]),
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js, pluginSecurity }, extends: ["js/recommended"]},
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.browser }},
  tseslint.configs.recommended,
  pluginSecurity.configs.recommended
]);