export function formatISODate(dateString) {
    if (dateString == null || dateString == undefined || dateString == '') {
        return null;
    }
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

export function formatISODateTime(dateString) {
    if (dateString == null || dateString == undefined || dateString == '') {
        return null;
    }

    const date = new Date(dateString);
  
    const dateOptions = { year: 'numeric', month: 'long', day: '2-digit' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
  
    const formattedDate = date.toLocaleDateString('en-US', dateOptions);
    const formattedTime = date.toLocaleTimeString('en-US', timeOptions).toLowerCase();
  
    return `${formattedDate} ${formattedTime}`;
}

