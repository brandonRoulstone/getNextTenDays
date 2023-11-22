let result = document.getElementById("root");

function getNextConsecutiveTenDays() {
    const today = new Date(); 
    const tenDaysInMilliseconds = 10 * 24 * 60 * 60 * 1000;
    let datesHTML = ''; // To store the HTML for all dates

    for (let i = 1; i <= 5; i++) {
        const nextTenDays = new Date(today.getTime() + i * tenDaysInMilliseconds);
        datesHTML += `Ten days from now (${i * 10} days): ${nextTenDays.toDateString()}<br>`;
    }

    // Set the innerHTML once after the loop completes
    result.innerHTML = datesHTML;
}

getNextConsecutiveTenDays();