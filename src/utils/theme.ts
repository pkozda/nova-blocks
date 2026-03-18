export const setTheme = (theme: 'light' | 'dark') => {
    document.documentElement.setAttribute('data-theme', theme)
}

export const getTheme = (): 'light' | 'dark' => {
    const theme = document.documentElement.getAttribute('data-theme')
    return theme === 'light' || theme === 'dark' ? theme : 'dark'
}

export const toggleTheme = () => {
    const current = getTheme()
    setTheme(current === 'dark' ? 'light' : 'dark')
}
