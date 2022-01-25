<script lang='ts'>
    import { Button } from '../Button'
    import classnames from 'classnames'
    import { createEventDispatcher } from 'svelte'

    export let size: 'sm' | 'md' | 'lg' = 'md'
    export let variant: 'basic' | 'primary' | 'secondary' | 'danger' = 'primary'
    export let disabled: boolean = false
    export let depressed: boolean = false

    const dispatch = createEventDispatcher()

    const onClick = event => {
        dispatch('click', {
            event: event,
            type: 'click'
        })
    }

    const onFocus = event => {
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
    class={classnames(
        'lrs-icon-button',
        $$props.class
    )}
    on:click={onClick}
    on:focus={onFocus}
>
    <slot />
</Button>

<style>
    :global(button.icon-button) {
        border-radius: var(--lrs-radius-round);
        padding: 0;
        justify-content: center;
    }

    :global(button.icon-button.size--md) {
        width: var(--lrs-size-48);
        height: var(--lrs-size-48);
        padding: 0;
        border-radius: var(--lrs-radius-round);
    }

    :global(button.icon-button.size--sm) {
        width: var(--lrs-size-40);
        height: var(--lrs-size-40);
        padding: 0;
        border-radius: var(--lrs-radius-round);
    }

    :global(button.icon-button.size--lg) {
        width: var(--lrs-size-56);
        height: var(--lrs-size-56);
        padding: 0;
        border-radius: var(--lrs-radius-round);
    }
</style>