export const getEnvValue = (key) => {
    return import.meta.env[key]
}

export const isProdMode = () => {
    return import.meta.env.VITE_APP_ENV === 'prod'
}

export const getBaseUrl = () => {
    return import.meta.env.VITE_APP_BASE_URL
}
