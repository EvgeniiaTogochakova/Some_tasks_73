const key = "schedule";
const scheduleEl = document.querySelector(
  "section.training_schedule div.schedule"
);
const sportNameEl = scheduleEl.querySelector("p.sport");
const sportTimeEl = scheduleEl.querySelector("p.time");
const maxParticipantsEl = scheduleEl.querySelector("p.max_participants");
const currentParticipantsEl = scheduleEl.querySelector(
  "p.current_participants"
);
const pEmptyEnrollEl = scheduleEl.querySelector("p.empty_enroll");
const pEmptyDisenrollEl = scheduleEl.querySelector("p.empty_disenroll");

let schedule = completeTableFromLocalStorage();
const buttonEnrollEls = scheduleEl.querySelectorAll("button.enroll");
const buttonDisenrollEls = scheduleEl.querySelectorAll("button.disenroll");
const currentParticipantsEls = scheduleEl.querySelectorAll(
  "p.current_participants"
);


for (let i = 0; i < buttonEnrollEls.length; i++) {
  buttonEnrollEls[i].addEventListener("click", function (e) {
    schedule = refreshData();
    if (schedule[i].currentParticipants === schedule[i].maxParticipants) {
      currentParticipantsEls[i + 1].textContent =
        schedule[i].currentParticipants;
      return;
    }

    if (e.target.classList.contains("inactive")) {
      return;
    }

    e.target.classList.add("clicked");
    e.target.textContent = "Вы записаны";
    e.target.classList.add("inactive");

    buttonDisenrollEls[i].classList.add("active");
    buttonDisenrollEls[i].textContent = "Отменить запись";
    schedule[i].currentParticipants += 1;
    currentParticipantsEls[i + 1].textContent = schedule[i].currentParticipants;
    saveDataToLocalStorage();
  });
}

for (let i = 0; i < buttonDisenrollEls.length; i++) {
  buttonDisenrollEls[i].addEventListener("click", function (e) {
    schedule = refreshData();
    if (e.target.classList.contains("active")) {
      e.target.textContent = "Вы отменили запись";
      e.target.classList.remove("active");

      buttonEnrollEls[i].classList.remove("inactive");
      buttonEnrollEls[i].textContent = "Записаться";
      schedule[i].currentParticipants -= 1;
      currentParticipantsEls[i + 1].textContent =
        schedule[i].currentParticipants;
      saveDataToLocalStorage();
    }
  });
}
