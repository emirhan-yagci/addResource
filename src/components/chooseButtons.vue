<script>
export default {};
</script>

<template>
  <section>
    <div class="container bg-orange-200 p-3 rounded-2xl space-y-1">
      <button @click="$emit('select-area','list-resource')" class="px-5 py-2 rounded-md bg-orange-600 text-white mr-4">
        See Your Resources
      </button>
      <button @click="$emit('select-area','add-resource')" class="px-5 py-2 rounded-md bg-orange-600 text-white">
        Add Resources
      </button>
    </div>
  </section>
</template>

<style>
</style>
