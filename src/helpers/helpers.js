export const url = 'https://indoor-localization.net/api/'
// export const url = 'http://localhost:3000/api/'
export const GST = ['0%', '8%', '12%', '18%'];

export function formatDate(date_sting) {
    const date_array = date_sting.split('-');
    return `${date_array[2]}-${date_array[1]}-${date_array[0]}`
}
export function formatDateTime(date_sting) {
    const date_array = date_sting.split(' ');
    const date_array_1 = date_array[0].split('-');
    return `${date_array_1[2]}-${date_array_1[1]}-${date_array_1[0]}`
}