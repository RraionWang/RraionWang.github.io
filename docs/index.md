---
social:
  cards_layout_options:
    background_color: blue # Change background color
    background_image: null # Remove background image
---

## 找到🦁


<style>


    .card-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .social-card {
  background-color: #fff; /* 固定白色背景 */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  transition: transform 0.2s ease;
  color: #333; /* 固定深灰色文字 */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

    .social-card:hover {
      transform: translateY(-5px);
    }

    .card-image {
      width: 100%;
      aspect-ratio: 1 / 1;
      /* 正方形 */
      object-fit: cover;
    }

    .card-content {
      padding: 15px;
    }

    .card-title {
      margin: 0 0 8px;
      font-size: 10px;
      font-weight: bold;
    }

    .card-desc {
      margin: 0;
      font-size: 13px;
      color: #666
    }
  </style>




  <div class="card-grid">
    <!-- 第一行 -->

  <a href="https://www.douyin.com/user/MS4wLjABAAAAt0bjcMFCWemsRqxjYUwDQ69oOSGnuadn7O4pPcZsvLTLAmNTebMhmTKkYuy_qEsA?from_tab_name=main" class="social-card" data-img="douyin.jpg">
    <img src="douyin.jpg" alt="douyin" class="card-image"
      />
    <div class="card-content">
      <h3 class="card-title">抖音</h3>
      <p class="card-desc">MakerRraion</p>
    </div>
  </a>

  <a href="https://space.bilibili.com/3546647762045462?spm_id_from=333.1007.0.0" class="social-card" data-img="bilibili.jpg">
    <img src="bilibili.jpg" alt="BiliBili" class="card-image"
      />
    <div class="card-content">
      <h3 class="card-title">BiliBili</h3>
      <p class="card-desc">3546647762045462</p>
    </div>
  </a>

  <a href="https://www.linkedin.com/in/%E5%B2%A9%E6%9D%BE-%E6%B1%AA-7a469b357/?locale=en_US" class="social-card" data-img="linkin.jpg">
    <img src="linkin.jpg" alt="LinkedIn" class="card-image"
      />
    <div class="card-content">
      <h3 class="card-title">LinkedIn</h3>
      <p class="card-desc">Rraion Wang</p>
    </div>
  </a>

  <a href="https://www.youtube.com/@rraion4theworld" class="social-card" data-img="youtube.jpg">
    <img src="youtube.jpg" alt="YouTube" class="card-image"
      />
    <div class="card-content">
      <h3 class="card-title">YouTube</h3>
      <p class="card-desc">@rraion4theworld</p>
    </div>
  </a>

  </div>





## 项目列表
|名称|地址|说明|
|-|-|-|
|R2HUB75|[点击跳转](https://rraionwang.github.io/开源项目/R2HUB75/R2HUB75/)|使用ESP32+HUB75做好玩的交互项目|
