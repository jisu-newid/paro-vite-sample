import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: [{ find: '@', replacement: '/src' }]  // 절대경로 설정
    },
    plugins: [
        react(),
        legacy({
            targets: ['chrome >= 69'],
            polyfills: true,
            renderLegacyChunks: false   // 단일 번들파일 생성
        }),
        tailwindcss()
    ],
    build: {
        cssTarget: 'chrome69',
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html'
            },
            output: {
                entryFileNames: 'bundle.js',
                format: 'iife'
            }
        }
    }
});
