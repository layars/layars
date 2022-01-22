<script lang='ts'>
    import classnames from 'classnames'
    import { createEventDispatcher } from 'svelte'

    export let size: 'sm' | 'md' | 'lg' = 'md'
    export let variant: 'basic' | 'primary' | 'secondary' | 'danger' = 'primary'
    export let disabled: boolean = false
    export let depressed: boolean = false

    const dispatch = createEventDispatcher()

    const onClick = (event) => {
        dispatch('click', {
            event: event,
            type: 'click'
        })
    }

    const onFocus = (event) => {
        dispatch('focus', {
            event: event,
            type: 'focus'
        })
    }
</script>

<button
    class={classnames(
        `btn`,
        `variant--${variant}`,
        `size--${size}`,
        depressed ? 'depressed' : ''
    )}
    on:click={onClick}
    on:focus={onFocus}
    disabled={disabled}
    aria-disabled={disabled}
>
    <slot />
</button>

<style>
    button {
        box-sizing: border-box;
        outline: none;
        border: none;
        font-size: var(--lrs-size-14);
        font-weight: var(--lrs-font-weight-500);
        font-family: 'Inter', sans-serif;
        height: var(--lrs-size-48);
        padding: 0 var(--lrs-size-24);
        border-radius: var(--lrs-radius-4);
        color: var(--lrs-white);
        background-color: var(--lrs-action-primary-base);
        cursor: pointer;
        font-family: 'Inter', sans-serif;
        letter-spacing: var(--lrs-letterspacing-3);
    }

    button:hover {
        background-color: var(--lrs-action-primary-hover);
    }

    button:focus {
        box-shadow: 0 0 0 1px var(--lrs-white), 0 0 0 4px var(--lrs-blue-4);
    }

    button:active {
        background-color: var(--lrs-action-primary-pressed);
    }

    button:disabled {
        background-color: var(--lrs-disabled-base);
        color: var(--lrs-disabled-subtle);
        pointer-events: none;
    }

    button.depressed {
        background-color: var(--lrs-action-primary-depressed);
    }

    .size--sm {
        font-size: var(--lrs-size-12);
        height: var(--lrs-size-40);
        padding: 0 var(--lrs-size-16);
    }

    .size--lg {
        height: var(--lrs-size-56);
        padding: 0 var(--lrs-size-32);
    }

    .variant--basic {
        background-color: var(--lrs-action-basic-base);
        border: 1px solid var(--lrs-border-base);
        color: var(--lrs-text-emphasis);
    }

    .variant--basic:hover {
        border-color: var(--lrs-border-hover);
        background-color: var(--lrs-action-basic-hover);
    }

    .variant--basic:active {
        border-color: var(--lrs-border-pressed);
        background-color: var(--lrs-action-basic-pressed);
    }

    .variant--basic:disabled {
        border-color: var(--lrs-disabled-base);
        background-color: var(--lrs-action-basic-base);
        color: var(--lrs-disabled-base);
    }

    .variant--secondary {
        background: transparent;
        border: none;
        color: var(--lrs-text-primary);
    }

    .variant--secondary:hover {
        background-color: var(--lrs-action-secondary-hover);
    }

    .variant--secondary:active {
        background-color: var(--lrs-action-secondary-pressed);
    }

    .variant--secondary:disabled {
        background-color: transparent;
        color: var(--lrs-disabled-base);
    }

    .variant--danger {
        background-color: var(--lrs-action-danger-base);
    }

    .variant--danger:hover {
        background-color: var(--lrs-action-danger-hover);
    }

    .variant--danger:active {
        background-color: var(--lrs-action-danger-pressed);
    }
</style>