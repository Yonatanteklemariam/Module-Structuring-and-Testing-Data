function formatAs12HourClock(time) {

  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);
  const paddedPMHours =(hours - 12).toString().padStart(2, "0");
  const paddedAMHours = hours.toString().padStart(2, "0");

  if (hours < 0 || hours > 24 || minutes < 0 || minutes > 59) {
    return `Invalid time`;
  }
 if (hours === 0) {
  return `12:${minutes} AM`;
 }
 if (hours === 12) {
    return `12:${minutes} PM`;
 }
 if (hours === 24) {
    return `12:${minutes} AM`;
 }
 if (hours > 12) {
    return `${paddedPMHours}:${minutes} PM`; 
  }
  return `${paddedAMHours}:${minutes} AM`;
}

export {formatAs12HourClock};
