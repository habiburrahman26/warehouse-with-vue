<template>
  <p v-if="isLoading" class="text-6xl">Loading...</p>
  <div v-else class="grid grid-cols-3 gap-8 w-3/4 mx-auto">
    <InventoryList
      v-for="inventory in inventorys"
      :key="inventory._id"
      :_id="inventory._id"
      :name="inventory.name"
      :image="inventory.image"
      :supplierName="inventory.supplierName"
      :price="inventory.price"
      :description="inventory.description"
    >
    </InventoryList>
  </div>
</template>

<script>
import axios from 'axios';
import InventoryList from './InventoryList.vue';

export default {
  components: {
    InventoryList,
  },
  data() {
    return {
      inventorys: [],
      isLoading: false,
    };
  },
  methods: {
    getInventorys() {
      this.isLoading = true;
      axios('https://fathomless-coast-62063.herokuapp.com/inventory').then(
        ({ data }) => {
          this.inventorys = data;
          console.log(data);
        }
      );
      this.isLoading = false;
    },
  },
  mounted() {
    this.getInventorys();
    console.log(this.isLoading)
  },
};
</script>
