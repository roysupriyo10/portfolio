// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import { resolve } from "path";
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@/": resolve(__dirname, "src"),
//     },
//   },
// });

import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react-swc";
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  }
});

