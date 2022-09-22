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
            state.bookmarkCount = payload.data.length
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