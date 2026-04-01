<template>
  <div class="hero-page-wrapper ">
    <!-- Hero 主体区域 -->
    <section class="hero-container">
      <!-- 1. 背景视频层 -->
      <div class="video-background">
        <div class="video-overlay"></div>
        <video
          ref="videoRef"
          :src="videoSrc"
          :poster="poster"
          autoplay
          loop
          muted
          playsinline
          class="video-element"
          @canplay="$event.target.playbackRate = 0.5"
        ></video>
      </div>

      <!-- 2. 文字内容容器 -->
      <div class="base-container">
        <div class="hero-content">
          <p v-scroll-reveal="{ delay: 0.1 }" class="hero-label">{{ label }}</p>
          <h1 v-scroll-reveal="{ delay: 0.2 }" class="hero-title">{{ title }}</h1>
          <div class="hero-divider"></div>
          <p v-scroll-reveal="{ delay: 0.3 }" class="hero-description">{{ description }}</p>
          <NuxtLink v-scroll-reveal="{ delay: 0.4 }" :to="buttonLink" class="hero-btn-outline">
            {{ buttonText }}
          </NuxtLink>
        </div>

        <!-- 3. 底部悬浮卡片 (核心：解决斩断问题) -->
        <div  class="floating-card">
          <div class="card-grid">
            <!-- 左侧标题与按钮 -->
            <div class="card-left">
              <h2  class="card-heading">{{ cardTitle }}</h2>
              <NuxtLink :to="cardBtnLink" class="card-btn-small">
                About Us
              </NuxtLink>
            </div>
            <!-- 右侧长文本描述 -->
            <div class="card-right">
              <p class="card-text">{{ cardDescription }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 下一个区块的占位（用于承接悬浮卡片） -->
    <section class="spacer-section"></section>
  </div>
</template>

<script setup>
defineProps({
  // 顶部小标签
  label: { type: String, default: 'SINCE 1980 | ISO 9001:2008 CERTIFIED' },
  // 主标题
  title: { type: String, default: 'Aroma Chemicals, Natural Products & Menthol Synthetic' },
  // 主描述
  description: { 
    type: String, 
    default: 'Leading manufacturer and exporter of high-purity fragrance ingredients. Backed by 40 years of expertise and a global supply chain, we deliver sustainable quality for the perfumery and food industries worldwide.' 
  },
  buttonText: { type: String, default: 'Explore Our Catalog' },
  buttonLink: { type: String, default: '/products' },
  
  // 底部卡片 Props
  cardTitle: { type: String, default: 'Your Trusted Partner in China' },
  cardDescription: { 
    type: String, 
    default: 'We simplify your sourcing with a specialized logistics system and reliable warehouse capacity. From custom synthesis in our labs to global distribution, your satisfaction is our pleasure. Trust the experience that has been leading the industry since 1980.' 
  },
  cardBtnLink: { type: String, default: '/about' },

  // 素材 Props
  videoSrc: { type: String, default: 'https://www.pexels.com/zh-cn/download/video/35063024/' },
  poster: { type: String, default: '' }
})
</script>

<style scoped>
/* 1. 基础布局 */
.hero-page-wrapper {
  background-color: #ffffff;
}

.hero-container {
  position: relative;
  width: 100%;
  height: 80vh; /* 高度设为 90%，留出底部卡片悬浮空间 */
  display: flex;
  align-items: center;
  background-color: #000b1d;
  /* 重要：这里不能设置 overflow: hidden，否则卡片会被切断 */
}

/* 2. 背景视频与遮罩 */
.video-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden; /* 视频本身溢出隐藏 */
}

.video-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg, 
    rgba(0, 18, 46, 0.95) 0%, 
    rgba(0, 18, 46, 0.4) 100%
  );
  z-index: 1;
}

/* 3. 内容限制容器 */
.base-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 内容垂直居中 */
}

.hero-content {
  max-width: 650px;
  padding-bottom: 100px; /* 为下方卡片留出空间 */
}

.hero-label {
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 20px;
  opacity: 0.9;
}

.hero-title {
  font-size: clamp(36px, 5.5vw, 68px);
  font-weight: 600;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: 25px;
}

.hero-divider {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: 35px;
}

.hero-description {
  font-size: 18px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 40px;
}

.hero-btn-outline {
  display: inline-block;
  padding: 14px 32px;
  border: 1px solid #ffffff;
  border-radius: 50px;
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;
}

.hero-btn-outline:hover {
  background: #ffffff;
  color: #00122e;
}

/* 4. 核心：底部悬浮卡片排版 */
.floating-card {
  position: absolute;
  bottom: 0;
  left: 40px;
  right: 40px;
  transform: translateY(50%); /* 向下位移自身的一半 */
 background-color: #00378ab3; /* #00378a 的 70% 透明度 */
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
 
  border-radius: 16px;
  padding: 50px;
 
  z-index: 10;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr; /* 还原左窄右宽布局 */
  gap: 60px;
  align-items: flex-start;
}

.card-heading {
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 30px;
}

.card-btn-small {
  display: inline-block;
  padding: 10px 28px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s;
}

.card-btn-small:hover {
  background: rgba(255, 255, 255, 0.15);
}

.card-text {
  font-size: 15px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  text-align: justify;
}

/* 5. 补充间距区域 */
.spacer-section {
  width: 100%;
  height: 250px; /* 必须给卡片留出占位空间 */
  background: #ffffff;
}

/* 响应式适配 */
@media (max-width: 992px) {
  .hero-container {
    height: auto;
    padding: 140px 0 200px;
  }
  .card-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .floating-card {
    padding: 30px;
    left: 20px;
    right: 20px;
  }
  .hero-content {
    padding-bottom: 0;
    text-align: center;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .hero-container {
    /* 核心：手机端必须允许溢出，否则位移出去的一半会被切断 */
    overflow: visible !important; 
    /* 增加底部外边距，防止卡片遮挡下方 Section 的文字 */
    margin-bottom: 200px; 
    height: auto;
    min-height: 80vh;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .floating-card {
    /* 核心：强制保留 50% 的向下位移 */
    transform: translateY(120%) !important; 
   
    /* 手机端间距调整 */
    left: 15px;
    right: 15px;
    padding: 30px 20px; 
    
    /* 内部布局调整：从横排变竖排 */
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>