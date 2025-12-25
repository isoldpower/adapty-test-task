import { defineConfig } from 'vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
    envPrefix: [ 'CLIENT_' ],
    plugins: [
        tanstackStart({
            srcDirectory: 'src',
            router: {
                entry: 'router.ts',
                routesDirectory: 'app/routes',
                generatedRouteTree: 'app/routes/routeTree.gen.ts',
            }
        }),
        tailwindcss(),
        react(),
        tsconfigPaths()
    ],
})
