<template>
  <span class="flex items-center justify-center h-[2rem] w-[2rem] rounded-full bg-orange text-sm font-semibold text-white leading-none">
            {{avatarInitials(username)}}
   </span>
  <p class="flex">{{ username }}</p>
</template>

<script lang="ts">
export default {
  props: {
    username: String
  },
  methods:{
    avatarInitials: (name: string) =>{
      const nArray = name.split('');
      let letters = nArray.filter(function(char:string) {
        return /[A-Z]/.test(char);
      })
      return letters.join('');
    }
  }
}
</script>