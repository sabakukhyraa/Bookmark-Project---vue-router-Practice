<template>
    

    <div class="container">
        <h1>Bookmark List</h1>


        <router-link class="new-btn" to="/new">+ New Bookmark</router-link>


        <table>
            <thead>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>URL</th>
                <th></th>
            </thead>

            <tr v-for="bookmark in bookmarkList" :key="bookmark"  class="table-row">
                <td>{{ bookmark.id }}</td>
                <td>{{ bookmark.title }}</td>
                <td>{{ bookmark.description }}</td>
                <td>
                    <a target="_blank" :href="bookmark.url">{{ bookmark.url }}</a>
                </td>
                <td>
                    <button @click="deleteBookmark(bookmark)" class="delete-btn">Delete</button>
                </td>
            </tr>
        </table>

    </div>

    
</template>

<script>
export default {

    data() {
        return {
            bookmarkList: [
                
            ]
        }
    },

    created() {
        console.log(this.$route)
        this.$appAxios.get("/bookmarks").then(
            bookmarkList_response => {
                this.bookmarkList = bookmarkList_response.data || [];
            }
        )
    },

    methods: {
        deleteBookmark(bookmark) {
            this.$appAxios.delete(`/bookmarks/${bookmark.id}`)
            .then(delete_response => {
                console.log(delete_response)
            })
        }
    }

}
</script>