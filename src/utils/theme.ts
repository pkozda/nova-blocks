export const setTheme = (theme: 'light' | 'dark') => {
    document.documentElement.setAttribute('data-theme', theme)
}

export const getTheme = (): 'light' | 'dark' => {
    return (document.documentElement.getAttribute('data-theme') as any) || 'dark'
}

export const toggleTheme = () => {
    const current = getTheme()
    setTheme(current === 'dark' ? 'light' : 'dark')
}
