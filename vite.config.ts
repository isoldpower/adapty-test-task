import { defineConfig } from 'vite'
import { resolve } from 'path';

import tanstackRouter from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
      react(),
      tanstackRouter({
          target: 'react',
          autoCodeSplitting: true,
          routesDirectory: resolve(import.meta.dirname, 'src', 'app', 'routes'),
          generatedRouteTree: resolve(import.meta.dirname, 'src', 'app', 'routes', 'routeTree.gen.ts'),
      }),
      tsconfigPaths()
  ],
})
