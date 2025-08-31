
export function formatCurrency(amount: number) {
    return new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(amount)
}

export function formatDate(dateStr: string): string {
    const dateObj = new Date(dateStr)
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    /*
    La forma estándar de representar un idioma con una etiqueta de idioma como "es-ES" sigue la norma BCP 47, que combina:
    el código de idioma (en minúsculas), según ISO 639-1, y el código de región (en mayúsculas), según ISO 3166-1.
    */
    return new Intl.DateTimeFormat("en-US", options).format(dateObj) // Spanish: "es-Es" or "es-MX"
}
