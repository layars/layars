<script lang='ts'>
    import { Button } from '../Button'
    import clsx from 'clsx'
    import { createEventDispatcher } from 'svelte'

    export let size: 'sm' | 'md' | 'lg' = 'md'
    export let variant: 'basic' | 'primary' | 'secondary' | 'danger' = 'primary'
    export let shape: 'default' | 'circle' = 'default'
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

<Button
    size={size}
    variant={variant}
    disabled={disabled}
    depressed={depressed}
    class={clsx(
        'lrs-icon-button',
        `shape--${shape}`,
        $$props.class
    )}
    on:click={onClick}
    on:focus={onFocus}
>
    <slot />
</Button>

<style>
    :global(button.lrs-icon-button) {
        padding: 0;
        justify-content: center;
    }

    :global(button.lrs-icon-button.size--md) {
        width: var(--lrs-size-48);
        height: var(--lrs-size-48);
        padding: 0;
    }

    :global(button.lrs-icon-button.size--sm) {
        width: var(--lrs-size-40);
        height: var(--lrs-size-40);
        padding: 0;
    }

    :global(button.lrs-icon-button.size--lg) {
        width: var(--lrs-size-56);
        height: var(--lrs-size-56);
        padding: 0;
    }
    :global(button.lrs-icon-button.shape--circle) {
        border-radius: var(--lrs-radius-round);
    }
</style>