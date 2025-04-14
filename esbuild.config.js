const { esbuildDecorators } = require('esbuild-plugin-typescript-decorators');

module.exports = {
  sourcemap: true,
  outExtension: {
    '.js': '.js',
  },
  plugins: [
    esbuildDecorators(),
    {
      name: 'externalize-nx-libs',
      setup(build) {
        build.onResolve({ filter: /^@nxnestboilerplate\// }, () => ({
          external: true,
        }));
      },
    },
  ],
  keepNames: true,
};
