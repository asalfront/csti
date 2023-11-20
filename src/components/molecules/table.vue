
<template>
<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x-auto">
  <tableHead :items="headings" :with-actions="withActions" />
  <tableBody :items="contents" :with-actions="withActions"/>
</table>
</template>
<script setup lang="ts">
import TableHead from "@/components/molecules/tableHead.vue";
import TableBody from "@/components/molecules/tableBody.vue";

const props = defineProps({
  contents:{
    type: Array,
    required: false
  },
  headings: {
    type: Array,
    required: false
  },
  withActions:{
    type: Boolean,
    required: false
  }
});
</script>
