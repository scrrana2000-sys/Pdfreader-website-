import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  const repository = process.env.GITHUB_REPOSITORY;
  const repoName = repository ? repository.split('/')[1] : '';

  // GitHub Actions also builds the Cloud Run version. Do not infer GitHub
  // Pages hosting merely from GITHUB_REPOSITORY, or production assets get a
  // /<repo>/ prefix and the React app renders blank on root-hosted services.
  const base =
    process.env.VITE_BASE_URL ||
    (process.env.GITHUB_PAGES === 'true' && repoName ? `/${repoName}/` : '/');

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
