<script>
    import Post from "$lib/components/Post.svelte";
    import { posts } from '$lib/postsStore.js'
</script>

{#if $posts.length > 0}
    {#each $posts as post}
        <a href="/post/{post.id}">
            <Post {post} preview />
        </a>
    {/each}
{/if}

<style>
    a {
        text-decoration: none;
        color: black;
    }
</style>
