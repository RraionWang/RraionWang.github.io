# 基础图形API

## 参考
[官方文档](https://github.com/olikraus/u8g2/wiki/u8g2reference)



## 输出英文

关于字体的预览可以看[这里](https://docs.rs/u8g2-fonts/latest/u8g2_fonts/fonts/index.html)

```c

#include <Arduino.h>
#include <SPI.h>
#include <U8g2lib.h>

// 构造器
U8G2_SSD1306_128X64_NONAME_1_SW_I2C u8g2(U8G2_R0, /* clock=*/SCL, /* data=*/SDA, /* reset=*/U8X8_PIN_NONE);


void setup(void) {
  u8g2.begin();  //启动函数
}

void loop(void) { // 默认使用do-while循环进行全部页显示
  u8g2.firstPage();  
  do {
    u8g2.setFont(u8g2_font_ncenB14_tr); // 设置字体
    u8g2.drawStr(0,15,"Hello World!");  // 打印文字
  } while ( u8g2.nextPage() );
  delay(1000);
}
```

## 输出中文

```c
#include <Arduino.h>
#include <SPI.h>
#include <U8g2lib.h>

// 构造器
U8G2_SSD1306_128X64_NONAME_1_SW_I2C u8g2(U8G2_R0, /* clock=*/SCL, /* data=*/SDA, /* reset=*/U8X8_PIN_NONE);


void setup(void) {

  u8g2.begin();
  u8g2.enableUTF8Print(); //使能UTF-8输出，如果没有这一句就无法正常显示
}

void loop(void) {
  
  u8g2.setFont(u8g2_font_wqy12_t_gb2312);  
  u8g2.setFontDirection(0);

  u8g2.firstPage();
  do {
    u8g2.setCursor(0, 10);
    u8g2.print("你好我是小狮子");  
    
  
  } while (u8g2.nextPage());
  delay(1000);
}
```

## 输出圆弧

`void U8G2::drawArc(u8g2_uint_t x0, u8g2_uint_t y0, u8g2_uint_t rad, uint8_t start, uint8_t end)`

|参数|说明|
|-|-|
|x0|圆中心的 X 位置。|
|y0|圆中心的 Y 位置。|
|rad|圆弧的半径。|
|start|圆弧的起始角度 （0..255）。|
|end|圆弧的结束角度 （0..255）。|


```c
#include <Arduino.h>
#include <SPI.h>
#include <U8g2lib.h>

// 构造器
U8G2_SSD1306_128X64_NONAME_1_SW_I2C u8g2(U8G2_R0, /* clock=*/SCL, /* data=*/SDA, /* reset=*/U8X8_PIN_NONE);


void setup(void) {

  u8g2.begin();
}

void loop(void) {

  u8g2.firstPage();
  do {
       u8g2.drawArc(10, 10, 10, 0, 255);
  } while (u8g2.nextPage());
  delay(1000);
}
```

## 其他API

|API|说明|
|-|-|
|void U8G2::drawXBM(u8g2_uint_t x, u8g2_uint_t y, u8g2_uint_t w, u8g2_uint_t h, const uint8_t *bitmap)|绘制位图|
|void U8G2::drawBox(u8g2_uint_t x, u8g2_uint_t y, u8g2_uint_t w, u8g2_uint_t h)|绘制框|
|void U8G2::drawButtonUTF8(u8g2_uint_t x, u8g2_uint_t y, u8g2_uint_t flags, u8g2_uint_t width, u8g2_uint_t padding_h, u8g2_uint_t padding_v, const char *text)|绘制按钮，更多内容请见原wiki|
|void U8G2::drawCircle(u8g2_uint_t x0, u8g2_uint_t y0, u8g2_uint_t rad, uint8_t opt = U8G2_DRAW_ALL)|绘制圆|
|void U8G2::drawDisc(u8g2_uint_t x0, u8g2_uint_t y0, u8g2_uint_t rad, uint8_t opt = U8G2_DRAW_ALL)|绘制填充圆|
|void U8G2::drawEllipse(u8g2_uint_t x0, u8g2_uint_t y0, u8g2_uint_t rx, u8g2_uint_t ry, uint8_t opt)|绘制椭圆|
|void U8G2::drawFilledEllipse(u8g2_uint_t x0, u8g2_uint_t y0, u8g2_uint_t rx, u8g2_uint_t ry, uint8_t opt)|绘制填充椭圆|
|void U8G2::drawFrame(u8g2_uint_t x, u8g2_uint_t y, u8g2_uint_t w, u8g2_uint_t h)|绘制框架（空心矩形）|
|u8g2_uint_t U8G2::drawGlyph(u8g2_uint_t x, u8g2_uint_t y, uint16_t encoding)|绘制字形|
|u8g2_uint_t U8G2::drawGlyphX2(u8g2_uint_t x, u8g2_uint_t y, uint16_t encoding)|绘制字形|

