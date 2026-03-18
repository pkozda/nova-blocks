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

export const SizesAndLoading = () => ({
    components: { Button },
    template: `
        <div style="display:flex; gap:12px; flex-wrap:wrap;">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
            <Button loading>Loading</Button>
            <Button variant="secondary" size="large" loading>Secondary Loading</Button>
        </div>
    `
})
