function generate() {
  let config;
  try {
    config = JSON.parse(document.getElementById("jsonInput").value);
  } catch (e) {
    alert("JSON格式错误！");
    return;
  }
  const items = config.items || [];
  const initIndex = Number(config.initIndex || 0);

  // 生成 muif_list
  let muif = "muif_t muif_list[] = {\n";
  items.forEach(item => {
    muif += `  MUIF_VARIABLE("${item.id}", NULL, mui_u8g2_btn_goto_w1_fi),\n`;
  });
  muif += "};\n\n";

  // 生成 fds_data
  let fds = "fds_t fds_data[] =\n  MUI_FORM(1)\n";
  let y = 10;
  items.forEach(item => {
    fds += `  MUI_XYT("${item.id}", 10, ${y}, "${item.label}")\n`;
    y += 12;
  });
  fds += ";\n";

  // 生成 setup/loop 框架代码
  let setup = 
`void setup(void) {
  u8g2.begin();
  mui.begin(u8g2, fds_data, muif_list, sizeof(muif_list)/sizeof(muif_t));
  mui.gotoForm(1, ${initIndex});
  Serial.begin(115200);
}
`;

  let loop =
`int i = ${initIndex};

void loop(void) {
  u8g2.setFont(u8g2_font_helvR08_tr);

  if (mui.isFormActive()) {
    u8g2.clearBuffer();
    mui.draw();
    u8g2.sendBuffer();
  }

  Serial.println(digitalRead(1));
  if (digitalRead(1) == 1) {
    mui.gotoForm(1, i);
    i++;
    if (i == ${items.length}) {
      i = 0;
    }
  }
}
`;

  // OLED菜单预览
  const oled = document.getElementById("oled");
  oled.innerHTML = "";
  items.forEach((item, idx) => {
    const line = document.createElement("div");
    line.textContent = item.label;
    line.className = "menu-line" + (idx === initIndex ? " selected" : "");
    oled.appendChild(line);
  });

  // 输出全部C代码
  document.getElementById("output").textContent =
`#include <Arduino.h>
#include <SPI.h>
#include <U8g2lib.h>
#include <MUIU8g2.h>

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, SCL, SDA, U8X8_PIN_NONE);
MUIU8G2 mui;

${muif}
${fds}
${setup}
${loop}
`;
}
