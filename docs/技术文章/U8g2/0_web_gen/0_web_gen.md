<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <title>U8g2 MUI 菜单生成器</title>
  <style>
    body { font-family: monospace; display: flex; gap: 20px; padding: 20px; }
    textarea { width: 400px; height: 400px; }
    #oled { background: black; color: white; width: 200px; height: 128px; padding: 10px; overflow: auto; }
    #output { white-space: pre; background: #f0f0f0; padding: 10px; width: 600px; height: 400px; overflow: auto; }
    .menu-line { margin: 2px 0; }
    .selected { background: white; color: black; }
  </style>
</head>
<body>

  <div>
    <h3>菜单 JSON 配置</h3>
    <textarea id="jsonInput">
// 粘贴你的 JSON 配置
{
  "forms": [
    {
      "id": 1,
      "title": "Main Menu",
      "items": [
        { "type": "button", "label": "Start", "id": "ST", "goto": 2 },
        { "type": "button", "label": "Settings", "id": "SE", "goto": 3 },
        { "type": "exit", "label": "Exit", "id": "EX" }
      ]
    }
  ]
}
    </textarea>
    <button onclick="generate()">生成菜单代码</button>
  </div>

  <div>
    <h3>OLED 预览</h3>
    <div id="oled"></div>
  </div>

  <div>
    <h3>生成的 U8g2 C 代码</h3>
    <div id="output"></div>
  </div>

  <script src="main.js"></script>
</body>
</html>
