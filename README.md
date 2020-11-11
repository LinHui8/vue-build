##安装依赖：npm install
```

##启动项目：npm run serve
```

##打包项目：npm run build
```

##代码格式检测：npm run lint
```

##项目目录结构：
###src
  *--api（接口）
  *--assets（静态文件：图片，字体等）
  *--components（组件）
  *--config（项目配置：开发环境配置、生成环境配置、测试环境配置）
  *--directive（自定义指令）
  *--utils（工具类：cookies、storages、http）
  *--router（路由）
  *--plugins（插件：i18n切换语言...、工具方法）
  *--store（状态）
  *--filters（过滤器）
     *--module（模块：例如用户的状态：用户信息）

*.env（所有环境被载入）
*.env.development（开发环境载入）
*.env.production（打包环境载入）