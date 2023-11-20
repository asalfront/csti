
<template>
    <div>
        <div>
          <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Gestiona tus empleados</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 py-3">
          <div class="relative lg:col-span-8">
            <div class="absolute inset-y-0 rtl:inset-r-0 end-4 flex items-center ps-3 pointer-events-none z-10">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.80541 2.94C6.01372 2.94 2.93994 6.01378 2.93994 9.80547C2.93994 13.5972 6.01372 16.6709 9.80541 16.6709C13.5971 16.6709 16.6709 13.5972 16.6709 9.80547C16.6709 6.01378 13.5971 2.94 9.80541 2.94ZM1.68994 9.80547C1.68994 5.32342 5.32336 1.69 9.80541 1.69C14.2875 1.69 17.9209 5.32342 17.9209 9.80547C17.9209 14.2875 14.2875 17.9209 9.80541 17.9209C5.32336 17.9209 1.68994 14.2875 1.68994 9.80547Z" fill="#111827"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5727 14.9629C14.8164 14.7185 15.2121 14.718 15.4565 14.9617L18.3932 17.8908C18.6376 18.1346 18.6381 18.5303 18.3944 18.7747C18.1506 19.0191 17.7549 19.0196 17.5105 18.7758L14.5738 15.8468C14.3294 15.603 14.3289 15.2073 14.5727 14.9629Z" fill="#111827"/>
              </svg>
            </div>
            <Input />
          </div>
          <div class="lg:col-span-4">
            <Dropdown label="Nombre de cargo" />
          </div>
        </div>
        <div class="w-full">
          <div class="overflow-x-auto">
            <Table :contents="dataTable" :headings="headingsTable" :with-actions="true" />
          </div>
          <div>
            <pagination :items-per-page="1" :total-items="5" :max-pages-shown="3" :on-click-handler="updatePageContent"  />
          </div>

        </div>
    </div>

</template>
<script>
import Dropdown from "@/components/atoms/dropdown.vue"
import Pagination from "@/components/molecules/pagination.vue"
import Table from "@/components/molecules/table.vue"
import Skeleton from "@/components/molecules/skeleton.vue";
import { useUserStore } from '@/store/user'
import Input from "@/components/atoms/input.vue"
const store = useUserStore()

export default {
  components: {Skeleton, Dropdown, Pagination, Table, Input},
  props:{
    dataTable: {
      required: true
    },
    renderUpdate:{
      required: true
    }
  },
  data(){
    return{
      contentsTable:store.employers?.data,
      headingsTable: [
        { label: 'Nombre', id: '#' },
        { label: 'Nombre cargo', id: '#' },
        { label: 'Departamento', id: '#' },
        { label: 'Oficina', id: '#' },
        { label: 'Cuenta', id: '#' },
      ]
    }
  },
  methods:{
    updatePageContent(page){
      this.renderUpdate(page, 10)
    },
  },
};
</script>