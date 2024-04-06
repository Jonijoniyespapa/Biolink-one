<template>
  <div class="h-screen grid grid-cols-3 divide-x">
    <div class="col-span-2 h-screen flex flex-col bg-slate-100">
      <div class="flex-1 overflow-y-auto p-8">
        <app-form-profile
          v-model:name="data.n"
          v-model:desc="data.d"
          v-model:image="data.i"
        />
        <app-form-hr />
        <app-form-social-links
          v-model:facebook="data.f"
          v-model:twitter="data.t"
          v-model:instagram="data.ig"
          v-model:github="data.gh"
          v-model:telegram="data.tg"
          v-model:linkedin="data.l"
          v-model:email="data.e"
          v-model:whatsapp="data.w"
          v-model:youtube="data.y"
        />
        <app-form-hr />
        <app-form-links v-model="data.ls" />
      </div>
      <div class="border-t bg-white flex items-center">
        <button
          @click="prefillDemoData"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Add demo data </span>
          <icon name="mdi:code-json" class="h-4 w-4" />
        </button>
        <button
          @click="publish"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Publish </span>
          <icon name="ph:paper-plane-tilt-bold" class="h-4 w-4" />
        </button>
      
      </div>
    </div>
    <app-form-preview :data="data" />
  
  </div>
</template>

<script setup>
import { encodeData } from "../utils/transformer";
const data = ref({
  n: "",
  d: "",
  i: "",
  f: "",
  t: "",
  ig: "",
  gh: "",
  tg: "",
  l: "",
  e: "",
  w: "",
  y: "",
  ls: [],
});

const prefillDemoData = () => {
  data.value = {
    n: "Chiang Si Tukang Galon",
    d: "Jual Galon Berkualitas bebas BPA",
    i: "https://i.ibb.co/GcNCX0v/chiang-3.png",
    f: "https://www.facebook.com/chiang_galon",
    t: "https://twitter.com/chiang_galon",
    ig: "https://www.instagram.com/chiang_galon",
    e: "johniyespapa666@gmail.com",
    gh: "https://t.me/chiang787",
    tg: "https://t.me/chiang787",
    w: "https://wa.me/855715416065",
    y: "https://youtube.com/@chiang_galon",
    l: "https://linkedin.com/chiang_galon",
    ls: [
      {
        l: "Website Kami",
        i: "ph:globe-duotone",
        u: "https://example.com",
      },
      {
        l: "Our Amazon Listing",
        i: "ant-design:amazon-outlined",
        u: "https://amazon.co.uk",
      },
    ],
  };
};
useSeoMeta({
  title: 'Biolink for your needs',
  ogTitle: 'Biolink for your needs',
  description: 'Biolink for your needs',
  ogDescription: 'Biolink for your needs',
  ogImage: '/favicon.png',
  twitterCard: 'summary_large_image',
})
const publish = () => {
  const url = `${window.location.origin}/1?data=${encodeData(data.value)}`;
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard");
  });
};
</script>
