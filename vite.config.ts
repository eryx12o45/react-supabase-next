import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import pkg from './package.json' with { type: 'json' }

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            fileName: 'index',
            formats: ['cjs', 'es'],
        },
        rollupOptions: {
            external: [
                ...Object.keys(pkg.dependencies ?? {}),
                ...Object.keys(pkg.devDependencies ?? {}),
            ],
            output: {
                esModule: true,
            },
        },
    },
    plugins: [
        dts({
            exclude: ['src/**test.ts*'],
            beforeWriteFile: (filePath, content) => ({
                content,
                filePath: filePath.replace('src', ''),
            }),
            compilerOptions: {
                emitDeclarationOnly: true,
                noEmit: false,
            },
            outDir: 'dist/types',
        }),
    ],
})
