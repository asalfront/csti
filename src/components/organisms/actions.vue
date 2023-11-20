<template>
  <ul class="flex justify-content-end gap-x-1">
    <li>
      <button type="button" class="flex bg-green flex-shrink-0 justify-center items-center gap-2 h-[1.875rem] w-[1.875rem] text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        <IconEye />
      </button>
    </li>
    <li>
      <button type="button" class="flex bg-sky flex-shrink-0 justify-center items-center gap-2 h-[1.875rem] w-[1.875rem] text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        <IconPencil />
      </button>
    </li>
    <li>
      <button type="button" class="flex bg-red flex-shrink-0 justify-center items-center gap-2 h-[1.875rem] w-[1.875rem] text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        <IconTrash />
      </button>
    </li>
  </ul>
</template>
<script setup lang="ts">
import IconEye from "@/components/atoms/icons/IconEye.vue";
import IconTrash from "@/components/atoms/icons/IconTrash.vue";
import IconPencil from "@/components/atoms/icons/IconPencil.vue";
</script>