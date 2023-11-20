<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Inicia sesión</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit="loginUser" class="" action="#" method="POST">
          <div class="w-full pt-6">
            <label class="block text-sm font-medium leading-6 text-gray-900">Correo electrónico<span class="text-alerts">*</span></label>
            <div class="mt-2">
              <Input name="email" type="email" :on-update="cleanLoginUserError"  :width-validation="true"/>
            </div>
          </div>
          <div class="w-full pt-6">
            <div class="flex items-center justify-between">
              <label class="block text-sm font-medium leading-6 text-gray-900">Contraseña<span class="text-alerts">*</span></label>
            </div>
            <div class="mt-2">
              <Input name="password" type="password" :on-update="cleanLoginUserError" :width-validation="true" />
            </div>
          </div>
          <p
              class="errors text-alerts flex items-center pt-6"
              v-if="store.isLoginFailed"
          >    <u class="inset-y-0 end-0 flex items-center pointer-events-none pe-2">
            <IconInfo />
          </u>Correo o contraseña incorrectos</p>

          <button type="submit" :disabled="store.isLoadingForm" class="mt-6 flex w-full items-center justify-center rounded-md bg-blue px-6 py-4 text-sm font-semibold leading-6 disabled:bg-gray-500 text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <span v-if="store.isLoadingForm" class="mr-2 animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
            </span>
            Iniciar sesión
          </button>

      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        ¿Eres nuevo aquí?
        {{ ' ' }}
        <a href="#" class="font-semibold leading-6 text-green hover:text-green">Crea una cuenta</a>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import Input from "@/components/atoms/input.vue";
import { Form, useForm } from 'vee-validate';
import { useUserStore } from '@/store/user'
import {onBeforeMount, onMounted} from "vue"
import router from "@/router"
import IconInfo from "@/components/atoms/icons/IconInfo.vue";
import * as Yup from "yup"


const store = useUserStore()
const { handleSubmit } = useForm({
  validationSchema: Yup.object({
    email: Yup.string()
        .email("Formato de Correo Incorrecto")
        .required("Este campo es requerido"),
    password: Yup.string()
        .required("Este campo is requerido"),
  })
})
const loginUser = handleSubmit(values => {
  store.fetchUsers(values.email, values.password).then(()=>{
    if(!store.isLoginFailed && store.isLogged){
        router.push('/dashboard')
    }
  });
});
const cleanLoginUserError = ()=>{
  store.$patch({
    isLoginFailed: false
  })
}
onBeforeMount(()=>{
  if(!store.isLoginFailed && store.isLogged){
    router.push('/dashboard')
  }else{
    store.$patch({
      isLoginFailed: false,
      isLoadingForm: false
    })
  }
})
</script>