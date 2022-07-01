<script>
import theHeader from "./components/theHeader.vue";
import chooseButtons from "./components/chooseButtons.vue";

import "./index.css";
import ListResource from "./components/RESOURCE/listResource.vue";
import AddResource from "./components/RESOURCE/addResource.vue";

export default {
  components: {
    theHeader,
    chooseButtons,
    ListResource,
    AddResource,
  },
  data() {
    return {
      resources: [
        {
          id: 1,
          title: "test",
          description: "lreommmmm",
          url: "https",
        },
      ],
      whichArea: null,
    };
  },
  provide() {
    return {
      resourceWrap: this.resources,
    };
  },
  methods: {
    changeArea(area) {
      this.whichArea = area;
    },
    addResource(title, description, url) {
      this.resources.push({
        id: this.resources.length + 1,
        title: title,
        description: description,
        url: url,
      });
    },
    deleteResource(resId){
      this.resources.splice(resId-1,1)
    }
  },
};
</script>


<template>
  <theHeader />
  <choose-buttons class="mt-6 mb-6" @select-area="changeArea"></choose-buttons>

  <keep-alive>
    <component :is="whichArea" @send-resource="addResource" @select-area="changeArea" @delete-resource="deleteResource" ></component>
  </keep-alive>
</template>



<style>
.container {
  width: 60%;
  margin: auto;
}
</style>
