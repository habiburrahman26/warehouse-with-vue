<template>
  <div class="shadow-lg rounded p-4 mb-8">
    <div class="">
      <img :src="image" alt="" />
    </div>
    <div>
      <h3 class="font-medium">{{ name }}</h3>
      <p><span class="font-medium">Description:</span>{{ reduceDescription }}</p>

      <p><span class="font-medium">Quantity:</span> {{ quantity }}</p>
      <p><span class="font-medium">Supplier name:</span> {{ supplierName }}</p>
      <p><span class="font-medium">Price:</span> {{ price }}Tk</p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    '_id',
    'name',
    'image',
    'quantity',
    'price',
    'description',
    'supplierName',
  ],
  computed: {
    reduceDescription() {
      return this.description.length > 60
        ? this.description.slice(0, 60) + '...'
        : this.description;
    },
  },
};
</script>
