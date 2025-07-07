# GPIO

## 代码例子

```c
#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include <esp_log.h>
#include <driver/gpio.h>

#define LED_GPIO GPIO_NUM_21

void led_run_task(void *param)
{
  int gpio_level = 0;
  while (1)
  {
    gpio_level = gpio_level ? 0 : 1;
    gpio_set_level(LED_GPIO, gpio_level);
    vTaskDelay(pdMS_TO_TICKS(300));
    ESP_LOGI("led_status:", "%d", gpio_level);
  }
}

void app_main(void)
{
  gpio_config_t led_cfg = {
      .pin_bit_mask = (1 << LED_GPIO),
      .pull_up_en = GPIO_PULLUP_DISABLE,
      .pull_down_en = GPIO_PULLDOWN_DISABLE,
      .mode = GPIO_MODE_OUTPUT,
      .intr_type = GPIO_INTR_DISABLE,

  };

  gpio_config(&led_cfg);

  xTaskCreatePinnedToCore(led_run_task, "rraion_blink", 2048, NULL, 3, NULL, 1);
}
```