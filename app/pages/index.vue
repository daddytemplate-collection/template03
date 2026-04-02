<template>
  <div>
    <HeroBlock />
    <CaseBlock />
    <BenefitsGridBlock  :showSearch="true" :products="myProductList"  />
    <FaqBlock />
    <CartBlock />
  </div>
</template>

<script setup>
const siteConfig = ref({

})
onMounted(async () => {
  try {
    const response = await fetch('/setting.json')
    if (response.ok) {
      const data = await response.json()
      siteConfig.value = { ...siteConfig.value, ...data }
    }
  } catch (e) {
    console.warn("Setting.json not found")
  }
})

const myProductList = [
  { id: '00001', name: '2,3-PENTANEDIONE', cas: '600-14-6', fema: '2841', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11747&t=l' },
  { id: '00002', name: '2-METHYL-2-PENTENOIC ACID', cas: '3142-72-1', fema: '3142', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11770&t=l' },
  { id: '00003', name: 'MENTHOL CRYSTAL', cas: '2216-51-5', fema: '2665', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11770&t=l' },
  { id: '00003', name: 'MENTHOL CRYSTAL', cas: '2216-51-5', fema: '2665', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11770&t=l' },
  { id: '00003', name: 'MENTHOL CRYSTAL', cas: '2216-51-5', fema: '2665', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11770&t=l' },
  { id: '00003', name: 'MENTHOL CRYSTAL', cas: '2216-51-5', fema: '2665', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11770&t=l' },
  { id: '00003', name: 'MENTHOL CRYSTAL', cas: '2216-51-5', fema: '2665', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11770&t=l' },
  { id: '00003', name: 'MENTHOL CRYSTAL', cas: '2216-51-5', fema: '2665', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11770&t=l' },
  { id: '00003', name: 'MENTHOL CRYSTAL', cas: '2216-51-5', fema: '2665', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11770&t=l' },
  { id: '00003', name: 'MENTHOL CRYSTAL', cas: '2216-51-5', fema: '2665', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11770&t=l' },
  { id: '00003', name: 'MENTHOL CRYSTAL', cas: '2216-51-5', fema: '2665', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11770&t=l' },
  { id: '00003', name: 'MENTHOL CRYSTAL', cas: '2216-51-5', fema: '2665', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11770&t=l' },
  { id: '00003', name: 'MENTHOL CRYSTAL', cas: '2216-51-5', fema: '2665', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11770&t=l' },
  { id: '00003', name: 'MENTHOL CRYSTAL', cas: '2216-51-5', fema: '2665', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11770&t=l' },
  { id: '00003', name: 'MENTHOL CRYSTAL', cas: '2216-51-5', fema: '2665', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11770&t=l' },
  { id: '00003', name: 'MENTHOL CRYSTAL', cas: '2216-51-5', fema: '2665', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11770&t=l' },
  { id: '00003', name: 'MENTHOL CRYSTAL', cas: '2216-51-5', fema: '2665', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11770&t=l' },
  { id: '00003', name: 'MENTHOL CRYSTAL', cas: '2216-51-5', fema: '2665', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11770&t=l' },
  { id: '00003', name: 'MENTHOL CRYSTAL', cas: '2216-51-5', fema: '2665', molecule_img: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11770&t=l' },
]
const { data: products } = await useAsyncData(`category-category2`, () => {
  return queryCollection('products')
    // 必须指定是对 'path' 字段进行模糊匹配
    .where('path', 'LIKE', '/products/category2/%') 
    .all()
})
console.log('pr',products)
// seo meta
useSeoMeta({
  title: () => siteConfig.value?.seo?.index.title || 'Default Title',
  description: () => siteConfig.value?.seo?.index.description || 'Default description',
  ogTitle: () => siteConfig.value?.seo?.index.title || 'Default Title',
  ogDescription: () => siteConfig.value?.seo?.index.description || 'Default description',
  ogImage: () => siteConfig.value?.seo?.index.ogImage || '/default-og.jpg',
  twitterCard: () => siteConfig.value?.seo?.index.twitterCard || 'summary_large_image',
})
</script>

<style scoped>
/* styles */
</style>