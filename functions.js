function completeTableFromLocalStorage() {
  if (!localStorage.getItem(key)) localStorage.setItem(key, initialData);
  const schedule = JSON.parse(localStorage.getItem(key));
  sportNameEl.insertAdjacentHTML("afterend", stringNameGenerate(schedule));
  sportTimeEl.insertAdjacentHTML("afterend", stringTimeGenerate(schedule));
  maxParticipantsEl.insertAdjacentHTML(
    "afterend",
    stringMaxParticipantsGenerate(schedule)
  );
  currentParticipantsEl.insertAdjacentHTML(
    "afterend",
    stringCurrentParticipantsGenerate(schedule)
  );
  pEmptyEnrollEl.insertAdjacentHTML(
    "afterend",
    stringButtonEnrollGenerate(schedule)
  );
  pEmptyDisenrollEl.insertAdjacentHTML(
    "afterend",
    stringButtonDisenrollGenerate(schedule)
  );
  return schedule;
}

function saveDataToLocalStorage() {
  localStorage.setItem(key, JSON.stringify(schedule));
}

function refreshData() {
  return JSON.parse(localStorage.getItem(key));

}

function stringNameGenerate(array) {
  let newString = "";
  for (let i = 0; i < array.length; i++) {
    newString += `<p class="sport">${array[i].name}</p>`;
  }
  return newString;
}

function stringTimeGenerate(array) {
  let newString = "";
  for (let i = 0; i < array.length; i++) {
    newString += `<p class="time">${array[i].time}</p>`;
  }
  return newString;
}

function stringMaxParticipantsGenerate(array) {
  let newString = "";
  for (let i = 0; i < array.length; i++) {
    newString += `<p class="max_participants">${array[i].maxParticipants}</p>`;
  }
  return newString;
}

function stringCurrentParticipantsGenerate(array) {
  let newString = "";
  for (let i = 0; i < array.length; i++) {
    newString += `<p class="current_participants">${array[i].currentParticipants}</p>`;
  }
  return newString;
}

function stringButtonEnrollGenerate(array) {
  let newString = "";
  for (let i = 0; i < array.length; i++) {
    newString += `<button class="enroll">Записаться</button>`;
  }
  return newString;
}

function stringButtonDisenrollGenerate(array) {
  let newString = "";
  for (let i = 0; i < array.length; i++) {
    newString += `<button class="disenroll">Отменить запись</button>`;
  }
  return newString;
}
