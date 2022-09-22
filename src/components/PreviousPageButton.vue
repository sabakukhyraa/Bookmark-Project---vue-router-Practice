<template>
    <button class="back-button" @click="goBack">← Previous Page</button>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>