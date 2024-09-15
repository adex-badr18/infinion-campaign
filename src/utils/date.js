// Function to format date to DD-MM-YYYY
export const formatDateToDDMMYYYY = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
};

// Function to format date from DD-MM-YYYY to YYYY-MM-DD
export const formatDateToYYYYMMDD = (date) => {
    const [day, month, year] = date.split("-");
    return `${year}-${month}-${day}`;
};

// Function to convert date string to ISO
export const dateToISO = (dateString) => {
    const date = new Date(dateString); // Parse the date string
    return date.toISOString(); // Convert to ISO 8601 format
};

// Function to convert ISO to date string
export const ISOTodate = (isoDateString) => {
    const date = new Date(isoDateString); // Parse ISO 8601 string
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    

    return `${day}/${month}/${year}`; // Format as readable string
};
