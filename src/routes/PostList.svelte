<script>
    import Post from "$lib/components/Post.svelte";
    import { posts } from '$lib/postsStore.js'
</script>

{#if $posts.length > 0}
    <div>
        {#each $posts as post}
            <a href="/post/{post.id}">
                <Post {post} preview />
            </a>
        {/each}
    </div>
{/if}

<style>
    div {
        display: flex;
        flex-wrap: wrap;
        flex-basis: 300px;
        gap: 10px;
    }

    a {
        text-decoration: none;
        color: black;
    }
</style>
