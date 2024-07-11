import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import purgecss from "vite-plugin-purgecss";

export default defineConfig({
  // plugins: [svelte()],
  plugins: [
    svelte({
      compilerOptions: {
        dev: false,
        css: false,
      },
    }),
    // ,
    // purgecss({
    //   content: ["./src/**/*.html", "./src/**/*.svelte"],
    //   // other options as needed
    // }),
  ],
  build: {
    minify: false,
    sourcemap: false,
    rollupOptions: {
      treeshake: {
        // moduleSideEffects: [
        //   "tailwindcss",
        //   "cssnano",
        //   "vite",
        //   "svelte",
        //   "postcss",
        // ], // Assume no side effects in modules
        // moduleSideEffects: false, // Assume no side effects in modules
        propertyReadSideEffects: false, // Ignore property read side effects
        tryCatchDeoptimization: false, // Ignore try-catch deoptimizations
      },
    },
    // output: {
    //   format: "esm",
    //   compact: true,
    // },
    commonjsOptions: {
      include: /node_modules/,
      transformMixedEsModules: true,
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"], // Remove console.log statements
        passes: 3, // Apply multiple passes for better optimization.
      },
      mangle: { toplevel: true }, // Mangle variable names for smaller output.
      output: {
        comments: false, // Remove comments in the output files.
      },
    },
  },
  optimizeDeps: {
    // Disable dependency pre-bundling
    disabled: true,
  },
});
