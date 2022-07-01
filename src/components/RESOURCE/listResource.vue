<script>
export default {
  data() {},
  inject: ["resourceWrap"],
  methods:{
    deleteResource(resId){
      this.$emit("deleteResource",resId)
  }
  }
};
</script>

<template>
  <section>
    <div class="container">
      <ul class="w-full space-y-5">
        <li
          class="bg-orange-200 rounded-lg p-4"
          v-for="resource in resourceWrap"
          :key="resource"
        >
          <div class="flex flex-col justify-between items-start space-y-3">
            <div class="w-full flex justify-between">
              <h3 class="font-semibold text-xl">{{ resource.title }}</h3>
              <div
               @click="deleteResource(resource.id)" class="cursor-pointer px-3 py-1 rounded-md hover:bg-orange-600 hover:text-white"
              >
                Delete
              </div>
            </div>
            <span
              >{{ resource.description }} Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Ut esse ipsum voluptatibus sed
              mollitia assumenda et pariatur quos, odio debitis cupiditate
              similique accusamus quasi eveniet, nostrum minima iste officiis.
              Dignissimos?</span
            >
            <a class="text-orange-800 font-semibold" :href="resource.url"
              >View Resource</a
            >
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style>
</style>
