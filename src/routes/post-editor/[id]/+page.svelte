<script>
    import PostEditor from "../PostEditor.svelte";
    import { posts } from "$lib/postsStore.js";

    import { page } from '$app/stores'
    const id = $page.params.id
    const post = $posts[id]
</script>

<PostEditor {post} onSubmit={(newPost) => posts.edit(id, newPost)} />
