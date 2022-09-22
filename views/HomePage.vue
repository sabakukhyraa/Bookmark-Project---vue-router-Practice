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
                <td>{{ bookmark.url }}</td>
                <td>
                    <button class="delete-btn">Delete</button>
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
                {
                    id: 1,
                    title: "Vue3 eğitimi",
                    url: "https://www.youtube.com/watch?v=lAWKDhZXbKI",
                    description: ""
                },
                {
                    id: 2,
                    title: "Vue3 eğitimi",
                    url: "https://www.youtube.com/watch?v=lAWKDhZXbKI",
                    description: ""
                },
                {
                    id: 3,
                    title: "Vue3 eğitimi",
                    url: "https://www.youtube.com/watch?v=lAWKDhZXbKI",
                    description: ""
                },
                {
                    id: 4,
                    title: "Vue3 eğitimi",
                    url: "https://www.youtube.com/watch?v=lAWKDhZXbKI",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing"
                },
                {
                    id: 5,
                    title: "Vue3 eğitimi",
                    url: "https://www.youtube.com/watch?v=lAWKDhZXbKI",
                    description: ""
                },
                {
                    id: 6,
                    title: "Vue3 eğitimi",
                    url: "https://www.youtube.com/watch?v=lAWKDhZXbKI",
                    description: ""
                },
                {
                    id: 7,
                    title: "Vue3 eğitimi",
                    url: "https://www.youtube.com/watch?v=lAWKDhZXbKI",
                    description: ""
                },
            ]
        }
    },

    created() {
        console.log(this.$route)
    },

    methods: {
        
    }
}
</script>