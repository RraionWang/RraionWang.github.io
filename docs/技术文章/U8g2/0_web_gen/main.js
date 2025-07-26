function generate() {
  const input = document.getElementById("jsonInput").value;
  let parsed;
  try {
    parsed = JSON.parse(input);
  } catch (e) {
    alert("JSON 解析失败，请检查格式！");
    return;
  }

  const oled = document.getElementById("oled");
  oled.innerHTML = "";
  const output = document.getElementById("output");
  let muif = "muif_t muif_list[] = {\n";
  let fds = "fds_t fds_data[] = \n";

  parsed.forms.forEach(form => {
    const formId = form.id;
    fds += `MUI_FORM(${formId})\n`;
    let y = 10;

    form.items.forEach((item, idx) => {
      const id = item.id;
      const label = item.label || "";
      const type = item.type;

      if (type === "button") {
        muif += `  MUIF("${id}", 0, mui_u8g2_btn_goto_wm_fi),\n`;
      } else if (type === "exit") {
        muif += `  MUIF("${id}", 0, mui_u8g2_btn_exit_wm_fi),\n`;
      } else if (type === "text") {
        muif += `  MUIF_LABEL("${id}"),\n`;
      }

      fds += `MUI_XYT("${id}", 10, ${y}, "${label}")\n`;

      // OLED预览模拟
      const div = document.createElement("div");
      div.textContent = label;
      div.className = "menu-line" + (idx === 0 ? " selected" : "");
      oled.appendChild(div);

      y += 12;
    });
  });

  muif += "};\n";
  fds += ";";

  output.textContent = muif + "\n\n" + fds;
}
