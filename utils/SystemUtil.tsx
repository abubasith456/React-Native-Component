
export const getFormattedTimestamp = (date = new Date(), locale = 'en-US') => {
    // Get the year, month, and day in a standardized format (YYYY-MM-DD)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so we add 1
    const day = String(date.getDate()).padStart(2, '0');

    // Format the date as YYYY-MM-DD
    const formattedDate = `${year}-${month}-${day}`;

    // Format the time part (hh:mm:ss AM/PM)
    const formattedTime = new Intl.DateTimeFormat(locale, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true, // 12-hour time format with AM/PM
    }).format(date);

    // Combine date and time in the desired format (YYYY-MM-DD, hh:mm:ss AM/PM)
    return `${formattedDate}, ${formattedTime}`;
};

export const getFormatedDate = (date: any) => {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

