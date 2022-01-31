<script lang='ts'>
    import classnames from 'classnames'
    import { createEventDispatcher } from 'svelte'

    export let size: 'sm' | 'md' | 'lg' = 'md'
    export let variant: 'basic' | 'primary' | 'secondary' | 'danger' = 'primary'
    export let disabled: boolean = false
    export let depressed: boolean = false

    const dispatch = createEventDispatcher()

    const onClick = (event: Event) => {
        dispatch('click', {
            event: event,
            type: 'click'
        })
    }

    const onFocus = (event: Event) => {
        dispatch('focus', {
            event: event,
            type: 'focus'
        })
    }
</script>

<button
    class={classnames(
        `lrs-button`,
        `variant--${variant}`,
        `size--${size}`,
        depressed ? 'depressed' : '',
        $$props.class
    )}
    on:click={onClick}
    on:focus={onFocus}
    disabled={disabled}
>
    <slot name='icon-before' />
    <slot />
    <slot name='icon-after' />
</button>

<style>
    button {
        box-sizing: border-box;
        outline: none;
        border: none;
        font-size: var(--lrs-size-16);
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
        display: flex;
        flex-direction: row;
        align-items: center;
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

    button :global([slot="icon-before"]),
    button :global([slot="icon-after"]) {
        height: var(--lrs-size-16);
        width: var(--lrs-size-16);
    }

    button :global(svg path) {
        fill: var(--lrs-white);
    }

    .size--sm {
        font-size: var(--lrs-size-14);
        height: var(--lrs-size-40);
        padding: 0 var(--lrs-size-16);
    }

    .size--sm :global([slot="icon-before"]),
    .size--sm :global([slot="icon-after"]) {
        height: var(--lrs-size-14);
        width: var(--lrs-size-14);
    }

    .size--lg {
        height: var(--lrs-size-56);
        padding: 0 var(--lrs-size-32);
    }

    .variant--basic {
        background-color: var(--lrs-action-basic-base);
        color: var(--lrs-text-emphasis);
    }

    .variant--basic:hover {
        background-color: var(--lrs-action-basic-hover);
    }

    .variant--basic:active {
        background-color: var(--lrs-action-basic-pressed);
    }

    .variant--basic:disabled {
        background-color: var(--lrs-action-basic-base);
        color: var(--lrs-disabled-base);
    }

    .variant--basic.depressed {
        background-color: var(--lrs-action-basic-depressed);
        color: var(--lrs-white);
    }

    .variant--basic :global(svg path) {
        fill: var(--lrs-text-emphasis);
    }

    .variant--secondary {
        background: transparent;
        border: none;
        color: var(--lrs-text-primary);
        border: 1px solid var(--lrs-border-primary-base);
    }

    .variant--secondary:hover {
        background-color: var(--lrs-action-secondary-hover);
        border-color: var(--lrs-border-primary-hover);
    }

    .variant--secondary:active {
        background-color: var(--lrs-action-secondary-pressed);
        border-color: var(--lrs-border-primary-pressed);
    }

    .variant--secondary:disabled {
        background-color: transparent;
        color: var(--lrs-disabled-base);
    }

    .variant--secondary.depressed {
        color: var(--lrs-white);
    }

    .variant--secondary :global(svg path) {
        fill: var(--lrs-text-primary);
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

    .variant--danger.depressed {
        background-color: var(--lrs-action-danger-depressed);
    }

    :global([slot="icon-before"]) {
        margin-right: var(--lrs-size-8);
    }

    :global([slot="icon-after"]) {
        margin-left: var(--lrs-size-8);
    }
</style>