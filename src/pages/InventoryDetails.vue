<template>
  <p v-if="isLoading" class="text-center text-2xl font-semibold mt-7">
    Loading...
  </p>
  <div v-else class="w-3/4 mx-auto mt-10">
    <h1 class="text-center font-semibold text-2xl mt-4 mb-4">
      Inventory Details
    </h1>
    <div class="grid grid-cols-3 gap-4 shadow">
      <div class="border-r-2">
        <img :src="inventory?.image" alt="" />
      </div>
      <div class="border-r-2">
        <h3 class="font-semibold text-lg text-blue-500 mt-4">
          {{ inventory?.name }}
        </h3>
        <p>
          <span class="font-semibold">Quantity: </span>{{ inventory?.quantity }}
        </p>
        <p><span class="font-semibold">Price: </span>{{ inventory?.price }}</p>
        <p>
          <span class="font-semibold">Supplier Name:</span>
          {{ inventory?.supplierName }}
        </p>
      </div>
      <div class="py-4 px-3">
        <h3 class="bg-gray-200 py-1 text-center">Description</h3>
        <p>{{ inventory?.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      inventory: null,
      isLoading: false,
    };
  },
  methods: {
    getInventory() {
      this.isLoading = true;
      axios
        .get(
          `https://fathomless-coast-62063.herokuapp.com/inventory/${this.id}`
        )
        .then(({ data }) => {
          console.log(data);
          this.inventory = data;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getInventory();
  },
};
</script>
