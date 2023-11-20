<template>
  <thead class="bg-gray-50 dark:bg-gray-700">
  <tr>
    <th v-for="item in items" :key="item.id" scope="col" class="px-6 py-3">
      <div class="text-grayscale-700">
      {{item.label}}
      </div>
    </th>
    <th v-if="withActions" scope="col" class="px-6 py-3 text-right">
       Acciones
    </th>
  </tr>
  </thead>
</template>
<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array,
    required: false
  },
  withActions:{
    type:Boolean,
    required: false
  }
});
</script>