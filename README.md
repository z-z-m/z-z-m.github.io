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

- 全局安装electron(ok)
`yarn global add electron`

- Option1 创建app(ok)
`https://www.electronforge.io/`
`yarn create electron-app my-app`

- Option2 导入已有项目(ok)
```
cd my-app
yarn add --dev @electron-forge/cli
yarn electron-forge import
```



- 测试(ok)
```
cd my-app
yarn start
```

- 打包(卡死)
`yarn package`
`yarn make`
`yarn publish`

- 使用electron-builder打包(ok)
`yarn global add electron-builder` 
`electron-builder --win --x64`

## 常见问题
- Install Dependancies卡住解决方案(ok)
```
https://blog.csdn.net/xia_yanbing/article/details/113662899
在Administrator/.npmrc里做如下设置，
electron_mirror="https://npm.taobao.org/mirrors/electron/"
electron-builder-binaries="https://npm.taobao.org/mirrors/electron-builder-binaries/"
如果您使用的是yarn，请将 ~/.npmrc里添加以下配置
ELECTRON_MIRROR "https://npm.taobao.org/mirrors/electron/"
ELECTRON-BUILDER-BINARIES "https://npm.taobao.org/mirrors/electron-builder-binaries/"

另外
阿里的命名跟github的不一样（看下面链接），所以还要再设置ELECTRON_CUSTOM_DIR
ELECTRON_CUSTOM_DIR="12.0.2"
ELECTRON_CUSTOM_DIR "12.0.2"
```

- Preparing to Package Application for arch 卡住(未解决)
- 暂时未知，可能需要升级node到最新版本

- electron-builder下载依赖库错误(实验成功)(ok)
- https://github.com/electron/electron/releases  文件以及对应SHASUMS256.txt放到
- C:\Users\*****\AppData\Local\electron\Cache
- winCodeSign
- https://github.com/electron-userland/electron-builder-binaries/releases/download/winCodeSign-2.6.0/winCodeSign-2.6.0.7z
- 下载解压放到 C:\Users\Administrator\AppData\Local\electron-builder\Cache\winCodeSign\winCodeSign-2.6.0
- nsis 
- https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-3.0.4.1/nsis-3.0.4.1.7z
- https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-resources-3.4.1/nsis-resources-3.4.1.7z
- 二者下载后解压到C:\Users\*****\AppData\Local\electron-builder\cache\nsis
- C:\Users\*****\AppData\Local\electron-builder\cache\nsis
- C:\Users\Administrator\AppData\Local\electron-builder\Cache\nsis\nsis-3.0.4.1
- C:\Users\Administrator\AppData\Local\electron-builder\Cache\nsis\nsis-resources-3.4.1


# other
```
yarn config set registry https://registry.npm.taobao.org
yarn config set sass_binary_site "https://npm.taobao.org/mirrors/node-sass/"
yarn config set phantomjs_cdnurl "http://cnpmjs.org/downloads"
yarn config set electron_mirror "https://npm.taobao.org/mirrors/electron/"
yarn config set sqlite3_binary_host_mirror "https://foxgis.oss-cn-shanghai.aliyuncs.com/"
yarn config set profiler_binary_host_mirror "https://npm.taobao.org/mirrors/node-inspector/"
yarn config set chromedriver_cdnurl "https://cdn.npm.taobao.org/dist/chromedriver"
```