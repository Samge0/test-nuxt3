# Nuxt 3 的测试仓库

运行本测试仓库请参考： [README-RUN.md](README-RUN.md)

## nuxt3测试库的流程目录
- [用nvm安装node环境+安装yarn](#用nvm安装node环境)
- [创建nuxt项目](#创建nuxt项目)

### 用nvm安装node环境
[点击查看nvm的github仓库>>](https://github.com/nvm-sh/nvm)

[点击查看nvm-windows的github仓库（windows系统这这个）>>](https://github.com/coreybutler/nvm-windows)

- 安装`nvm`后，用下面命令安装nodejs
    ```shell
    nvm install 20
    ```

- 使用指定版本的nodejs
    ```shell
    nvm use 20
    ```

- 查看nodejs版本
    ```shell
    node --version
    ```

- 安装yarn
    ```shell
    npm install -g yarn
    ```

### 创建nuxt项目
```shell
npx nuxi@latest init test-nuxt3
```