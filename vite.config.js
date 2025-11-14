/*
 * @Description:1
 * @Author: JZT.吴健
 * @Date: 2025-04-20 21:57:02
 * @LastEditors: JZT.吴健
 * @LastEditTime: 2025-10-10 14:49:05
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
    plugins: [
        vue(),
        process.env.ANALYZE === 'true' &&
            visualizer({
                open: true,
                gzipSize: true,
                brotliSize: true,
                filename: 'dist/stats.html'
            })
    ].filter(Boolean),
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    // 添加 server 配置
    server: {
        proxy: {
            '/xhApi': {
                target: 'https://mix.whxh.com.cn',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/xhApi/, '')
            },
            '/guoboApi': {
                target: 'https://wapticket.chnmuseum.cn',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/guoboApi/, '')
            }
        }
    }
})
