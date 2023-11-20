<template>
  <div role="status"  class="w-full overflow-x-hidden">
    <div class="p-4 align-items-center divide-y divide-gray-200 animate-pulse dark:divide-gray-700 dark:border-gray-700">
      <div v-for="index in 10" :key="index" class="flex items-center justify-between">
        <div class="flex space-x-2 py-3">
          <div class="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-6"></div>
          <div class="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-36"></div>
        </div>
        <div>
          <div class="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div>
          <div class="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div>
          <div class="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div>
          <div class="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div>
          <div class="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-12"></div>
        </div>
      </div>

      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>