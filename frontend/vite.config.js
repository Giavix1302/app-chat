import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Chạy trên http://localhost:5173
    strictPort: true, // Đảm bảo dùng đúng cổng, nếu bị chiếm thì báo lỗi
  },
})
