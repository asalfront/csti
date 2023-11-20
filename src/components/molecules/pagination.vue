<template>
  <div class="w-full flex flex-column justify-between py-6 overflow-hidden">
    <div class="pagination-styles">
      <vue-awesome-paginate
          :total-items="totalItems"
          v-model="currentPage"
          :items-per-page="itemsPerPage"
          :max-pages-shown="maxPagesShown"
          :on-click="onClickHandler(currentPage)"
          :disable-breakpoint-buttons="true"
      >
        <template #prev-button>
          <span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#F1F2F4"
                width="12"
                height="12"
                viewBox="0 0 24 24"
            >
              <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
            </svg>
          </span>
        </template>

        <template #next-button>
          <span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#F1F2F4"
                width="12"
                height="12"
                viewBox="0 0 24 24"
            >
              <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
            </svg>
          </span>
        </template>
      </vue-awesome-paginate>
    </div>
    <div class="">
      <p class="inline-flex mr-4">
        Mostrando {{currentPage}} a {{totalItems}} de 50 registros
      </p>
      <button type="button" class="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
        Mostrar 10
        <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {VueAwesomePaginate} from "vue-awesome-paginate";
export default {
  components: {VueAwesomePaginate},
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    maxPagesShown:{
      type: Number,
      default: 5
    },
    onClickHandler:{
      type: Function,
      required: false
    }
  },
  setup() {
    const currentPage = ref(1);
    return {
      currentPage,
    };
  },
};
</script>
<style>
.pagination-styles .pagination-container {
  column-gap: 10px;
  align-items: center;
}
.pagination-styles .paginate-buttons {
  height: 32px;
  width: 32px;
  cursor: pointer;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  color: black;
}

.pagination-styles .back-button,
.pagination-styles .next-button {
  background-color: white;
  color: #111827;
  border-radius: 8px;
  border: 2px solid #F1F2F4;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pagination-styles .active-page {
  background-color: #F8F8F8;
}
.pagination-styles .paginate-buttons:hover {
  background-color: white;
  border: 2px solid #F1F2F4;
}
.pagination-styles .active-page:hover {
  background-color: #e5e5e5;
}

.pagination-styles .back-button svg {
  transform: rotate(180deg) translateY(-2px);
}
.pagination-styles .next-button svg {
  transform: translateY(2px);
}

.pagination-styles .back-button:hover,
.pagination-styles .next-button:hover {
  background-color: white;
}

.pagination-styles .back-button:active,
.pagination-styles .next-button:active {
  background-color: white;
}
</style>