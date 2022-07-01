function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  function createDaysOfTheMonth() {
    const monthDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDaysList = document.querySelector('#days');

    for (let index = 0; index < monthDays.length; index += 1) {
        let day = monthDays[index];
        let dayList = document.createElement('li');
        dayList.innerHTML = day;

        if( day === 24 || day === 31) {
            dayList.className = 'day holiday';
            monthDaysList.appendChild(dayList);

        } else if( day === 25) {
            dayList.className = 'day holiday friday';
            monthDaysList.appendChild(dayList);

        } else if( day === 4 || day === 11 || day === 18) {
            dayList.className = 'day friday';
            monthDaysList.appendChild(dayList);

        } else {
            dayList.className = 'day';
            monthDaysList.appendChild(dayList);     
    }
    }
}

createDaysOfTheMonth();

function createHolidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    
    buttonContainer.appendChild(newButton);
  }
  
  createHolidayButton('Feriados');

  function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    });
  }

displayHolidays();

