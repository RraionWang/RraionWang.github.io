# U8g2基础

## 概述
本系列文章将阐述如何使用u8g2库做一些有趣的小项目，开始我准备使用Arduino框架，这对于新手来说比较友好。

## 建立框架
我手头上面有一片esp32s3，之后的项目就会使用此芯片进行演示。首先我们需要到github进行库的下载，建立基础框架，我这里使用的是platformio。先使用最常用的ssd1306，iic接口的12864OLED模块。

## Hello World
首先来写一个Hello World吧，代码如下


```c
#include <Arduino.h>
#include <SPI.h>
#include <U8g2lib.h>


// 构造器
U8G2_SSD1306_128X64_NONAME_1_SW_I2C u8g2(U8G2_R0, /* clock=*/SCL, /* data=*/SDA, /* reset=*/U8X8_PIN_NONE);

/* u8g2.begin() is required and will sent the setup/init sequence to the display */
void setup(void) {
  u8g2.begin();
}

/* draw something on the display with the `firstPage()`/`nextPage()` loop*/
void loop(void) {
  u8g2.firstPage();
  do {
    u8g2.setFont(u8g2_font_ncenB14_tr); // 选择字体
    u8g2.drawStr(0,20,"Hello World!"); // 绘制文本
  } while ( u8g2.nextPage() );
  delay(1000);
}

```

## 代码结构和说明

在代码中，首先我们选择对应的IIC构造器进行构建，注意在ESP32S3中，SCL对应的是GPIO6(D5)，SDA对应的是GPIO5(D4)，请详细阅读模组供应商提供的数据手册，避免选错了引脚哦。

当然，你也可以使用其他的引脚及进行IIC的输出，在此就不赘述了。

初始化程序十分简单，只有一个`u8g2.begin()`

在`loop`循环函数中，我有一些疑惑的点，比如为什么首先要执行` u8g2.firstPage()`，以及为什么有do-while循环。那经过查阅资料和问了AI之后我得到了以下结论：


U8g2 使用的是 分页渲染（Page-based rendering） 的方式来绘制 OLED/液晶屏的内容。这是为了节省内存资源（特别是对于像 128x64 这样的小屏）。

屏幕被垂直划分成多个“页”（通常是 8 行一页）。
每次你调用 u8g2.firstPage()，它会初始化第一页的缓冲区。
然后你在 do { ... } while (u8g2.nextPage()) 中重复绘制每一“页”的内容。每次循环 nextPage() 会将缓冲区翻页，直到所有页绘制完成。

那关于为什么需要 do-while？是因为至少要绘制第一页，之后再判断是否还有下一页。使用 do-while 能保证至少执行一次绘图操作。

下面给定一个示例：128x64 OLED 屏幕的分页

|屏幕分辨率|	分页数	|每页行数|
|-|-|-|
|128x64	|8 页|每页 8 行|
|128x32	|4 页	|每页 8 行|

对代码的逐行解释：

① u8g2.firstPage();
初始化分页绘图，将当前绘图缓冲区设置为第一页。
你必须在每次重绘整个屏幕之前调用这个函数。

② u8g2.setFont(...);
设置当前使用的字体。
字体是绘图状态的一部分，所以每次翻页后仍会保留，但为了清晰起见，通常放在循环内。

③ u8g2.drawStr(...);
在当前页上绘制字符串。
所有绘图操作（如画线、画圆、画字符等）都只作用于当前页的缓冲区。

④ while (u8g2.nextPage())
切换到下一页并判断是否还有下一页。
如果还有下一页，继续循环绘制。
如果没有了，退出循环，完成整个屏幕的绘制。

⑤ delay(1000);
延时 1 秒，避免屏幕刷新过快。

📝 总结
|函数	|作用|
|-|-|
|u8g2.firstPage()|	初始化分页绘图，开始绘制第一页|
|u8g2.nextPage()|	切换到下一页，并返回是否还有下一页|
|do-while 循环	|保证所有页都被绘制|

🧪 小实验：去掉 do-while 会怎样？
如果你写成：

cpp
```c
u8g2.firstPage();
u8g2.setFont(...);
u8g2.drawStr(...);
```

那么你只会绘制屏幕的第一页（前 8 行），其余部分不会被更新，屏幕显示不完整。

