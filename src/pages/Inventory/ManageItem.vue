<template>
  <div>
    <div class="text-center">
      <router-link
        to="/addItem"
        class="px-8 py-2 text-white bg-blue-600 rounded"
        >Add Item</router-link
      >
    </div>
    <table class="table">
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Img</th>
        <th>Action</th>
      </tr>
      <tbody></tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      inventories: [],
      pageNumber: 0,
      clickedPage: 0,
      isLoading: false,
    };
  },
  methods: {
    async getInventorys() {
      try {
        this.isLoading = true;
        const { data } = await axios.get(
          `https://fathomless-coast-62063.herokuapp.com/inventorys?page=${this.clickedPage}`
        );
        this.inventories = data;
        this.isLoading = false;
        console.log(data);
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
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
  },
  mounted() {
    this.pageCount();
    this.getInventorys();
  },
};
</script>
