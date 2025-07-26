# 列表

在这里我使用的设备的配置如下

|设备|说明|备注|
|-|-|-|
|ESP32S3|||
|SSD1306 IIC 12864 OLED |SDA->GPIO5 SCL->GPIO6|注意不要接错了GPIO|

## 设计一个最简单的列表

首先我们来设计一个最简单的列表吧，我们的任务是设计一个具有5个选项的列表。

```c
#include <Arduino.h>
#include <SPI.h>
#include <U8g2lib.h>
#include <MUIU8g2.h>

// 构造函数
U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, SCL, SDA, U8X8_PIN_NONE);

MUIU8G2 mui; // 创建一个实例

// 创建muif列表，
muif_t muif_list[] = {
  MUIF_VARIABLE("ST", NULL, mui_u8g2_btn_goto_w1_fi),
  MUIF_VARIABLE("SE", NULL, mui_u8g2_btn_goto_w1_fi),
  MUIF_VARIABLE("SA", NULL, mui_u8g2_btn_goto_w1_fi),
  MUIF_VARIABLE("SB", NULL, mui_u8g2_btn_goto_w1_fi),
  MUIF_VARIABLE("SC", NULL, mui_u8g2_btn_goto_w1_fi),
};

// 项目字符串的名称，xy坐标以及字符串
fds_t fds_data[] =
  MUI_FORM(1)
  MUI_XYT("ST", 10, 10, "ST")
  MUI_XYT("SE", 10, 22, "SE")
  MUI_XYT("SA", 10, 34, "SA")
  MUI_XYT("SB", 10, 46, "SB")
  MUI_XYT("SC", 10, 58, "SC")
;


void setup(void) {
  u8g2.begin();//  启动u8g2
  mui.begin(u8g2, fds_data, muif_list, sizeof(muif_list)/sizeof(muif_t));// 启动mui
  mui.gotoForm(1, 0); //默认选中第一个表单的第一个选项
  u8g2.setFont(u8g2_font_helvR08_tr);  //设置字体
}

void loop(void) {

  if (mui.isFormActive()) { // 如果表单激活（表单当前页显示）
    u8g2.clearBuffer();  // 清除缓存
    mui.draw(); //绘制界面
    u8g2.sendBuffer() ;  // 写缓存
  } 
}
```
