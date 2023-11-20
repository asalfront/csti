<template>
  <div class="bg-white">
    <div class="mx-auto grid grid-cols-1 items-center lg:grid-cols-2">
        <div class="gap-4 sm:gap-6 lg:gap-8">
        <Panel/>
        </div>
        <dl class="gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 min-h-full flex-col justify-between w-full">
          <FormLogin />
          <Copyright />
        </dl>
    </div>
  </div>
</template>

<script setup>
import FormLogin from "@/components/templates/formLogin.vue";
import Panel from "@/components/molecules/panel.vue";
import Copyright from "@/components/molecules/copyright.vue";
</script>