// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), cssInjectedByJsPlugin()],
//   server: {
//     allowedHosts: [
//       "9cf2-2405-201-c00e-59c5-80a8-d1fe-4905-89ca.ngrok-free.app",
//     ],
//   },
// });



import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, 
    port: 5176
  },
  optimizeDeps: {
    force: true,
    include: ['@reduxjs/toolkit', 'react-redux']
  }
})