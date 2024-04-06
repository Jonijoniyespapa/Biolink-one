<template>
  <div>
    <templates-simple v-if="decodedData" :acc="decodedData" />
    <div v-else class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <base-loading class="h-5 w-5" />
    </div>
  </div>
</template>
<script setup>
import { decodeData } from "../utils/transformer";
import { useFavicon } from '@vueuse/core'
const route = useRoute();
const acc = route.query.data;
const decodedData = ref({});
decodedData.value = decodeData(acc);
useSeoMeta({
  title: decodedData.value.n,
  ogTitle: decodedData.value.n,
  appleMobileWebAppTitle: decodedData.value.n,
  description: decodedData.value.d,
  ogDescription: decodedData.value.d,
  ogImage: decodedData.value.i,
  twitterImage: decodedData.value.i,
  twitterCard: 'summary_large_image',

})
useFavicon()
</script>
<style scoped></style>
