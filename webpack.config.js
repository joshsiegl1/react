const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  stats: {warnings: false}, 
  devtool: 'inline-source-map', 
  performance: { 
    hints: false
  }, 
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: { 
    historyApiFallback: true
  }, 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({ 
      title: "vanilla react", 
      filename: "index.html", 
      template: './src/index.html'
  })]
};