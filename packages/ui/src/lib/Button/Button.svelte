<script lang='ts'>
    import clsx from 'clsx'
    import { createEventDispatcher } from 'svelte'

    export let size: 'xs' | 'sm' | 'md' | 'lg' = 'md'
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
    class={clsx(
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
    /* Base styles for all buttons */
    button {
        box-sizing: border-box;
        outline: none;
        border: none;
        font-size: var(--lrs-size-14);
        font-weight: var(--lrs-font-weight-500);
        border-radius: var(--lrs-radius-4);
        cursor: pointer;
        letter-spacing: var(--lrs-letterspacing-2);
        display: inline-flex;
        flex-direction: row;
        align-items: center;
    }

    button:focus {
        box-shadow: 0 0 0 var(--lrs-size-1) var(--lrs-white), 0 0 0 var(--lrs-size-4) var(--lrs-blue-4);
    }

    button :global([slot="icon-before"]),
    button :global([slot="icon-after"]) {
        height: var(--lrs-size-14);
        width: var(--lrs-size-14);
    }

    :global([slot="icon-before"]) {
        margin-right: var(--lrs-size-8);
    }

    :global([slot="icon-after"]) {
        margin-left: var(--lrs-size-8);
    }

    @media (min-width: 85.375rem) {
        button {
            font-size: var(--lrs-size-16);
        }
        
        button :global([slot="icon-before"]),
        button :global([slot="icon-after"]) {
            height: var(--lrs-size-16);
            width: var(--lrs-size-16);
        }
    }

    /* Button size styles */
    .size--xs {
        max-height: var(--lrs-size-32);
        min-height: var(--lrs-size-32);
        padding: 0 var(--lrs-size-8);
    }

    .size--sm {
        max-height: var(--lrs-size-40);
        min-height: var(--lrs-size-40);
        padding: 0 var(--lrs-size-16);
    }

    .size--md {
        max-height: var(--lrs-size-48);
        min-height: var(--lrs-size-48);
        padding: 0 var(--lrs-size-24);
    }

    .size--lg {
        max-height: var(--lrs-size-56);
        min-height: var(--lrs-size-56);
        padding: 0 var(--lrs-size-32);
    }

    /* Variant: Basic */
    .variant--basic {
        background-color: var(--lrs-action-basic-base);
        border: var(--lrs-size-1) solid var(--lrs-action-basic-base);
        color: var(--lrs-text-emphasis);
    }

    .variant--basic:hover {
        background-color: var(--lrs-action-basic-hover);
        border-color: var(--lrs-action-basic-hover);
    }

    .variant--basic:active {
        background-color: var(--lrs-action-basic-pressed);
        border-color: var(--lrs-action-basic-pressed);
    }

    .variant--basic:disabled {
        background-color: var(--lrs-action-basic-base);
        border-color: var(--lrs-action-basic-base);
        color: var(--lrs-disabled-default);
        pointer-events: none;
    }

    .variant--basic.depressed {
        background-color: var(--lrs-action-basic-depressed);
        border-color: var(--lrs-action-basic-depressed);
    }

    .variant--basic :global(svg path) {
        fill: var(--lrs-text-emphasis);
    }

    /* Variant: Primary */
    .variant--primary {
        border: var(--lrs-size-1) solid var(--lrs-action-primary-base);
        background-color: var(--lrs-action-primary-base);
        color: var(--lrs-white);
    }

    .variant--primary:hover {
        background-color: var(--lrs-action-primary-hover);
        border-color: var(--lrs-action-primary-hover);
    }

    .variant--primary:active {
        background-color: var(--lrs-action-primary-pressed);
        border-color: var(--lrs-action-primary-pressed);
    }

    .variant--primary:disabled {
        background-color: var(--lrs-disabled-base);
        border-color: var(--lrs-disabled-base);
        color: var(--lrs-disabled-subtle);
        pointer-events: none;
    }

    .variant--primary.depressed {
        background-color: var(--lrs-action-primary-depressed);
        border-color: var(--lrs-action-primary-depressed);
    }

    .variant--primary :global(svg path) {
        fill: var(--lrs-white);
    }

    /* Variant: Danger */
    .variant--danger {
        border: var(--lrs-size-1) solid var(--lrs-action-danger-base);
        background-color: var(--lrs-action-danger-base);
        color: var(--lrs-white);
    }

    .variant--danger:hover {
        background-color: var(--lrs-action-danger-hover);
        border-color: var(--lrs-action-danger-hover);
    }

    .variant--danger:active {
        background-color: var(--lrs-action-danger-pressed);
        border-color: var(--lrs-action-danger-pressed);
    }

    .variant--danger:disabled {
        background-color: var(--lrs-disabled-base);
        border-color: var(--lrs-disabled-base);
        color: var(--lrs-disabled-subtle);
        pointer-events: none;
    }

    .variant--danger.depressed {
        background-color: var(--lrs-action-danger-depressed);
        border-color: var(--lrs-action-danger-depressed);
    }

    .variant--danger :global(svg path) {
        fill: var(--lrs-white);
    }
</style>