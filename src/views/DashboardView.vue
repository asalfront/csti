<template>
  <div v-if="store.isLogged" class="bg-grayscale-200">
      <main class="mx-auto">
        <section aria-labelledby="menu-user" class="">
          <div class="grid grid-cols-1 lg:grid-cols-4">
            <nav role="menu" class="hidden lg:block bg-white px-8 py-6 border-r border-gray-200 justify-between flex-col min-vh-100">
              <div class="w-full">
                  <h1 aria-labelledby="logo" class="w-full align-items-center justify-content-center">
                    <img class="w-118 h-auto pb-6 mx-auto" alt="" src="src/assets/images/logo_black.svg">
                  </h1>
                  <ul class="border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                    <li>
                        <a class="w-full inline-flex items-center gap-x-3.5 py-4 text-sm font-bold text-aquamarine -mt-px first:mt-0  focus:z-10 focus:outline-none focus:ring-2 dark:border-gray-700 dark:text-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                          <IconPeople />
                          Empleados
                        </a>
                    </li>
                    <li>
                      <a class="w-full inline-flex items-center gap-x-3.5 py-4 text-sm font-bold text-blue-600 -mt-px  first:mt-0 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <IconBriefcase />
                        Reclutamiento
                      </a>
                    </li>
                  </ul>
              </div>
              <div class="w-full">
                <button @click="logoutUser" type="button" class="w-full mx-auto py-3 px-4 inline-block items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Salir
                </button>
              </div>
            </nav>
            <div class="lg:col-span-3">
              <div class="flex justify-between border-b border-gray-200 bg-white px-8 py-6 items-center">
                <div class="lg:invisible text-4xl font-bold tracking-tight text-gray-900 items-center">
                  <h1 aria-labelledby="logo" class="w-full items-center">
                    <img class="w-118 h-auto" alt="" src="src/assets/images/logo_black.svg">
                  </h1>
                </div>
                <div class="flex items-center">
                  <div class="flex items-center space-x-2">
                    <Avatar :username="store.user?.data ? store.user.data?.user?.nombre : 'Usuario Invitado'" />
                  </div>
                </div>
              </div>
              <div class="py-6 px-8">
                <div class="relative sm:rounded-lg bg-white p-6">
                  <div class="px-4 sm:px-0 flex flex-column justify-between">
                    <h3 class="text-2xl font-bold leading-7 text-gray-900">Empleados</h3>
                    <div class="buttons invisible lg:visible">
                      <button class="mr-4 border-blue border border-1 bg-white hover:bg-white text-blue font-bold py-2 px-4 rounded-lg  inline-flex items-center">
                        <IconDownload />
                        <span class="ml-2">Descargar</span>
                      </button>
                      <button class="bg-blue hover:bg-blue border-blue border border-1 text-white font-bold py-2 px-4 rounded-lg  inline-flex items-center">
                        <IconPlus />
                        <span class="ml-2">Nuevo</span>
                      </button>
                    </div>
                  </div>
                  <div class="w-full">
                    <div v-if="store.isLoadingList && store.employers === null">
                      <skeleton />
                    </div>
                    <div v-else>
                      <Content :data-table="store.employers.data" :renderUpdate="updateEmployers" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/user'
import { onMounted, onBeforeMount} from "vue"
import Avatar from "@/components/molecules/avatar.vue";
import Content from "@/components/organisms/content.vue";
import router from "@/router"
import Skeleton from "@/components/molecules/skeleton.vue";
import IconBriefcase from "@/components/atoms/icons/IconBriefcase.vue";
import IconPeople from "@/components/atoms/icons/IconPeople.vue";
import {boolean} from "yup";
import IconDownload from "@/components/atoms/icons/IconDownload.vue";
import IconPlus from "@/components/atoms/icons/IconPlus.vue";
const store = useUserStore()

const logoutUser = ()=>{
  store.$patch({
    isLogged: false
  })
  router.push('/')
}

const updateEmployers = (selectedPage  = 1, selectedLimit = 10)=>{
    if(typeof store.user === 'object' && store.user?.data  ){
        const token = store.user.data.token
        if(store.currentPage === null){
          //delay loading mode
          setTimeout(()=>{
            store.fetchEmployers(token)
          },1000);
          // regular mode
          // store.fetchEmployers(token)
        }else{
          setTimeout(()=>{
            store.fetchEmployers(token, selectedLimit, selectedPage).then(()=>{
              store.$patch({
                currentPage: selectedPage
              })
            })
          },1000);
        }
    }
}

onMounted(() => {
  updateEmployers()
});
onBeforeMount(()=>{
  if(!store.isLogged){
    router.push('/')
  }
})
</script>