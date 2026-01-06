
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


  <a href="/%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/esp32s3_meme/" class="social-card" data-img="esp32s3_meme.png">
    <img src="/assets/projects/esp32s3_meme.png" alt="douyin" class="card-image"
      />
    <div class="card-content">
      <h3 class="card-title">esp32s3 meme 玩具</h3>
    </div>
  </a>


  <a href="/%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/esp32s3_gameboy/" class="social-card" data-img="esp32s3_gameboy.png">
    <img src="/assets/projects/esp32s3_gameboy.png" alt="douyin" class="card-image"
      />
    <div class="card-content">
      <h3 class="card-title">esp32s3 gameboy</h3>
    </div>
  </a>

  <a href="/%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/esp32s3_cam/" class="social-card" data-img="esp32s3_cam.png">
    <img src="/assets/projects/esp32s3_cam.png" alt="douyin" class="card-image"
      />
    <div class="card-content">
      <h3 class="card-title">esp32s3 小相机</h3>
    </div>
  </a>

  </div>


## 讨论


<script src="https://giscus.app/client.js"
        data-repo="RraionWang/R2HUB75"
        data-repo-id="R_kgDOOvt7ww"
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
