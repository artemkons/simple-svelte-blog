<script>
    export let post = null
    export let preview = false
</script>

{#if post}
    <div>
        <h3>{post.title}</h3>
        {#if !preview}
            <p>{post.text}</p>
        {/if}
        <small>Создано: {post.created} </small>
        {#if post.lastModified}
            <small>Отредачено: {post.lastModified} </small>
        {/if}
        <a href="/post-editor/{post.id}">Редактировать</a>
    </div>
{/if}

<style>
    div {
        border: 1px solid black;
        padding: 10px;
    }
</style>
