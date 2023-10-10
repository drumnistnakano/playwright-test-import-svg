import react from '@vitejs/plugin-react'
import * as path from 'path'
import { loadEnv, UserConfigExport } from 'vite'

// https://vitejs.dev/config/
export default async ({ mode }): Promise<UserConfigExport> => {
  const config: UserConfigExport = {
    plugins: [react(), htmlPlugin(loadEnv(mode, '.'))],
    resolve: {
      alias: {
        '@/': path.join(__dirname, 'src/'),
      },
    },
  }

  return config
}

/**
 * Replace env variables in index.html
 * @see https://github.com/vitejs/vite/issues/3105#issuecomment-939703781
 * @example `%VITE_MY_ENV%`
 * @see https://vitejs.dev/guide/api-plugin.html#transformindexhtml
 */
function htmlPlugin(env: ReturnType<typeof loadEnv>) {
  return {
    name: 'html-transform',
    transformIndexHtml: {
      enforce: 'pre' as const,
      transform: (html: string): string =>
        html.replace(/%(.*?)%/g, (match, p1) => env[p1] ?? match),
    },
  }
}
