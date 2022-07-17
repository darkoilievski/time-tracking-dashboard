const btnDaily = document.querySelector(".btn-daily");
const btnWeekly = document.querySelector(".btn-weekly");
const btnMonthly = document.querySelector(".btn-monthly");
const workCur = document.querySelector(".hidden-hrs-current-work");
const playCur = document.querySelector(".hidden-hrs-current-play");
const studyCur = document.querySelector(".hidden-hrs-current-study");
const exerciseCur = document.querySelector(".hidden-hrs-current-exercise");
const socialCur = document.querySelector(".hidden-hrs-current-social");
const selfCareCur = document.querySelector(".hidden-hrs-current-selfcare");
const workPrev = document.querySelector(".hidden-hrs-previous-work");
const playPrev = document.querySelector(".hidden-hrs-previous-play");
const studyPrev = document.querySelector(".hidden-hrs-previous-study");
const exercisePrev = document.querySelector(".hidden-hrs-previous-exercise");
const socialPrev = document.querySelector(".hidden-hrs-previous-social");
const selfcarePrev = document.querySelector(".hidden-hrs-previous-selfcare");

// Daily
btnDaily.addEventListener("click", async (e) => {
  e.preventDefault();
  const response = await fetch("/data.json");
  const users = await response.json();

  users.forEach((category) => {
    const title = category.title;
    const timeframes = category.timeframes;
    const dailyCurrent = timeframes.daily.current;
    const dailyPrevious = timeframes.daily.previous;

    if (title === "Work") {
      workCur.innerHTML = `${dailyCurrent} hrs`;
      workPrev.innerHTML = `Last Week ${dailyPrevious} hrs`;
    }
    if (title === "Play") {
      playCur.innerHTML = `${dailyCurrent} hrs`;
      playPrev.innerHTML = `Last Week ${dailyPrevious} hrs`;
    }
    if (title === "Study") {
      studyCur.innerHTML = `${dailyCurrent} hrs`;
      studyPrev.innerHTML = `Last Week ${dailyPrevious} hrs`;
    }
    if (title === "Exercise") {
      exerciseCur.innerHTML = `${dailyCurrent} hrs`;
      exercisePrev.innerHTML = `Last Week ${dailyPrevious} hrs`;
    }
    if (title === "Social") {
      socialCur.innerHTML = `${dailyCurrent} hrs`;
      socialPrev.innerHTML = `Last Week ${dailyPrevious} hrs`;
    }
    if (title === "Self Care") {
      selfCareCur.innerHTML = `${dailyCurrent} hrs`;
      selfcarePrev.innerHTML = `Last Week ${dailyPrevious} hrs`;
    }
  });
});

// Weekly
btnWeekly.addEventListener("click", async (e) => {
  e.preventDefault();
  const response = await fetch("/data.json");
  const users = await response.json();

  users.forEach((category) => {
    const title = category.title;
    const timeframes = category.timeframes;
    const weeklyCurrent = timeframes.weekly.current;
    const weeklyPrevious = timeframes.weekly.previous;

    if (title === "Work") {
      workCur.innerHTML = `${weeklyCurrent} hrs`;
      workPrev.innerHTML = `Last Week ${weeklyPrevious} hrs`;
    }
    if (title === "Play") {
      playCur.innerHTML = `${weeklyCurrent} hrs`;
      playPrev.innerHTML = `Last Week ${weeklyPrevious} hrs`;
    }
    if (title === "Study") {
      studyCur.innerHTML = `${weeklyCurrent} hrs`;
      studyPrev.innerHTML = `Last Week ${weeklyPrevious} hrs`;
    }
    if (title === "Exercise") {
      exerciseCur.innerHTML = `${weeklyCurrent} hrs`;
      exercisePrev.innerHTML = `Last Week ${weeklyPrevious} hrs`;
    }
    if (title === "Social") {
      socialCur.innerHTML = `${weeklyCurrent} hrs`;
      socialPrev.innerHTML = `Last Week ${weeklyPrevious} hrs`;
    }
    if (title === "Self Care") {
      selfCareCur.innerHTML = `${weeklyCurrent} hrs`;
      selfcarePrev.innerHTML = `Last Week ${weeklyPrevious} hrs`;
    }
  });
});
btnMonthly.addEventListener("click", async (e) => {
  e.preventDefault();
  const response = await fetch("/data.json");
  const users = await response.json();

  users.forEach((category) => {
    const title = category.title;
    const timeframes = category.timeframes;
    const monthlyCurrent = timeframes.monthly.current;
    const monthlyPrevious = timeframes.monthly.previous;

    if (title === "Work") {
      workCur.innerHTML = `${monthlyCurrent} hrs`;
      workPrev.innerHTML = `Last Week ${monthlyPrevious} hrs`;
    }
    if (title === "Play") {
      playCur.innerHTML = `${monthlyCurrent} hrs`;
      playPrev.innerHTML = `Last Week ${monthlyPrevious} hrs`;
    }
    if (title === "Study") {
      studyCur.innerHTML = `${monthlyCurrent} hrs`;
      studyPrev.innerHTML = `Last Week ${monthlyPrevious} hrs`;
    }
    if (title === "Exercise") {
      exerciseCur.innerHTML = `${monthlyCurrent} hrs`;
      exercisePrev.innerHTML = `Last Week ${monthlyPrevious} hrs`;
    }
    if (title === "Social") {
      socialCur.innerHTML = `${monthlyCurrent} hrs`;
      socialPrev.innerHTML = `Last Week ${monthlyPrevious} hrs`;
    }
    if (title === "Self Care") {
      selfCareCur.innerHTML = `${monthlyCurrent} hrs`;
      selfcarePrev.innerHTML = `Last Week ${monthlyPrevious} hrs`;
    }
  });
});
