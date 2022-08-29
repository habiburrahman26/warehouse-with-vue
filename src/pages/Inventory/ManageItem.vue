<template>
  <div class="pt-10">
    <div class="text-center">
      <router-link
        to="/addItem"
        class="px-8 py-2 text-white bg-blue-600 rounded"
        >Add Item</router-link
      >
    </div>
    <p v-if="isLoading" class="text-center font-semibold pt-4">Loding...</p>
    <div v-else>
      <table class="table-auto mx-auto mt-8 mb-8">
        <tr>
          <th class="border border-slate-700 px-4">Name</th>
          <th class="border border-slate-700 px-4">Price</th>
          <th class="border border-slate-700 px-4">Quantity</th>
          <th class="border border-slate-700 px-4">Photo</th>
          <th class="border border-slate-700 px-4">Action</th>
        </tr>
        <tbody>
          <item-list
            v-for="item in inventories"
            :key="item._id"
            :name="item.name"
            :price="item.price"
            :quantity="item.quantity"
            :image="item.image"
          ></item-list>
        </tbody>
      </table>
      <div class="text-center mb-4">
        <button
          v-for="page in pageNumber"
          :key="page"
          @click="addPageNumber(page)"
          class="border-2 border-blue-200 px-3 py-1 ml-2"
          :class="clickedPage === page ? 'bg-blue-400 text-white' : ''"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ItemList from './ItemList.vue';

export default {
  components: {
    ItemList,
  },
  data() {
    return {
      inventories: [],
      pageNumber: 0,
      clickedPage: 1,
      isLoading: false,
    };
  },
  methods: {
    async pageCount() {
      try {
        const { data } = await axios.get(
          `https://fathomless-coast-62063.herokuapp.com/pageCount`
        );
        const totalPageCount = Math.ceil(data.count / 10);
        this.pageNumber = totalPageCount;
      } catch (error) {
        console.log(error);
      }
    },
    async getInventorys(clickedPage = 0) {
      this.isLoading = true;
      try {
        const { data } = await axios.get(
          `https://fathomless-coast-62063.herokuapp.com/inventorys?page=${clickedPage}`
        );
        this.inventories = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    addPageNumber(page) {
      this.clickedPage = page;
    },
  },
  watch: {
    clickedPage(newVal) {
      this.getInventorys(newVal - 1);
    },
  },
  mounted() {
    this.pageCount();
    this.getInventorys();
  },
};
</script>
