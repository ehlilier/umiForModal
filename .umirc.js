export default {
  hash: true,
  plugins: [
    ['umi-plugin-react', {
      dva: true,
      antd: true,
      // hd: true,
      fastClick: true,
      library: 'preact',
      dynamicImport: {
        webpackChunkName: true,
      },
      routes: {
        exclude: [
          /models/,
          /services/,
          /components/,
        ],
      }
    }],
  ],
  exportStatic: true,
};
