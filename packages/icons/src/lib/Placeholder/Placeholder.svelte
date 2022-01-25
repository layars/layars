<script lang='ts'>
    import classnames from 'classnames'

    export let color: string = 'text-emphasis'
    export let viewbox: string = '0 0 24 24'
    export let size: string = '1rem'
    export let height: string = size
    export let width: string = size

    const { class: classes, ...rest } = $$props
</script>

<svg 
    viewBox={viewbox}
    aria-hidden={true}
    height={height}
    width={width}
    class={classnames(
        'icon',
        'icon-placeholder',
        classes
    )}
    {...rest}
 >
	<path
        fill={`var(--lrs-${color})`} 
        d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z' 
    />
</svg>

<style>
    svg {
        width: var(--size);
        height: var(--size);
    }
</style>