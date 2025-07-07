# 同步，互斥和队列

## 互斥和同步
1. 互斥：不是你用，就是我用，相当于“你死我活”
2. 同步：

|概念	|作用	|工具	|类比|
|-|-|-|-|
|同步（Synchronization）|	控制任务之间的执行顺序，等某个事件发生|	信号量、事件组、任务通知	|等朋友到才一起进电影院|
|互斥（Mutual Exclusion）|	防止多个任务同时访问共享资源	|互斥锁（Mutex）|	办公室打印机一次只能一个人用|

简而言之，

✅ 同步 = 等待某个条件满足再干活

✅ 互斥 = 资源一次只能被一个人用

## 队列相关函数

|简述|	函数名字|	备注|
|-|-|-|
|创建一个队列，并返回队列句柄|	QueueHandle_t xQueueCreate(UBaseType_t uxQueueLength, UBaseType_t uxItemSize)	|成功创建队列后返回队列句柄|
|向队列头部发送一条消息	|BaseType_t xQueueSend(QueueHandle_t xQueue, const void * pvItemToQueue, TickType_t xTicksToWait)	|无特殊备注|
|向队列尾部发送一条消息	|BaseType_t xQueueSendToBack(QueueHandle_t xQueue, const void * pvItemToQueue, TickType_t xTicksToWait)|	无特殊备注|
|从队列接收一条消息|	BaseType_t xQueueReceive(QueueHandle_t xQueue, void * pvBuffer, TickType_t xTicksToWait)|	无特殊备注|
|中断版本的向队列发送消息	|BaseType_t xQueueSendFromISR(QueueHandle_t xQueue, const void * pvItemToQueue, BaseType_t *pxHigherPriorityTaskWoken)	|如果发送到队列导致任务解除阻塞，且解除阻塞的任务的优先级高于当前运行的任务，则将*pxHigherPriorityTaskWoken设置为pdTRUE|

## 简单代码例子
```c
#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "freertos/queue.h"
#include <esp_log.h>

QueueHandle_t queue_handle = NULL;

typedef struct
{
  int value;
} queue_data_t;

void taskA(void *param)
{
  queue_data_t data;

  while (1)
  {
    if (pdTRUE == xQueueReceive(queue_handle, &data, 100))
    {
      ESP_LOGI("queue", "receive queue value:%d", data.value);
    }
  }
}

void taskB(void *param)
{
  queue_data_t data;
  memset(&data, 0, sizeof(queue_data_t));

  while (1)
  {
    xQueueSend(queue_handle, &data, 100);
    vTaskDelay(pdMS_TO_TICKS(1000));
    data.value++;
  }
}

void app_main(void)
{
  queue_handle = xQueueCreate(10, sizeof(queue_data_t));
  xTaskCreatePinnedToCore(taskA, "taksA", 2048, NULL, 3, NULL, 1);
  xTaskCreatePinnedToCore(taskB, "taksB", 2048, NULL, 3, NULL, 1);
}

```

