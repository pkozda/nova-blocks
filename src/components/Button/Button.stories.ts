import Button from './Button.vue'

export default {
    title: 'Components/Button',
    component: Button
}

export const Variants = () => ({
    components: { Button },
    template: `
        <div style="display:flex; gap:12px;">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
        </div>
    `
})

export const Disabled = () => ({
    components: { Button },
    template: `
        <Button variant="primary" disabled>Disabled</Button>
    `
})
