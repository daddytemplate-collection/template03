<template>
    <nav :class="[
        'fixed top-0 left-0 right-0 z-[20] transition-all duration-500 ease-in-out',
        isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-lg py-0'
            : 'bg-transparent py-4'
    ]">
        <div class=" px-6 xl:px-12 mx-auto">
            <div class="flex items-center justify-between h-20">

                <!-- 1. Logo Area -->
                <div class="transition-all duration-500" :class="isScrolled ? 'scale-95' : 'scale-100'">
                    <NuxtLink to="/" class="flex items-center gap-3 group">
                        <div class="flex h-12 items-center justify-center">
                           <!-- Logo 动态切换 -->
                           <img 
                                :src="isScrolled ? siteConfig?.logo?.darklogoUrl : siteConfig?.logo?.lightlogoUrl" 
                                :alt="siteConfig?.logo?.logoName" 
                                class="w-auto h-full object-contain transition-opacity duration-300"
                            >
                        </div>
                        <!-- 文字颜色动态切换 -->
                        <span :class="[
                            'text-xl font-bold tracking-tighter uppercase whitespace-nowrap transition-colors duration-500',
                            isScrolled ? 'text-slate-900' : 'text-white'
                        ]">
                            {{ siteConfig?.logo?.logoName }}
                        </span>
                    </NuxtLink>
                </div>

                <!-- 2. Desktop Navigation -->
                <div class="hidden md:flex items-center h-full gap-2">
                    <div v-for="(item, index) in navItems" :key="index"
                        class="relative group h-full flex items-center">

                        <!-- 导航项按钮：文字颜色动态切换 -->
                        <NuxtLink :to="item.href"
                            :class="[
                                'transition-all px-4 py-2 rounded-full font-medium text-lg flex items-center gap-1.5',
                                isScrolled 
                                    ? ' text-[#001f4e] font-light hover:text-blue-600 hover:bg-slate-100' 
                                    : 'text-white/80 hover:text-white hover:bg-white/10'
                            ]">
                            {{ item.label }}
                            <ChevronDown v-if="item.hasDropdown"
                                class="w-3.5 h-3.5 opacity-40 group-hover:rotate-180 group-hover:opacity-100 transition-all duration-500" />
                        </NuxtLink>

                        <!-- 下拉菜单 -->
                        <div v-if="item.hasDropdown" class="absolute top-full left-1/2 -translate-x-1/2 w-52 pt-4
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                            transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[200]">
                            
                            <div class="absolute top-0 left-0 w-full h-4"></div>

                            <!-- 下拉菜单样式优化：根据背景调整 -->
                            <div :class="[
                                'border rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-500',
                                isScrolled 
                                    ? 'bg-white border-slate-100' 
                                    : 'bg-white border-slate-100'
                            ]">
                                <NuxtLink v-for="(subItem, subIndex) in item.subItems" :key="subIndex"
                                    :to="subItem.href"
                                    :class="[
                                        'block px-5 py-3 text-sm font-medium transition-colors',
                                        isScrolled
                                            ? 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                                            : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                                    ]">
                                    {{ subItem.label }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 3. Action Button -->
                <div class="hidden md:flex items-center">
                    <!-- 根据背景切换按钮风格 -->
                    <PremiumButton 
                        @click="onInquiry" 
                        :variant="isScrolled ? 'white' : 'outline'" 
                        size="sm" 
                        withArrow
                    >
                        Inquiry Now
                    </PremiumButton>
                </div>

                <!-- 4. Mobile Menu Toggle -->
                <div class="md:hidden flex items-center z-[100]">
                    <button @click="mobileMenuOpen = !mobileMenuOpen"
                        :class="[
                            'p-2.5 rounded-full transition-colors focus:outline-none',
                            isScrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/5 text-white'
                        ]"
                        aria-label="Toggle Menu">
                        <X v-if="mobileMenuOpen" class="w-6 h-6" />
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M4 8h16M8 16h12" />
                        </svg>
                    </button>
                </div>

                <!-- 5. Mobile Menu Overlay (保持深色或根据主题调整) -->
                <Transition enter-active-class="transition-all duration-500 ease-out"
                    enter-from-class="opacity-0 translate-y-4" enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition-all duration-300 ease-in"
                    leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-4">
                    <div v-if="mobileMenuOpen"
                        class="md:hidden fixed inset-0 top-0 z-[10] bg-slate-900/95 backdrop-blur-3xl overflow-y-auto px-6 py-10">
                        <div class="flex flex-col gap-2 pt-16">
                            <div v-for="(item, index) in navItems" :key="index" class="w-full">
                                <div class="flex items-center justify-between py-4 border-b border-white/5">
                                    <NuxtLink :to="item.href" @click="mobileMenuOpen = false"
                                        class="text-2xl font-bold text-white tracking-tight">
                                        {{ item.label }}
                                    </NuxtLink>

                                    <button v-if="item.hasDropdown" @click="toggleMobileDropdown(index)"
                                        class="p-2 bg-white/5 rounded-full text-white/50">
                                        <ChevronDown :class="{ 'rotate-180 text-blue-400': mobileDropdowns[index] }"
                                            class="w-5 h-5 transition-transform duration-500" />
                                    </button>
                                </div>

                                <div v-if="item.hasDropdown && mobileDropdowns[index]"
                                    class="mt-2 ml-4 flex flex-col gap-4 border-l border-white/10 pl-6 py-4">
                                    <NuxtLink v-for="(subItem, subIndex) in item.subItems" :key="subIndex"
                                        :to="subItem.href" @click="mobileMenuOpen = false"
                                        class="text-lg text-white/60 hover:text-white transition-colors">
                                        {{ subItem.label }}
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch, onUnmounted } from 'vue'
import { X, ChevronDown } from 'lucide-vue-next'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const mobileDropdowns = ref<Record<number, boolean>>({})

const siteConfig = useAppConfig()
const { openInquiry } = useInquiry()

const onInquiry = () => {
    openInquiry("", { showLabel: false })
}

// 优化滚动监听，增加节流防抖
const handleScroll = () => {
    isScrolled.value = window.scrollY > 50 // 滚动超过50px触发
}

// 数据获取（保持你的逻辑）
const { data: navData } = await useProductsNav()
const navItems = computed(() => {
    const rootNode = navData.value?.[0]
    if (!rootNode) {
        return [
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' }
        ]
    }

    const productMenu = {
        label: rootNode.title,
        href: rootNode.path,
        hasDropdown: true,
        subItems: rootNode.children?.map(child => ({
            label: child.title,
            href: child.path
        })) || []
    }

    return [
        { label: 'Home', href: '/' },
        productMenu,
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' }
    ]
})

const toggleMobileDropdown = (index: number) => {
    mobileDropdowns.value[index] = !mobileDropdowns.value[index]
}

// 禁止移动端滚动
watch(mobileMenuOpen, (isOpen) => {
    if (process.client) {
        document.body.style.overflow = isOpen ? 'hidden' : ''
    }
})

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>