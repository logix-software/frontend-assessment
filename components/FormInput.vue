<script setup>

defineProps({
    id: {
        type: String,
    },
    inputType: {
        type: String
    },
    inputLabel: {
        type: String
    },
    inputPlaceholder: {
        type: String
    }
})

const value = defineModel()
</script>

<template>
    <div class="flex flex-col gap-3">
        <label v-text="inputLabel" :for="id" class=" text-white text-lg font-medium" />
        <input :id="id" :type="inputType" :placeholder="inputPlaceholder"
            class=" bg-white py-5 px-7 outline-0 focus:ring-1 focus:ring-primary placeholder:text-lg placeholder:text-[#809396] placeholder:font-medium text-lg font-medium"
            v-model="value" />
    </div>
</template>
