import { writable } from "svelte/store"
import { saveArrayToLocalStorage, getArrayFromLocalStorage } from './utils/localStorage.js'

function createPosts() {
    /**
     * @typedef {Object} Post
     * @property {string} title
     * @property {string} text
     * @property {Date} created
     * @property {Date} lastModified
     */

    /**
     * @type {Array<Post>}
     */
    const init = getArrayFromLocalStorage('posts') || []

    const { subscribe, update } = writable(init)

    return {
        subscribe,
        create: (post) => {
            update(posts => {
                post.id = posts.length
                post.created = (new Date()).toString()
                saveArrayToLocalStorage('posts', [...posts, post])

                return [...posts, post]
            })
        },
        edit: (id, post) => {
            update(posts => {
                post.lastModified = (new Date()).toString()
                posts[id] = post
                saveArrayToLocalStorage('posts', posts)

                return posts
            })
        },
    }
}

export const posts = createPosts()
