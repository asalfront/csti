<template>
    <input @keyup="onUpdate" :name="name"  :placeholder="placeholder" v-model="value" :type="type || 'text'" :autocomplete="autocomplete || 'text'" class="form-control autocomplete:bg-white py-4 px-4 block w-full border border-grayscale-300 rounded-lg text-sm focus:border-green focus:ring-green disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />

  <p v-if="widthValidation && errorMessage" class="errors text-alerts flex items-center pt-6">
    <u class="inset-y-0 end-0 flex items-center pointer-events-none pe-2"><IconInfo /></u>
    {{ errorMessage }}
  </p>

  </template>

  <script setup>
    import { useField } from 'vee-validate';
    import IconInfo from "@/components/atoms/icons/IconInfo.vue";

    const props = defineProps({
      id: String,
      name: String,
      type: String,
      placeholder: String,
      autocomplete: Boolean,
      onUpdate: {
        type: Function,
        default: ()=>{},
        required: false
      },
      widthValidation: {
        type: Boolean,
        default: false,
        required:false
      }
    });

    const { value, errorMessage } = useField(() => props.name);
  </script>