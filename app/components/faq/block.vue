<template>
  <section class="bg-white text-slate-900 py-[120px] px-6 font-sans overflow-hidden">
    <div class="container mx-auto max-w-[800px]">

      <!-- 1. 顶部标题区域 (保持高度统一) -->
      <div class="flex flex-col items-center text-center mb-[100px]">
        <div v-scroll-reveal="{ delay: 0.1 }"
          class="px-5 py-1.5 rounded-full border border-[#00378a]/30 bg-white text-[10px] text-[#00378a] mb-6 uppercase tracking-[0.3em]">
          {{ siteConfig?.index?.faq?.tag || "Support" }}
        </div>
        <h2 v-scroll-reveal="{ delay: 0.2 }"
          class="text-[36px] md:text-[52px] font-light leading-[1.1] tracking-tight mb-6 text-[#001f4e]">
          {{ siteConfig?.index?.faq?.mainHeading || "Common Questions" }}
        </h2>
        <p v-scroll-reveal="{ delay: 0.3 }" class="text-slate-400 text-base max-w-xl font-extralight leading-relaxed">
          {{ siteConfig?.index?.faq?.subtitle }}
        </p>
      </div>

      <!-- 2. 线性 FAQ 列表 (极致简约) -->
      <div v-scroll-reveal="{ delay: 0.4 }" class="border-t border-slate-100">
        <div v-for="(item, index) in siteConfig?.index?.faq?.faqs" :key="index"
          class="group border-b border-slate-100 transition-all px-6 duration-500" @click="toggle(index)">
          <!-- 问题行：增加垂直内边距，营造呼吸感 -->
          <div class="flex items-center justify-between py-8 cursor-pointer select-none">
            <span class="text-lg md:text-xl font-medium transition-colors duration-500"
              :class="activeIndex === index ? 'text-[#00378a]' : 'text-[#001f4e] group-hover:text-[#00378a]'">
              {{ item.question }}
            </span>

            <!-- 极简加号图标：旋转变为叉号 -->
            <div class="relative size-6 flex items-center justify-center transition-transform duration-500"
              :class="{ 'rotate-45': activeIndex === index }">
              <div class="absolute w-5 h-[1px] bg-slate-300 group-hover:bg-[#00378a] transition-colors"></div>
              <div class="absolute h-5 w-[1px] bg-slate-300 group-hover:bg-[#00378a] transition-colors"></div>
            </div>
          </div>

          <!-- 回答内容区 -->
          <div class="grid transition-[grid-template-rows,opacity] duration-500 ease-in-out"
            :class="[activeIndex === index ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0']">
            <div class="overflow-hidden">
              <p class="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 每一个产品的展示逻辑 -->
      <div class="product-item hover:bg-slate-50 border-b border-slate-100 p-4 transition-all group">
        <div class="flex items-center justify-between">
          <div class="flex flex-col">
            <span class="text-[10px] text-slate-300 font-mono uppercase">Ref: #00001</span>
            <h4 class="text-lg font-bold text-[#001f4e] group-hover:text-[#00378a]">2,3-PENTANEDIONE</h4>
          </div>

          <div class="flex items-center gap-10">
            <div class="flex flex-col items-end">
              <span class="text-[10px] text-slate-400 uppercase font-bold tracking-widest">CAS Number</span>
              <span class="text-[#00378a] font-mono font-bold">600-14-6</span>
            </div>
            <!-- 快捷询盘按钮 -->
            <button
              class="p-2 rounded-full border border-slate-200 text-slate-400 hover:bg-[#00378a] hover:text-white transition-all">
              <Send size="18" />
            </button>
          </div>
        </div>
      </div>

      <!-- 产品详情页的技术参数块 -->
      <div class="technical-specs-grid grid grid-cols-2 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
        <div class="spec-item">
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">CAS Number</p>
          <p class="text-lg font-bold text-[#00378a]">600-14-6</p>
        </div>

        <div class="spec-item">
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">FEMA Number</p>
          <p class="text-lg font-bold text-slate-700">2841</p>
        </div>

        <div class="spec-item">
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">EINECS Code</p>
          <p class="text-lg font-bold text-slate-700">209-984-8</p>
        </div>

        <div class="spec-item">
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Flash Point</p>
          <p class="text-lg font-bold text-slate-700">18.5 °C</p>
        </div>
      </div>

     
    </div>
  </section>
</template>

<style scoped>
/* 极致简约不需要复杂的 Shadow，只保留基础的过渡 */
.font-sans {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 移除所有背景色，只靠线条感 */
.group:hover {
  /* 悬停时可以有一个极其微弱的背景色，或者干脆不加 */
  background-color: rgba(248, 250, 252, 0.5);
}

/* 数字等宽（如果问题带编号） */
.tabular-nums {
  font-variant-numeric: tabular-nums;
}
</style>
<script setup lang="ts">
// 1. 获取全局配置
const siteConfig = useAppConfig()


// 2. 状态控制 (修正：只声明一次)
const activeIndex = ref<number | null>(null)

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>
