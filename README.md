# Vue + webpack4 搭建音乐播放器 (开发中....)
https://starmooms.github.io/vueMusic/

### 数据来源
数据来自qq音乐，大部分接口是`JSONP`抓取交易，少部分接口限制了`host`，不能直接抓取。通过`express`和`axios`代理设置`header`，绕过`host`限制。PS：具体看`prod.server.js`文件。
而对于静态服务器设置了几条静态数据异步加载。写在`api`文件夹中。

### webpack4配置
为了开发中使用`express`代理，这里弃用`webpack-dev-server`,改用`webpack-dev-middleware`并用`webpack-hot-middleware`支持模块热更新。PS：具体看`prod.server.js`和`webpack.config.js`文件。


### 构建
#### 开发环境

``` bash
# install dependencies
npm install

# server with hot reload
npm run dev
```
### 生成环境
``` bash
# build for production with minification
npm run build
# run
npm run server
```
