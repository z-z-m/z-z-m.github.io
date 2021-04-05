# z-z-m.github.io

# electronforge
- install node and npm
`https://nodejs.org/en/download/`

- 换源
`npm config set registry http://registry.npm.taobao.org`

- 安装yarn(npm 替代工具)
```
npm install -g yarn //换源

yarn config get registry  // 查看yarn当前镜像源
yarn config set registry https://registry.npm.taobao.org/  // 设置yarn镜像源为淘宝镜像

```

- 全局安装electron
`yarn global add electron`

- Option1 创建app
`https://www.electronforge.io/`
`yarn create electron-app my-app`

- Option2 导入已有项目
```
cd my-app
yarn add --dev @electron-forge/cli
yarn electron-forge import
```

- 卡住解决方案
```
https://blog.csdn.net/xia_yanbing/article/details/113662899
在Administrator/.npmrc里做如下设置，
electron_mirror="https://npm.taobao.org/mirrors/electron/"
如果您使用的是yarn，请将 ~/.npmrc里添加以下配置
ELECTRON_MIRROR "https://npm.taobao.org/mirrors/electron/"
```

- 测试
```
cd my-app
yarn start
```

- 打包
`yarn make`