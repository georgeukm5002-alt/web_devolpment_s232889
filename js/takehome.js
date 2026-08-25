// getting the form to js
const form = document.getElementById('job_form');
// submit the data from form
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // declare the rest of elements
    const job_title = document.getElementById('jobtitle').value;
    const gross_income = document.getElementById('grossincome').value;
    const work_duration = document.getElementById('workduration').value;
    const hours = document.getElementById('hours').value;
    const tax = document.getElementById('tax').value;
    const NI_rate = document.getElementById('NIrate').value;
    // check for errors
    let error = document.getElementById('error')
    if (isNaN(gross_income) || isNaN(hours) || isNaN(tax) || isNaN(NI_rate)) {
        // change display status to get the error message
        error.style.display = "block";
        form.reset();
    }
    else {
        // if there are not any continue
        error.style.display = "none";
        let per_year = 0;
        // calculate the yearly gross income depending on the value
        switch (work_duration) {
            case 'per Year':
                per_year = gross_income * (1 - tax / 100) * (1 - NI_rate / 100);
                break;
            case 'per Month':
                perYear = 12 * gross_income * (1 - tax / 100) * (1 - NI_rate / 100);
                break;
            case 'per Week':
                per_year = 52 * gross_income * (1 - tax / 100) * (1 - NI_rate / 100);
                break;
            case 'per Hour':
                per_year = gross_income * 52 * hours * (1 - tax / 100) * (1 - NI_rate / 100);
                break;
        }
        // calculate the rest 
        let per_month = per_year / 12;
        let per_week = per_year / 52;
        let per_hour = per_week / hours;
        // get the div from html to get the data bacl
        let information = document.getElementById('container');
        //use inner html function
        information.innerHTML +=
            `
                <p class="underscore"><a href="./vacancies.html?query=${job_title}" class="headline" style="text-decoration: none;">${job_title}</a></p>
                <div style="width :100%;">
                    <p>${hours} hours a week </p>
                    <p>gross pay : £${gross_income} ${work_duration}</p>
                    <p>Tax : ${tax}% and NI rate : ${NI_rate}% </p>
                    <p class="underscore">the results are: </p>
                </div>
                <p class="headline">per Hour</p>
                <p class="underscore"><b>£${per_hour.toFixed(2)}</b></p>
                <p class="headline">per Week </p>
                <p class="underscore"><b>£${per_week.toFixed(2)}</b> </p>
                <p class="headline"> per Month </p>
                <p class="underscore"><b>£${per_month.toFixed(2)}</b></p>
                <p class="headline">per Year </p>
                <p><b>£${per_year.toFixed(2)}</b></p>
            </div>`;
        form.reset();
    }
});
