<script lang='ts'>
    import classnames from 'classnames'
    import { createEventDispatcher } from 'svelte'

    export let size: 'sm' | 'md' | 'lg' = 'md'
    export let variant: 'primary' | 'secondary' | 'ghost' | 'danger' = 'primary'

    const dispatch = createEventDispatcher()

    const onClick = (event) => {
        dispatch('click', {
            text: 'button clicked'
        })
    }
</script>

<button
    class={classnames(
        `btn`,
        `variant--${variant}`,
        `size--${size}`,
    )}
    on:click={onClick}
>
    <slot />
</button>

<style>
    button {
        box-sizing: border-box;
        outline: none;
        border: none;
        font-size: var(--lrs-sizes-size-14);
        text-transform: uppercase;
        font-weight: var(--lrs-font-weight-bold);
        font-family: 'Inter', sans-serif;
        height: var(--lrs-sizes-size-48);
        padding: 0 var(--lrs-sizes-size-24);
        border-radius: var(--lrs-border-radius-md);
        color: var(--lrs-color-constant-white);
        background-color: var(--lrs-color-purple-400);
        letter-spacing: 1.5%;
        cursor: pointer;
    }

    button:hover {
        background-color: var(--lrs-color-purple-300);
    }

    button:focus {
        box-shadow: 0 0 0 1px var(--lrs-color-constant-white), 0 0 0 4px var(--lrs-color-blue-300);
    }

    button:active {
        background-color: var(--lrs-color-purple-500);
    }

    .size--sm {
        font-size: var(--lrs-sizes-size-12);
        height: var(--lrs-sizes-size-40);
        padding: 0 var(--lrs-sizes-size-16);
    }

    .size--lg {
        height: var(--lrs-sizes-size-56);
        padding: 0 var(--lrs-sizes-size-32);
    }

    .variant--secondary {
        background: var(--lrs-color-grey-400);
        color: var(--lrs-color-constant-white);
    }

    .variant--secondary:hover {
        background: var(--lrs-color-grey-200);
    }
</style>