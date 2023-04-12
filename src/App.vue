<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { NaiveProvider } from '@/components/common'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'
import { onMounted } from 'vue'


const { theme, themeOverrides } = useTheme()
const { language } = useLanguage()

onMounted(() => {
  document.getElementsByClassName('dialog')[0].showModal();
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
      <dialog class="dialog">
        <div class="dialog-header">
            这是标题
            <div class="close-btn" onclick="() => {document.getElementsByClassName('dialog')[0].close();} )"></div>
        </div>
        <div class="dialog-content">
            这里是内容
        </div>
      </dialog>
      <RouterView />
    </NaiveProvider>
  </NConfigProvider>
</template>
