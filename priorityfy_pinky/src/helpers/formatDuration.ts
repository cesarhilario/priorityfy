export function formatDuration(minutes: number) {
  if (minutes >= 1440) {
    return `${Math.round(minutes / 1440)} dia(s)`;
  } else if (minutes >= 60) {
    return `${Math.round(minutes / 60)} hora(s)`;
  } else {
    return `${minutes} minuto(s)`;
  }
}
