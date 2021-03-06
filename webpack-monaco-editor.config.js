const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/client/MonacoEditor.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'monaco-editor.js',
    path: path.resolve(__dirname, 'dist/client')
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['html', 'css', 'javascript'],
    })
  ],
};
