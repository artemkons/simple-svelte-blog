<script>
    export let post = null
    export let onSubmit = () => {}

</script>

{#if post}
    <h1>Редактировать пост</h1>
{:else}
    <h1>Добавить пост</h1>
{/if}

<form
    on:submit|preventDefault={
        (e) => {
            const fd = new FormData(e.target)
            const input = Object.fromEntries(fd.entries())
            const newPost = {...post, ...input}

            onSubmit(newPost)

            history.back()
        }
    }
>
    <label>
        Заголовок
        <input name="title" value={post?.title || ''}>
    </label>
    <label>
        Текст
        <input name="text" value={post?.text || ''}>
    </label>
    <button>Сохранить</button>
</form>
<button on:click={() => history.back()}>Назад</button>
