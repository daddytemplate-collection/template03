<template>
  <section class="bg-[#FBFDFF] font-sans py-[60px]">
    <div class="max-w-[1200px] mx-auto px-5">
      <!-- 标题 -->
      <div class="flex flex-col items-center text-center mb-[80px]">
        <div v-scroll-reveal="{ delay: 0.1 }"
          class="px-5 py-1.5 rounded-full border border-[#00378a]/60 bg-white text-[11px]  text-[#00378a] mb-6 uppercase tracking-[0.2em] shadow-sm">
          {{ siteConfig?.index?.benefitsGrid?.tag || "Category" }}
        </div>
        <h2 v-scroll-reveal="{ delay: 0.2 }"
          class="text-[40px] md:text-[60px] font-light leading-[1.1] tracking-tight mb-6 text-[#001f4e]">
          {{ siteConfig?.index?.benefitsGrid?.mainHeading || "Core Excellence" }}
        </h2>
        <p v-scroll-reveal="{ delay: 0.3 }"
          class="text-[#001f4e]/90  text-lg max-w-2xl font-extralight leading-relaxed">
          {{ siteConfig?.index?.benefitsGrid?.subtitle || "Since 1980, we have specialized in high-purity aromachemicalsand natural products." }}
        </p>
      </div>
      <!-- 顶部搜索栏 -->
 <div class="mx-auto px-4 md:px-10 py-10 bg-white">
    
    <!-- 1. 顶部搜索区：通过加大上下留白，产生“轻盈”的呼吸感 -->
    <div v-if="showSearch" class="flex flex-col md:flex-row items-end md:items-center justify-between mb-12 gap-4">
      
      <!-- 搜索框容器 (完全保留您的原始样式) -->
      <div class="relative flex items-center w-full md:w-[400px] group">
        <div class="absolute left-5 text-slate-400 group-focus-within:text-[#00378a] transition-colors duration-300">
          <Search size="20" />
        </div>
        <input v-model="searchQuery" type="text"
          :placeholder="'Search Product or CAS...'" 
          class="w-full placeholder:font-light placeholder:text-[14px] bg-white border border-slate-200 rounded-full py-3.5 pl-14 pr-6 
                 text-slate-900 text-base outline-none transition-all duration-300
                 focus:border-[#00378a] focus:ring-4 focus:ring-[#00378a]/5
                 placeholder:text-slate-400 placeholder:transition-all placeholder:duration-500 
                 focus:placeholder:opacity-0 focus:placeholder:translate-x-6" />
      </div>

      <!-- 数量统计：去掉背景色块，改为极简的文字排版 -->
      <div class="flex items-center gap-3 pr-2">
        <span class="text-[11px] font-bold text-slate-300 uppercase tracking-[0.2em]">Inventory Items</span>
        <span class="text-[#00378a] font-bold text-xl leading-none">{{ displayProducts.length }}</span>
      </div>
    </div>

    <!-- 2. 产品列表区：去掉了外部容器框，直接平铺在白色背景上 -->
    <div class="product-list-container">
      
      <!-- 列表头 (桌面端)：完全保留您的列比例 -->
      <div class="hidden md:grid grid-cols-[2.5fr_1.5fr_1fr_1fr] gap-5 px-[30px] pb-4 border-b border-slate-100">
        <div class="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Product Info</div>
        <div class="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Technical Codes</div>
        <div class="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Documentation</div>
        <div class="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider text-right">Action</div>
      </div>

      <!-- 列表内容：完全保留您的列表项样式 -->
      <div class="divide-y divide-slate-50">
        <TransitionGroup name="list-fade">
        <div v-for="item in paginatedProducts" :key="item.id"
            class="group rounded-lg overflow-hidden even:bg-[#e0eaf6]/20 bg-white border-b border-slate-100 p-5  grid grid-cols-1 gap-2 md:grid-cols-[2.5fr_1.5fr_1fr_1fr] items-center gap-5 transition-all duration-300 hover:bg-[#fcfdfe] hover:translate-x-1 md:hover:translate-x-2.5">

            <!-- 1. 图片与名称列 -->
            <div class="flex items-center gap-5">
              <div class="shrink-0">
                <div class="w-[80px] h-[80px] bg-[#e0eaf6] rounded-2xl flex items-center justify-center transition-all duration-400 ">
                  <img v-if="item.molecule_img" :src="item.molecule_img" class="rounded-2xl object-contain transition-all duration-400 " />
                  <FlaskConical v-else size="28" stroke-width="2" class="text-[#00378a]" />
                </div>
              </div>
              <div class="flex flex-col">
                <span class="font-mono text-[11px] bg-slate-100 text-slate-400 text-center w-[80px] rounded-full  font-bold uppercase tracking-tight">REF: #{{ item.id }}</span>
                <h4 class="text-[19px] font-extrabold text-[#001f4e] my-1 leading-tight">{{ item.name }}</h4>
                <div class="flex gap-1.5 mt-2">
                  <span class="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-tighter">Food Grade</span>
                  <span class="bg-blue-50 text-blue-600 border border-blue-100 text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-tighter ml-1.5">99%+ Purity</span>
                </div>
              </div>
            </div>

            <!-- 2. 技术参数列 -->
            <div class="flex flex-col gap-2.5">
              <div class="flex flex-col">
                <span class="text-[10px] font-bold text-slate-300 uppercase">CAS NO.</span>
                <span class="font-mono text-[15px] font-bold text-[#00378a]">{{ item.cas }}</span>
              </div>
              <div class="flex flex-col" v-if="item.fema">
                <span class="text-[10px] font-bold text-slate-300 uppercase">FEMA</span>
                <span class="font-mono text-[15px] font-bold text-slate-600">{{ item.fema }}</span>
              </div>
            </div>

            <!-- 3. 文档下载列 -->
            <div class="flex items-center">
              <button class="flex items-center gap-1.5 px-3 py-2 border border-slate-100 rounded-lg text-[11px] font-bold text-slate-400 transition-colors hover:border-[#00378a] hover:text-[#00378a]">
                 <span>Details</span>
                <ArrowUpRight size="16" class="transition-transform duration-300 group-hover/link:translate-x-1" />
              </button>
            </div>

            <!-- 4. 询盘按钮列 -->
            <div class="flex justify-start md:justify-end">
              <button @click="$emit('inquiry', item)"
                class="bg-[#00378a] text-white px-6 py-3 rounded-xl font-extrabold text-sm flex items-center gap-2.5 transition-all duration-300 hover:bg-[#002d70] hover:shadow-[0_10px_20px_rgba(0,55,138,0.2)]">
                <Send size="16" />
                <span>Inquiry</span>
              </button>
            </div>
          </div>
        </TransitionGroup>
      </div>
       <!-- 3. 加载更多区域：极简设计 -->
<div class="mt-16">

  <!-- 情况 A: 有搜索结果时 -->
  <template v-if="displayProducts.length > 0">
    
    <!-- 情况 A-1: 还有更多可以加载 -->
    <div v-if="hasMore" class="flex flex-col items-center gap-4">
      <span class="text-[11px] font-bold text-slate-300 uppercase tracking-[0.2em]">
        Viewing {{ paginatedProducts.length }} of {{ displayProducts.length }} Products
      </span>
      <button @click="loadMore"
        class="group relative px-12 py-4 border border-slate-200 rounded-full text-slate-500 font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:border-[#00378a] hover:text-[#00378a] hover:bg-slate-50 active:scale-95">
        Explore More
        <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#00378a] transition-all duration-300 group-hover:w-8"></div>
      </button>
    </div>

    <!-- 情况 A-2: 搜索结果已全部加载完毕 -->
    <div v-else class="text-center">
      <span class="text-[11px] font-bold text-slate-200 uppercase tracking-[0.2em]">
        All matching products have been loaded
      </span>
    </div>

  </template>

  <!-- 情况 B: 搜索结果为空时 (Empty State) -->
  <div v-else 
       class="py-20 flex flex-col items-center justify-center bg-white rounded-[32px] border border-dashed border-slate-100">
    <div class="p-5 bg-slate-50 rounded-full mb-6">
      <Search size="32" class="text-slate-200" stroke-width="1.5" />
    </div>
    <h3 class="text-lg font-bold text-slate-800 mb-2">No matching products found</h3>
    <button @click="searchQuery = ''" 
            class="mt-8 px-8 py-2.5 border border-slate-200 rounded-full text-[11px] font-bold text-slate-400 uppercase tracking-widest hover:border-[#00378a] hover:text-[#00378a] transition-all">
      Clear Search
    </button>
  </div>

</div>
    </div>
  </div>
    </div>
  </section>
</template>

<script setup>
// 1. 导入所有需要的 API
import { ref, computed, watch } from 'vue' // 确保导入了 watch
import { Search, FileText, Send, FlaskConical,ArrowUpRight } from 'lucide-vue-next'
const INITIAL_COUNT = 6;
// 2. 环境配置与 Props 定义
const siteConfig = useAppConfig()
const props = defineProps({
  products: { type: Array, default: () => [] },
  limit: { type: Number, default: 0 },
  showSearch: { type: Boolean, default: true }
})

// 3. 基础响应式变量定义 (最核心的变量放最前面)
const searchQuery = ref('')
const visibleCount = ref(INITIAL_COUNT)
const pageSize = INITIAL_COUNT

// 4. 第一层过滤：根据搜索条件过滤原始列表
const displayProducts = computed(() => {
  if (!props.products) return []
  let list = props.products
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(p => p.name?.toLowerCase().includes(q) || p.cas?.includes(q))
  }
  // 注意：逻辑里处理了 limit 限制
  return props.limit > 0 && !searchQuery.value ? list.slice(0, props.limit) : list
})

// 5. 第二层过滤：根据分页数量切片显示
const paginatedProducts = computed(() => {
  // 必须在 displayProducts 定义之后引用它
  return displayProducts.value.slice(0, visibleCount.value)
})

// 6. 逻辑判断属性
const hasMore = computed(() => {
  return visibleCount.value < displayProducts.value.length
})

// 7. 方法与监听器 (放在最后)
const loadMore = () => {
  visibleCount.value += pageSize
}

// 监听搜索框变化，重置分页
watch(searchQuery, () => {
  visibleCount.value = INITIAL_COUNT
})
</script>

<style scoped>
/* Transition 动画依然建议保留在 CSS 中 */
.list-fade-enter-active,
.list-fade-leave-active {
  transition: all 0.4s ease;
}

.list-fade-enter-from,
.list-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>