---
social:
  cards_layout_options:
    background_color: blue # Change background color
    background_image: null # Remove background image
---


# Home

## 致谢
<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

  <!-- Element to contain animated typing -->
  <span id="element"></span>

  <!-- Load library from the CDN -->
  <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

  <!-- Setup and start animation! -->
  <script>
    var typed = new Typed('#element', {
      strings: ['感谢 大蒜头莎莉  三七三七 荔枝lan Sucr3odE 寻月人🌙 夏天 十六夜里偷吃零食 马思唯心小甜豆 沁酒 选购我的产品'],
      typeSpeed: 100,
      loop: true,
    });
  </script>
</body>



<style>

    .card-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
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
  object-fit: cover;
  display: block; /* 消除图片底部空隙 */
}

.card-content {
  padding: 12px; /* 统一缩小内边距 */
}

.card-title {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.3px;
  margin: 6px 0 2px;
  color: #333;
}

.card-desc {
  margin: 0;
  font-size: 12px;
  color: #666;
}
  </style>




  <div class="card-grid">
    <!-- 第一行 -->

  <a href="/site/产品里程碑/index.html" class="social-card" data-img="product.png">
    <img src="/site/assets/product.png" alt="产品里程碑" class="card-image"
      />
    <div class="card-content">
     <div class="card-title">产品里程碑</div>

      <p class="card-desc">点击查看狮子的产品开发进度</p>
    </div>
  </a>

  <a href="/site/我的故事/index.html" class="social-card" data-img="mystory.png">
    <img src="/site/assets/mystory.png" alt="我的故事" class="card-image"
      />
    <div class="card-content">
      <div class="card-title">我的小红书之旅</div>
      <p class="card-desc">点击了解一切的开始</p>
    </div>
  </a>


  <a href="/site/名字故事/index.html" class="social-card" data-img="/site/assets/sig2.png">
    <img src="/site/assets/sig2.png" alt="Rraion的名字故事" class="card-image"
      />
    <div class="card-content">
             <div class="card-title">Rraion怎么读？</div>
      <p class="card-desc">名字背后的故事</p>
    </div>
  </a>



  </div>

## 我的社媒


  <div class="card-grid">
    <!-- 第一行 -->

  <a href="https://www.douyin.com/user/MS4wLjABAAAAa-aFDBgBi9vwKN5Qb-S166nXqGuGiXixRS9dMs1H3_yIf4DjVXHouvgHb1Ia772v?from_tab_name=main" class="social-card" data-img="/site/assets/douyin.jpg">
    <img src="/site/assets/douyin.jpg" alt="douyin" class="card-image"
      />
    <div class="card-content">
            <div class="card-title">抖音</div>
      <p class="card-desc">MakerRraion</p>
    </div>
  </a>

  <a href="https://space.bilibili.com/3546647762045462?spm_id_from=333.1007.0.0" class="social-card" data-img="/site/assets/bilibili.jpg">
    <img src="/site/assets/bilibili.jpg" alt="BiliBili" class="card-image"
      />
    <div class="card-content">
            <div class="card-title">B站</div>
      <p class="card-desc">3546647762045462</p>
    </div>
  </a>


  <a href="https://www.youtube.com/@rraion4theworld" class="social-card" data-img="/site/assets/youtube.jpg">
    <img src="/site/assets/youtube.jpg" alt="YouTube" class="card-image"
      />
    <div class="card-content">
             <div class="card-title">油管</div>
      <p class="card-desc">@rraion4theworld</p>
    </div>
  </a>





  </div>




## 讨论区

👋 Hello，欢迎大家讨论，我们的话题包括但不限于

- 在使用技术中的任何疑问
- 你觉得有意思可以上榜的项目
- 仓库的PR..


<script src="https://giscus.app/client.js"
        data-repo="RraionWang/RraionWang.github.io"
        data-repo-id="R_kgDOMRt33A"
        data-mapping="number"
        data-term="1"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="light"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
</script>

