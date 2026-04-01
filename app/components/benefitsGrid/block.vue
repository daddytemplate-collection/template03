<template>
  <section class="bg-[#FBFDFF] py-[60px]">
    <div class="max-w-[1200px] mx-auto px-5">
      
      <!-- 顶部搜索栏 -->
      <div v-if="showSearch" class="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
        <div class="flex items-center bg-white border border-slate-200 px-5 py-2.5 rounded-full w-full md:w-[350px] focus-within:border-[#00378a] transition-colors">
          <Search class="text-slate-400" size="18" />
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Search Product or CAS..." 
            class="border-none outline-none ml-2.5 w-full text-sm placeholder:text-slate-400" 
          />
        </div>
        <div class="text-sm font-medium text-slate-500">
          Total: <span class="text-[#00378a] font-bold">{{ displayProducts.length }}</span>
        </div>
      </div>

      <!-- 产品列表 -->
      <div class="product-list-container">
        <!-- 列表头 (桌面端) -->
        <div class="hidden md:grid grid-cols-[2.5fr_1.5fr_1fr_1fr] gap-5 px-[30px] pb-[15px] border-b border-slate-100">
          <div class="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Product Info</div>
          <div class="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Technical Codes</div>
          <div class="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Documentation</div>
          <div class="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider text-right">Action</div>
        </div>

        <TransitionGroup name="list-fade">
          <div 
            v-for="item in displayProducts" 
            :key="item.id" 
            class="group bg-white border-b border-slate-100 p-5 md:p-[30px] grid grid-cols-1 md:grid-cols-[2.5fr_1.5fr_1fr_1fr] items-center gap-5 transition-all duration-300 hover:bg-[#fcfdfe] hover:translate-x-1 md:hover:translate-x-2.5"
          >
            
            <!-- 1. 图片与名称列 -->
            <div class="flex items-center gap-5">
              <div class="shrink-0">
                <!-- 内部容器：保持浅蓝色背景 -->
                <div class="w-[100px] h-[100px] bg-[#e0eaf6] rounded-2xl flex items-center justify-center transition-all duration-400 ">
                  <img 
                    v-if="item.molecule_img" 
                    :src="item.molecule_img" 
                    class="rounded-2xl object-contain transition-all duration-400 " 
                  />
                  <FlaskConical 
                    v-else 
                    size="28" 
                    stroke-width="2" 
                    class="text-[#00378a] transition-all duration-400 group-hover:text-white" 
                  />
                </div>
              </div>
              <div class="flex flex-col">
                <span class="font-mono text-[11px] text-slate-300 font-bold uppercase tracking-tight">REF: #{{ item.id }}</span>
                <h4 class="text-[19px] font-extrabold text-[#001f4e] my-1 leading-tight">{{ item.name }}</h4>
                <div class="flex gap-1.5 mt-2">
                  <span class="text-[9px] font-extrabold bg-slate-100 text-slate-400 px-2 py-0.5 rounded uppercase">Food Grade</span>
                  <span class="text-[9px] font-extrabold bg-slate-100 text-slate-400 px-2 py-0.5 rounded uppercase">99%+ Purity</span>
                </div>
              </div>
            </div>

            <!-- 2. 技术参数列 (CAS / FEMA) -->
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
                <FileText size="14" /> MSDS
              </button>
            </div>

            <!-- 4. 询盘按钮列 -->
            <div class="flex justify-start md:justify-end">
              <button 
                @click="$emit('inquiry', item)"
                class="bg-[#00378a] text-white px-6 py-3 rounded-xl font-extrabold text-sm flex items-center gap-2.5 transition-all duration-300 hover:bg-[#002d70] hover:shadow-[0_10px_20px_rgba(0,55,138,0.2)]"
              >
                <Send size="16" />
                <span>Inquiry</span>
              </button>
            </div>

          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Search, FileText, Send, FlaskConical } from 'lucide-vue-next'

const props = defineProps({
  products: { type: Array, default: () => [] },
  limit: { type: Number, default: 0 },
  showSearch: { type: Boolean, default: true }
})

const searchQuery = ref('')

const displayProducts = computed(() => {
  if (!props.products) return []
  let list = props.products
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(p => p.name?.toLowerCase().includes(q) || p.cas?.includes(q))
  }
  return props.limit > 0 && !searchQuery.value ? list.slice(0, props.limit) : list
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