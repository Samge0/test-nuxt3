# Nuxt 3 的测试仓库

运行本测试仓库请参考： [README-RUN.md](README-RUN.md)

## nuxt3测试库的流程目录
- [用nvm安装node环境+安装yarn](#用nvm安装node环境)
- [创建nuxt项目](#创建nuxt项目)
- [添加UI框架Vuetify](#添加UI框架Vuetify)
- [添加element-plus](#添加element-plus)
- [添加scss](#添加scss)
- [添加autoprefixer](#添加autoprefixer)
- [添加tailwindcss](#添加tailwindcss)
- [添加pinia](#添加pinia)
- [添加nuxt-icons](#添加nuxt-icons)


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
![image](https://github.com/user-attachments/assets/f5e6f8e6-e045-4325-a010-d68beae8e6fa)

运行
```shell
yarn run dev
```
![image](https://github.com/user-attachments/assets/7be4a5ac-1517-45f6-b9c0-dcc981372ab4)


### 添加UI框架Vuetify

[点击查看Vuetify的github仓库>>](https://github.com/vuetifyjs/vuetify)

- 添加依赖
    ```shell
    yarn add vuetify@next
    yarn add -D vuetify vite-plugin-vuetify
    yarn add @mdi/font
    ```

- 创建 Vuetify 插件
项目根目录创建一个`plugins`文件夹，然后创建一个名为`vuetify.js`的文件
    ```shell
    mkdir plugins
    
    # linux下创建vuetify.js
    touch plugins/vuetify.js
    
    # windows下创建vuetify.js
    New-Item -Path plugins/vuetify.js -ItemType File
    ```
    
- 粘贴`vuetify.js`文件的内容：
    ```text
    // plugins/vuetify.js
    import { createVuetify } from 'vuetify'
    import '@mdi/font/css/materialdesignicons.css'
    import 'vuetify/styles'
    import * as components from 'vuetify/components'
    import * as directives from 'vuetify/directives'
    
    export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        ssr: true,
    })
    
    nuxtApp.vueApp.use(vuetify)
    })
    ```
    
- 更新 `nuxt.config.ts` 中配置
    ```text
    // https://nuxt.com/docs/api/configuration/nuxt-config
    import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
    
    export default defineNuxtConfig({
    compatibilityDate: '2024-09-19',
    devtools: { enabled: true },
    css: [
        '@/node_modules/vuetify/lib/styles/main.css',
    ],
    build: {
        transpile: ['vuetify'],
    },
    modules:[
        (_options, nuxt) => {
        nuxt.hooks.hook('vite:extendConfig', (config) => {
            // @ts-expect-error
            config.plugins.push(vuetify({ autoImport: true }))
        })
        },
    ],
    vite: {
        define: {
        'process.env.DEBUG': false,
        },
        vue: {
        template: {
            transformAssetUrls,
        },
        },
    }
    })
    ```

- 创建 测试页面
  
    项目根目录创建一个`pages`文件夹，然后创建一个名为`index.vue`跟`test.vue`的文件，测试vuetify的组件是否正常
    ```shell
    mkdir pages
    
    # linux下创建
    touch pages/index.vue
    touch pages/test.vue
    
    # windows下创建
    New-Item -Path pages/index.vue -ItemType File
    New-Item -Path pages/test.vue -ItemType File
    ```
    
- 粘贴`index.vue`文件的内容：
    ```vue
    <template>
        <div class="main">
            <h1>Hello World</h1>
            <nuxt-link to="/test" class="main">test page</nuxt-link> |
        </div>
    </template>

    <script lang="ts" setup></script>

    <style scoped></style>
    ```
    
- 粘贴`test.vue`文件的内容：
    ```vue
    <template>
        <div>
            <v-btn color="success" @click="showVuetifyToast">Vuetify 按钮</v-btn>
        </div>
    </template>

    <script>
        export default {
            methods: {
                showVuetifyToast() {
                    console.log("Vuetify 按钮 被点击了！");
                },
            },
        };
    </script>
    ```
    
- 修改`app.vue`文件的内容：
    ```vue
    <template>
        <NuxtPage />
    </template>
    ```
  
- 修改完毕后如果不能正常渲染，可重新运行`yarn run dev`

    ![image](https://github.com/user-attachments/assets/d52534e4-e98f-432b-bb54-7cf5db8a578c)
    ![image](https://github.com/user-attachments/assets/f861aad0-9514-42ac-8edd-6c400af56827)


### 添加element-plus

可选，[点击查看element-plus的github仓库>>](https://github.com/element-plus/element-plus)

- 添加依赖
    ```shell
    yarn add element-plus @element-plus/nuxt
    ```
    
- 更新 `nuxt.config.ts` 中配置（在`css`跟`modules`中追加`element-plus`的配置）
    ```text
    export default defineNuxtConfig({
        // ... other configs
        css: [
            // ... other configs
            '@/node_modules/element-plus/dist/index.css',
            '@/node_modules/element-plus/theme-chalk/display.css',
        ],
        // ... other configs
        modules:[
            // ... other configs
            '@element-plus/nuxt',
        ],
    })
    ```
    
- 在`test.vue`文件中增加`element-plus`的控件测试：
    ```vue
    <template>
        <div>
            <el-button type="primary" @click="showElementPlusToast">Element Plus 按钮</el-button><br/><br/>
            <v-btn color="success" @click="showVuetifyToast">Vuetify 按钮</v-btn>
        </div>
    </template>

    <script>
        export default {
            methods: {
                showElementPlusToast() {
                    console.log("Element Plus 按钮 被点击了！");
                },
                showVuetifyToast() {
                    console.log("Vuetify 按钮 被点击了！");
                },
            },
        };
    </script>
    ```
    ![image](https://github.com/user-attachments/assets/9351c51e-bb88-4fc0-b650-eb75f9dcac69)


### 添加scss
- 添加依赖
    ```shell
    yarn add sass --dev
    ```

- 新建`assets/css`目录并添加一个`common.scss`文件
    ```shell
    mkdir assets/css
    
    # linux下创建
    touch assets/css/common.scss
    
    # windows下创建
    New-Item -Path assets/css/common.scss -ItemType File
    ```

- 在`pages/index.vue`中引入`common.scss`文件
    ```vue
    <template>
        <div class="main">
            <h1>Hello World</h1>
            <nuxt-link to="/test" class="main">test page</nuxt-link> |
        </div>
    </template>

    <script lang="ts" setup></script>

    <style scoped>
        @import '../assets/css/common.scss';
    </style>
    ```
    
- 如果需要全局引入，则需要更新 `nuxt.config.ts` 中配置（在`css`中追加`common.scss`）
    ```text
    export default defineNuxtConfig({
        // ... other configs
        css: [
            // ... other configs
            '@/assets/css/common.scss',
        ],
        // ... other configs
    })
    ```
![image](https://github.com/user-attachments/assets/7409158c-8864-4de1-b84c-6e4c889f218f)


### 添加autoprefixer
- 添加依赖
    ```shell
    yarn add autoprefixer --dev
    ```

- 更新 `nuxt.config.ts` 中配置
    ```text
    export default defineNuxtConfig({
        // ... other configs
        postcss: {
            plugins:{
                // 自动添加浏览器前缀
                autoprefixer: {}
            }
        },
        // ... other configs
    })
    ```
    
    
### 添加tailwindcss
- 添加依赖
    ```shell
    yarn add tailwindcss --dev
    ```

- 更新 `nuxt.config.ts` 中配置
    ```text
    export default defineNuxtConfig({
        // ... other configs
        postcss: {
            plugins:{
                // ... other configs
                // 预配置的tailwindcss，用于快速利用已有的组合css
                tailwindcss: {},
            }
        },
        // ... other configs
    })
    ```

- 在项目根目录创建 `tailwind.config.js`
    ```shell
    # linux下创建
    touch tailwind.config.js
    
    # windows下创建
    New-Item -Path tailwind.config.js -ItemType File
    ```
    
- 粘贴`tailwind.config.js`文件的内容：
    ```js
    module.exports = {
        content: [
            "./components/**/*.{js,vue,ts}",
            "./layouts/**/*.vue",
            "./pages/**/*.vue",
            "./plugins/**/*.{js,ts}",
            "./nuxt.config.{js,ts}",
            "./app.vue",
        ],
        theme: {
            extend: {
            colors: {
                dark: "#000",
            },
            screens: {},
            },
        },
        plugins: [],
    };
    ```
    
- 修改 `common.scss` 支持 `tailwind`
    ```scss
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .main {
        color: blue;
    }
    ```

- 在`pages/index.vue`中引入`tailwind`的样式进行测试
    ```vue
    <template>
        <div class="main">
            <h1>Hello World</h1>
            <div class="bg-blue-400 text-white pt-4 pr-4 pb-4 pl-0">测试tailwindcss样式</div>
            <nuxt-link to="/test" class="main">test page</nuxt-link> |
        </div>
    </template>

    <script lang="ts" setup></script>

    <style scoped>
        @import '../assets/css/common.scss';
    </style>
    ```
    ![image](https://github.com/user-attachments/assets/88edf0e7-0903-420f-8179-e4ed616e29d4)

    
### 添加pinia
- 添加依赖
    ```shell
    yarn add pinia
    yarn add @pinia/nuxt
    yarn add pinia-plugin-persist
    ```

- 更新 `nuxt.config.ts` 中配置（在`modules`中追加`@pinia/nuxt`）
    ```text
    export default defineNuxtConfig({
        // ... other configs
        modules:[
            // ... other configs
            '@pinia/nuxt',
        ],
    })
    ```

- 新建`store`目录并添加一个`index.ts`跟`user.ts`测试文件
    ```shell
    mkdir store
    
    # linux下创建
    touch store/index.ts
    touch store/user.ts
    
    # windows下创建
    New-Item -Path store/index.ts -ItemType File
    New-Item -Path store/user.ts -ItemType File
    ```
    
- 粘贴`store/index.ts`文件的内容：
    ```ts
    import { createPinia} from 'pinia'
    import piniaPluginPersist from 'pinia-plugin-persist';
    
    // 创建
    const pinia = createPinia();
    pinia.use(piniaPluginPersist);
    
    // 导出
    export default pinia;
    ```
    
- 粘贴`store/user.ts`文件的内容：
    ```ts
    import {acceptHMRUpdate, defineStore} from "pinia";
 
    export const useStore =  defineStore("user", {
        state: () => {
            return {
                token: localStorage.getItem('token') || "",
                name: localStorage.getItem('name') || '未登录'
            };
        },
        actions: {
            // 用户登录
            login(data: any) {
                this.setToken(data);
            },
            // 写入名字
            setName(data: any) {
                this.name = data;
                localStorage.setItem('name', data);
            },
            // 单独更新或写入token
            setToken(data: any) {
                this.token = data;
                localStorage.setItem('token', data);
            },
            // 用户登出
            logout() {
                this.name = '未登录'
                this.token = '';
                localStorage.removeItem('token');
                localStorage.removeItem('name');
            }
        },
    });
    
    if (import.meta.hot) {
        import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
    }
    ```

- 新建`pages/teststore.vue`用于测试`pinia`
    ```shell
    mkdir pages
    
    # linux下创建
    touch pages/teststore.vue
    
    # windows下创建
    New-Item -Path pages/teststore.vue -ItemType File
    ```
    
- 粘贴`pages/teststore.vue`文件的内容：
    ```vue
    <template>
        <div class="p-4 bg-blue-200">

            <div class="flex items-center space-x-0">
                <el-button @click="changeName" type="primary" class="mr-2" style="width: 100%; max-width: 100px;">改变名称</el-button>
                <span class="text-red-500">{{ store.name }}</span>
            </div>

            <div class="flex items-center space-x-0 mt-4">
                <el-button @click="setToken" type="primary" class="mr-2" style="width: 100%; max-width: 100px;">登录</el-button>
                <span class="text-red-500">{{ store.token }}</span>
            </div>

        </div>
    </template>

    <script lang="ts" setup>
        import { useStore } from '../store/user'
        const store = useStore()

        function changeName(): void {
            let name = `New Name ${Math.random().toString(36).substr(2, 9)}`
            store.setName(name)
        }

        function setToken(): void {
            let token = `jwt-${Math.random().toString(36).substr(2, 9)}`
            store.setToken(token)
        }

    </script>

    <style scoped>
    </style>
    ```

- 在`pages/index.vue`中引入`teststore的页面路由`
    ```vue
    <template>
        <div class="main">
            <h1>Hello World</h1>
            <div class="bg-blue-400 text-white pt-4 pr-4 pb-4 pl-0">测试tailwindcss样式</div>
            <nuxt-link to="/test" class="main">test page</nuxt-link> | 
            <nuxt-link to="/teststore" class="main">teststore page</nuxt-link> | 
        </div>
    </template>

    <script lang="ts" setup></script>

    <style scoped>
        @import '../assets/css/common.scss';
    </style>
    ```
    ![image](https://github.com/user-attachments/assets/909f783c-65be-4682-9ebd-aaa7f2641eb7)
    ![image](https://github.com/user-attachments/assets/5e51e490-32cc-4b32-aaf6-275f06ca8eb8)

    
### 添加nuxt-icons
- 添加依赖
    ```shell
    yarn add nuxt-icons
    ```

- 更新 `nuxt.config.ts` 中配置（在`modules`中追加`nuxt-icons`）
    ```text
    export default defineNuxtConfig({
        // ... other configs
        modules:[
            // ... other configs
            'nuxt-icons',
        ],
    })
    ```

- 新建`assets/icons/test.svg`图标文件用于测试图标的加载
    ```shell
    mkdir assets/icons
    
    # linux下创建
    touch assets/icons/test.svg
    
    # windows下创建
    New-Item -Path assets/icons/test.svg -ItemType File
    ```

- 粘贴`assets/icons/test.svg`文件的内容：
    ```xml
    <?xml version="1.0" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1726725370708"
        class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="891"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
        <path
            d="M512 85.504c235.52 0 426.496 190.976 426.496 426.496S747.52 938.496 512 938.496 85.504 747.52 85.504 512 276.48 85.504 512 85.504z m0 84.992c-188.416 0-341.504 152.576-341.504 341.504s152.576 341.504 341.504 341.504c188.416 0 341.504-153.088 341.504-341.504 0-188.416-153.088-341.504-341.504-341.504z m-40.448 156.672l121.856 369.664H509.44l-27.136-89.6H361.984l-27.648 89.6H256l122.368-369.664h93.184z m256 0v369.664h-78.336V327.168h78.336zM424.448 402.944h-3.584L377.344 547.84h90.112l-43.008-144.896z"
            p-id="892" fill="#1296db" fill="currentColor"></path>
    </svg>
    ```

- 在`pages/index.vue`中引入`nuxt-icon`控件
    ```vue
    <nuxt-icon name="test" class="text-[100px]" filled/>
    ```
    
- 备注说明

    需要在 svg中使用`fill="currentColor"` + nuxt-icon中配置`filled` 才能使用svg原始颜色，否则svg的颜色值会被父级的颜色配置覆盖

