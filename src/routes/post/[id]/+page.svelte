<script>
    import Post from "$lib/components/Post.svelte";

    import { posts } from "$lib/postsStore.js"

    import { page } from '$app/stores'
    const id = $page.params.id
    const post = $posts[id]
</script>

<Post {post} />
