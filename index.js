const date = new Date();

const currentDate = new Date();

date.setDate(31);

function renderCalendar() {
  date.setDate(1);
  const months = [
    "Januray",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[date.getMonth()];
  const year = date.getFullYear();

  document.querySelector(".month h1").innerHTML = month + " " + year;

  document.querySelector(".month p").innerHTML = new Date().toDateString();

  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  let prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  const firstDayIndex = date.getDay() - 1;

  const lastDayIndex =
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay() - 2;

  const nextDays = 7 - lastDayIndex - 1;
  const daysContainer = document.querySelector(".container .days");

  const currentDay = date.getDate();

  let days = "";

  for (let i = firstDayIndex; i > 0; i--) {
    if (
      prevLastDay - i + 1 !== currentDate.getDate() ||
      date.getMonth() - 1 !== currentDate.getMonth() ||
      date.getFullYear() !== currentDate.getFullYear()
    ) {
      days += `<div class="day prev-day">${prevLastDay - i + 1}</div>`;
    } else {
      days += `<div class="day prev-day today">${prevLastDay - i + 1}</div>`;
    }
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i !== currentDate.getDate() ||
      date.getMonth() !== currentDate.getMonth() ||
      date.getFullYear() !== currentDate.getFullYear()
    ) {
      days += `<div class="day curr-day">${i}</div>`;
    } else {
      days += `<div class="day curr-day today">${i}</div>`;
    }
  }
  for (let i = 1; i < nextDays; i++) {
    if (nextDays != 8) {
      if (
        i !== currentDate.getDate() ||
        date.getMonth() + 1 !== currentDate.getMonth() ||
        date.getFullYear() !== currentDate.getFullYear()
      ) {
        days += `<div class="day next-day">${i}</div>`;
      } else {
        days += `<div class="day next-day today">${i}</div>`;
      }
    }
    daysContainer.innerHTML = days;
  }
  const daysElements = document.querySelectorAll(".container .days .day");
  daysElements.forEach((day) => {
    day.addEventListener("click", (e) => {
      currentDate.setFullYear(date.getFullYear());
      currentDate.setMonth(date.getMonth());
      currentDate.setDate(e.target.innerText);
      renderCalendar();
    });
  });
}

const prevArrow = document.querySelector(".container .month .prev");
const nextArrow = document.querySelector(".container .month .next");

prevArrow.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

nextArrow.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
