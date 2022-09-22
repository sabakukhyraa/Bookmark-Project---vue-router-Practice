<template>
    

    <div class="container">
        <h1>Bookmark List</h1>


        <router-link class="new-btn" :class="{'center-button':isBookmarkListEmpty}" to="/new">+ New Bookmark</router-link>


        <table v-if="bookmarkList.length > 0">
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
                
            ],
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
                if (delete_response.statusText === "OK") {
                    this.bookmarkList = this.bookmarkList.filter( b => b.id !== bookmark.id )
                }
            })
        }
    },

    computed: {
        isBookmarkListEmpty() {
            return this.bookmarkList.length == 0
        }
    }

}
</script>