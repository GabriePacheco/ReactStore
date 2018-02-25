const path = require('path');


var config ={
  entry:'./main.js',
  output:{
    path: path.resolve(__dirname, './'),
    filename:'index.js'
  },
  devServer:{
    inline: true,
    port: 8080
  },
  devServer: {
    historyApiFallback: true
  },
  module:{
    loaders:[
      {
        test:/\.jsx?$/,
        loader:'babel-loader',
        exclude: /node_modules/,
        query:{
          presets:['es2015','react']
        }
      }
    ]
  }
};

module.exports = config;
