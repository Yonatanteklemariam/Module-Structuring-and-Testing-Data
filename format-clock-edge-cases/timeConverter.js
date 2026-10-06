function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);
  const paddedPmHours = (hours - 12).toString().padStart(2, "0");
  const paddedAmHours = hours.toString().padStart(2, "0");

  if (hours < 0 || hours > 24 || minutes < 0 || minutes > 59) {
    return `Invalid time`;
  }
  if (hours === 0) {
    return `12:${minutes} am`;
  }
  if (hours === 12) {
    return `12:${minutes} pm`;
  }
  if (hours === 24) {
    return `12:${minutes} am`;
  }
  if (hours > 12) {
    return `${paddedPmHours}:${minutes} pm`;
  }
  return `${paddedAmHours}:${minutes} am`;
}

export { formatAs12HourClock };
