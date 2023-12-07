const form = document.querySelector('form');
const submitButton = document.getElementById('submit-button');
const dataTable = document.getElementById('data-table');

submitButton.addEventListener('click', handleSubmit);

function handleSubmit(event) {  
  event.preventDefault();

  const data = {
    name: form.name.value,
    age: form.age.value,
    standard: form.standard.value,
    division: form.division.value,
    subjects: Array.from(form['subjects[]'].selectedOptions).map(option => option.value)
  };

  console.log(data);

  const row = dataTable.insertRow(-1);
  const nameCell = row.insertCell(0);
  const ageCell = row.insertCell(1);
  const standardCell = row.insertCell(2);
  const divisionCell = row.insertCell(3);
  const subjectsCell = row.insertCell(4);

  nameCell.innerHTML = data.name;
  ageCell.innerHTML = data.age;
  standardCell.innerHTML = data.standard;
  divisionCell.innerHTML = data.division;
  subjectsCell.innerHTML = data.subjects.join(', ');
}
