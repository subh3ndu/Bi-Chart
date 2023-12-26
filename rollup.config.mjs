import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.ts", // Entry point of your TypeScript code
  output: {
    file: "dist/bichart.js", // Output bundle file
    format: "cjs", // Choose the format (e.g., 'umd', 'cjs', 'esm')
    name: "BiChart", // Name of your library (for UMD bundles)
  },
  plugins: [
    nodeResolve(), // Resolve modules from node_modules
    commonjs(), // Convert CommonJS modules to ES6
    typescript({
      tsconfig: "tsconfig.json", // Specify the path to your tsconfig.json file
    }),
  ],
};
