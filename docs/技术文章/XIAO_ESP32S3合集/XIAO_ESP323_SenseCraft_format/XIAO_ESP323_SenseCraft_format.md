# XIAO ESP32S3 在SenseCraft平台部署AI模型的串口结构

## 前言
如果我们使用SenseCraft AI平台对XIAO ESP32S3 进行模型部署，我们会得到一些串口输出，在此我们来解析一下串口消息的格式

![alt text](image.png)

## 串口输出例子
下面是一条串口输出的例子
```json
{
    "type": 1,
    "name": "INVOKE",
    "code": 0,
    "data": {
        "count": 23,
        "image": "/9j/4AAQSkZJRgABA...",
        "boxes": [[181,167,97,104,81,0]],
        "perf": [101,282,0],
        "rotation": 0,
        "width": 240,
        "height": 240
    }
}
```
## 关键字段
我们只需要只要一些关键字段的含义就可以了

|参数|说明|
|-|-|
|`image`|base64格式的当前图像|
|`boxes`|[左上角x坐标,左上角y坐标,边界框的宽度，边界框的高度，置信度，类别ID]|
|`perf`|[模型推理时间，预处理时间，后处理时间]|

## 处理
知道了这些数据，我们就可以去再使用一个esp32作为从机进行数据处理，我们可以使用串口为例子进行数据解析，首先我们可以下载[Seeed_Arduino_SSCMA Library](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA?tab=readme-ov-file#seeed_arduino_sscma-library)来进行数据处理。

我们可以使用example中的如下代码进行参数的输出，有了参数之后我们就可以对从机进行一些编程了，请注意主机和从机的tx和rx要交叉连接，也就是说
- 主机tx -> 从机rx
- 主机rx -> 从机tx
```c
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// Define two Serial devices mapped to the two internal UARTs
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

#define IMAGE_SHOW false

SSCMA AI;

void setup()
{
    Serial.begin(9600);
    AI.begin(&atSerial);
#if IMAGE_SHOW
    AI.set_rx_buffer(32*1024);
#endif
}

void loop()
{
    if (!AI.invoke(1,IMAGE_SHOW))
    {
        Serial.println("invoke success");
        Serial.print("perf: prepocess=");
        Serial.print(AI.perf().prepocess);
        Serial.print(", inference=");
        Serial.print(AI.perf().inference);
        Serial.print(", postpocess=");
        Serial.println(AI.perf().postprocess);

        for (int i = 0; i < AI.boxes().size(); i++)
        {
            Serial.print("Box[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.boxes()[i].target);
            Serial.print(", score=");
            Serial.print(AI.boxes()[i].score);
            Serial.print(", x=");
            Serial.print(AI.boxes()[i].x);
            Serial.print(", y=");
            Serial.print(AI.boxes()[i].y);
            Serial.print(", w=");
            Serial.print(AI.boxes()[i].w);
            Serial.print(", h=");
            Serial.println(AI.boxes()[i].h);
        }
        for (int i = 0; i < AI.classes().size(); i++)
        {
            Serial.print("Class[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.classes()[i].target);
            Serial.print(", score=");
            Serial.println(AI.classes()[i].score);
        }
        for (int i = 0; i < AI.points().size(); i++)
        {
            Serial.print("Point[");
            Serial.print(i);
            Serial.print("]: target=");
            Serial.print(AI.points()[i].target);
            Serial.print(", score=");
            Serial.print(AI.points()[i].score);
            Serial.print(", x=");
            Serial.print(AI.points()[i].x);
            Serial.print(", y=");
            Serial.println(AI.points()[i].y);
        }
        for (int i = 0; i < AI.keypoints().size(); i++)
        {
            Serial.print("keypoint[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.keypoints()[i].box.target);
            Serial.print(", score=");
            Serial.print(AI.keypoints()[i].box.score);
            Serial.print(", box:[x=");
            Serial.print(AI.keypoints()[i].box.x);
            Serial.print(", y=");
            Serial.print(AI.keypoints()[i].box.y);
            Serial.print(", w=");
            Serial.print(AI.keypoints()[i].box.w);
            Serial.print(", h=");
            Serial.print(AI.keypoints()[i].box.h);
            Serial.print("], points:[");
            for (int j = 0; j < AI.keypoints()[i].points.size(); j++)
            {
                Serial.print("[");
                Serial.print(AI.keypoints()[i].points[j].x);
                Serial.print(",");
                Serial.print(AI.keypoints()[i].points[j].y);
                Serial.print("],");
            }
            Serial.println("]");
        }
        if(!AI.last_image().length() > 0)
        {
            Serial.print("Last image:");
            Serial.println(AI.last_image().c_str());
        }
    }
}
```

