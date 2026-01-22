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
      strings: ['感谢 大蒜头莎莉  三七三七 荔枝lan Sucr3odE 寻月人🌙 夏天 十六夜里偷吃零食 马思唯心小甜豆 沁酒 55555 选购我的产品'],
      typeSpeed: 100,
      loop: true,
    });
  </script>
</body>



<style>

    .card-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
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

/* 手机端：缩小 了解我 模块标题和副标题 */
@media (max-width: 600px) {
  .card-title {
    font-size: 10px;     /* 原来是 20px */
    margin: 4px 0 2px;
  }

  .card-desc {
    font-size: 8px;     /* 原来是 12px */
    line-height: 1.3;
  }
}


  </style>






  <div class="card-grid">
    <!-- 第一行 -->


  <a href="/了解我/index.html" class="social-card" data-img="/assets/sig3.png">
    <img src="/assets/sig3.png" alt="了解我" class="card-image"
      />
    <div class="card-content">
             <div class="card-title">了解我</div>
      <p class="card-desc">友情和关系的开始</p>
    </div>
  </a>



  <a href="/产品里程碑/index.html" class="social-card" data-img="product.png">
    <img src="/assets/product.png" alt="产品里程碑" class="card-image"
      />
    <div class="card-content">
     <div class="card-title">产品里程</div>
      <p class="card-desc">产品开发进度</p>
    </div>
  </a>

  <a href="/我的故事/index.html" class="social-card" data-img="mystory.png">
    <img src="/assets/mystory.png" alt="我的故事" class="card-image"
      />
    <div class="card-content">
      <div class="card-title">我的小红书之旅</div>
      <p class="card-desc">了解一切的开始</p>
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

