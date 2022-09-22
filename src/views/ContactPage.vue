<template>

    <div>
        <h1>Contact</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam officiis eligendi quod nostrum dicta similique?</p>
        <p>
            Your ID: {{ $route.params.userID }}, Type: {{ $route.query.type }}
        </p>
    </div>

</template>

<script>

export default {
    created() {
        console.log(this.$route);
    },
    
}
</script>