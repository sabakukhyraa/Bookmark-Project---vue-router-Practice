<template>
    <div class="container">
        
        <div class="bookmark-form">
            <h1>New Bookmark</h1>

            <div class="title form-element">
                <label for="title">Title</label>
                <input v-model="bookmarkData.title" type="text" id="title" placeholder="Java Course...">
            </div>

            <div class="url form-element">
                <label for="url">URL</label>
                <input v-model="bookmarkData.url" type="text" id="url" placeholder="https://">
            </div>

            <div class="description form-element">
                <label for="description">Description</label>
                <textarea v-model="bookmarkData.description" placeholder="About this bookmark..." id="description" rows="3"></textarea>
            </div>

            <div class="buttons">
                <button><router-link class="cancel-btn" to="/">Cancel</router-link></button>
                <button @click="addBookmark">Save</button>
            </div>
            
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            bookmarkData : {
                id: null,
                title: null,
                url: null,
                description: null
            }
        }
    },
    methods: {
        addBookmark() {
            this.bookmarkData.id = new Date().getTime()
            console.log(this.bookmarkData)

            this.$axios.post("http://localhost:3000/bookmarks", this.bookmarkData)
            .then(save_response => {
                console.log("save_response", save_response)
            })
            this.bookmarkData = {
                id: null,
                title: null,
                url: null,
                description: null
            }
        }
    }
}
</script>