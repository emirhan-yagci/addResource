<script>
export default {
    data(){
        return{

        titleValue:"",
        descriptionValue:"",
        urlValue:""

        }

    },  
    methods:{
        sendResource(){
            if(this.titleValue.trim().length > 0  && this.descriptionValue.trim().length > 0 && this.urlValue.trim().length > 0){
            
                this.$emit("sendResource",this.titleValue,this.descriptionValue,this.urlValue);
                this.$emit('select-area','list-resource')
            }
        }
    }
}
</script>

<template>
    <section>
            <div class="container bg-orange-200 p-6 rounded-xl space-y-4 ">
                <div class="space-y-2 ">
                    <label for="title" class=" font-semibold text-xl">Title</label><br>
                    <input v-model="titleValue" id="title"  type="text" class="rounded-md outline-none px-2 py-1 w-full bg-transparent border-2 border-orange-400">
                </div>
                <div class="space-y-2">
                    <label for="description" class=" font-semibold text-xl">Description</label><br>
                    <textarea  v-model="descriptionValue"  id="description" type="text" class=" rounded-md outline-none px-2 py-1 w-full bg-transparent border-2 max-h-32 border-orange-400"></textarea>
                </div>
                <div class="space-y-2">
                    <label for="url" class=" font-semibold text-xl">Url</label><br>
                    <input v-model="urlValue" id="url" type="text" class="rounded-md outline-none px-2 py-1 w-full bg-transparent  border-2 border-orange-400">
                </div>
                <button @click="sendResource" class="bg-green-500 text-white px-5 py-2 rounded-lg">Send Resource</button>
            </div>
        </section>
</template>

<style>

</style>
