import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import { qrcode } from 'vite-plugin-qrcode'

export default () => {
  return defineConfig({
    base: './',
    plugins: [react(), viteTsconfigPaths(), qrcode()],
    clearScreen:false,
    server: {
      open: true,
      port: 3000,
      strictPort: true,
      host: '0.0.0.0',
    },
    preview: {
      open: true,
      port: 3000,
      host: '0.0.0.0',
    },
  })
}
