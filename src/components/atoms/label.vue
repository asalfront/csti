<template>
  <label for={{forLabel}}} class="block py-3 px-4 text-grayscale-900">{{children}}</label>
</template>
<script lang="ts">
export default {
  props: {
    forLabel: String,
    children: String
  }
}
</script>