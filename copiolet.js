// Express server on port 3000





// Return the current time
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
    return `${hours}:${minutes}:${seconds}`;
}
getCurrentTime()

// Return a vuejs component