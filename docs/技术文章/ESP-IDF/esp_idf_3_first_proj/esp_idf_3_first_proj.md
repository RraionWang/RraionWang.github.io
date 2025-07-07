# ESP-IDF 创建第一个工程

## 任务

## 函数
|名字|原型备注||
|-|-|-|
|创建任务函数|xTaskCreatePinnedToCore |乐鑫实现用于双核|
|指定栈内存的创建函数|xTaskCreateStaticPinnedToCore |一般不使用|
|延时函数|vTaskDelay |会受到高优先级任务影响，延迟从调用时刻开始|
|精确阻塞|vTaskDelayUntil |更精确，规避了时间漂移|

## 创建一个工程
`idf.py create-project prj_name`

## 第一个例程代码
```c
#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include <esp_log.h>

void taskA(void *param)
{
  while (1)
  {
    ESP_LOGI("main", "hello rraion");
    vTaskDelay(pdMS_TO_TICKS(500));
  }
}

void app_main(void)
{
  xTaskCreatePinnedToCore(taskA, "helloworld", 2048, NULL, 3, NULL, 1);
}
```

## FAQ
1. 移动了esp-idf工具链检测异常
- 请使用vscode插件进行工具链路径的重新配置

2. 曲线包含问题。比如无法找到freeRTOS函数等
- 请检查工程路径下的`c_cpp_properties.json`文件中的包含路径的提示是否有问题，比如是否为`"${config:idf.buildPath}/compile_commands.json"`，参考自如下b站网友评论
![alt text](image.png)


