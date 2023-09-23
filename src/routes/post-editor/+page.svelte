<script>
    import PostEditor from "./PostEditor.svelte"
    import { posts } from "$lib/postsStore.js"
</script>

<PostEditor onSubmit={posts.create} />
