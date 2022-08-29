<template>
  <tr>
    <td  class="border border-slate-400 px-4">{{ name }}</td>
    <td  class="border border-slate-400 px-4 text-center">{{ price }}</td>
    <td  class="border border-slate-400 px-4 text-center">{{ quantity }}</td>
    <td  class="border border-slate-400 px-4 w-24 h-24"><img :src="image" alt="product image " /></td>
    <td class="border border-slate-400 px-4">
      <button class="px-2 py-1 bg-red-400 hover:bg-red-300 transition-all rounded text-white">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["name", "price", "quantity", "image"],
};
</script>
