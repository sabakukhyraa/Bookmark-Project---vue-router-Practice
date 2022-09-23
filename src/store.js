import { createStore } from "vuex";
import { appAxios } from './utils/appAxios'

const store = createStore({
    state() {
        return {
            bookmarkCount: null
        }
    },

    mutations: {
        bookmarkCounter (state, payload) {
            const date = new Date()
            state.bookmarkCount = `${payload.data.length+1}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getSeconds()}`
        }
    },

    actions: {
        getBookmarks(state) {
            appAxios.get("/bookmarks").then(bookmarkList_response => {
                state.commit('bookmarkCounter', bookmarkList_response)
            })
        }
    },

    getters: {
        getBookmarkCount(state) {
            return state.bookmarkCount
        }
    }
})

export default store