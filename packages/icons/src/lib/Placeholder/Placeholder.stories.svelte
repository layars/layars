<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import Placeholder from './Placeholder.svelte'
</script>

<Meta 
    title='@layars/icons/placeholder'
    component={Placeholder}
/>

<Template let:args>
    <Placeholder {...args}>Placeholder</Placeholder>
</Template>

<Story 
    name='default'
/>