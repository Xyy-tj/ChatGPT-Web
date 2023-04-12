<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { NaiveProvider } from '@/components/common'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'
import { onMounted } from 'vue'

const { theme, themeOverrides } = useTheme()
const { language } = useLanguage()

onMounted(() => {
  window.alert('请及时重置CatGPT对话窗口清理历史信息（输入框左侧垃圾箱小图标），以减小对话token消耗，CatGPT表示感谢！')
})

</script>


<template>
  <NConfigProvider
    class="h-full"
    :theme="theme"
    :theme-overrides="themeOverrides"
    :locale="language"
  >
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </NConfigProvider>
</template>
