<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import { default as Placeholder } from './Placeholder.svelte'
</script>

<Meta 
    title='@layars/icons'
    component={Placeholder}
    argTypes={{
        color: {
            defaultValue: 'text-emphasis',
            description: 'The color of the icon.'
        },
        size: {
            defaultValue: '3rem',
            description: 'The size of the icon.'
        },
    }}
/>

<Template let:args>
    <Placeholder {...args} />
</Template>

<Story 
    name='placeholder'
/>