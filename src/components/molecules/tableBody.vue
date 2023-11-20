<template>
  <tbody>
  <tr v-for="item in items" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <th  scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
      <div class="ps-3">
        <div class="text-base font-semibold">{{item?.nombre}}</div>
        <div class="font-normal text-gray-500">{{item?.correo}}</div>
      </div>
    </th>
    <td class="ps-3">
      <div class="text-blue">{{item?.cargo}}</div>
    </td>
    <td class="ps-3">
      <div class="text-blue">{{item?.departamento}}</div>
    </td>
    <td class="ps-3">
      <div class="text-blue">{{item?.oficina}}</div>
    </td>
    <td class="ps-3">
      <div class="text-blue">{{item?.estadoCuenta}}</div>
    </td>
    <td v-if="withActions"  class="px-6 py-4">
      <Actions />
    </td>
  </tr>
  </tbody>
</template>
<script setup lang="ts">
import Actions from "@/components/organisms/actions.vue";

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