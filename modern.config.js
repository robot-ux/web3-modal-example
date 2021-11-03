import { defineConfig } from '@modern-js/app-tools';

export default defineConfig({
  runtime: {
    state: true,
    router: {
      supportHtml5History: false,
    },
  },
  output: {
    assetPrefix: '../../'
  },
});
