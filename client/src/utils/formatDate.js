// Formats date
export default function formatDate(date_created) {
    return new Date(date_created * 1000).toLocaleString('sv-SE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    })
}
