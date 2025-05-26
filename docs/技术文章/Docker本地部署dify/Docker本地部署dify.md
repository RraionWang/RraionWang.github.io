# Docker本地部署dify


## 参考和鸣谢
感谢langgenius提供dify开源资料以及[部署教程](https://github.com/langgenius/dify)

感谢dosubot机器人提供关于dify的500错误的[解答](https://github.com/langgenius/dify/issues/18161)

## 前置条件
1. 一台内存>=8G的服务器(推荐16G，但是我本人没有本地的LLM，所以8G也可以)
2. 预装docker

## 步骤

## FAQ


### 1. 使用Windows部署小智出现500错误
请将.env文件中的两个配置项目改为如下：
```sh
PLUGIN_S3_USE_AWS_MANAGED_IAM=false
PLUGIN_S3_USE_PATH_STYLE=false
```
其次将docker-compose.yaml中的环境变量设置默认值如
```sh
plugin_daemon:
  environment:
    S3_USE_AWS_MANAGED_IAM: ${PLUGIN_S3_USE_AWS_MANAGED_IAM:-false}
```
