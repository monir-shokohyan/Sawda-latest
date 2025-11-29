import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import { qrcode } from 'vite-plugin-qrcode'
import tailwindcss from '@tailwindcss/vite'

export default () => {
  return defineConfig({
    plugins: [react(), viteTsconfigPaths(), qrcode(), tailwindcss()],
    server: {
      open: true,
      port: 3000,
      host: '0.0.0.0',
    },
    preview: {
      open: true,
      port: 3000,
      host: '0.0.0.0',
    },
  })
}
