export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5);
  let bowls = 0;
  const textRead = transformTextRead(minutes);
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill("🍱")
      .join("")} ${minutes} ${textRead}`;
  } else {
    return `${new Array(cups || 1)
      .fill("☕️")
      .join("")} ${minutes} ${textRead}`;
  }
}

// `lang` is optional and will default to the current user agent locale
export function formatPostDate(date, lang) {
  Date.prototype.toLocaleDateString = function () {
    const month = transformMonth(this.getMonth());
    return `${this.getDate()} ${month} ${this.getFullYear()}`;
  };
  if (typeof Date.prototype.toLocaleDateString !== "function") {
    return date;
  }

  date = new Date(date);
  return date.toLocaleDateString();
}

function transformMonth(value) {
  const month = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  return month[value];
}

function transformTextRead(value) {
  if (value === 1) {
    return "минута чтения";
  }
  if ([2, 3, 4, 5].includes(value)) {
    return "минуты чтения";
  }
  return "минут чтения";
}
