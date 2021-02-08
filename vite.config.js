import vue from "@vitejs/plugin-vue";

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  alias: {
    vue: "https://cdn.jsdelivr.net/npm/vue@3.0.5/dist/vue.esm-browser.js",
    // "ant-design-vue": "https://cdn.jsdelivr.net/npm/ant-design-vue@2.0.0/lib/index.min.js",
    // moment: "https://cdn.jsdelivr.net/npm/moment@2.29.1/dist/moment.js",
  },
};
