// Independent GTA Vice Mode preparation utilities. No network or dependencies.
import { pathToFileURL } from 'node:url';

export function estimateMinutes(gigabytes, megabitsPerSecond) {
  if (!Number.isFinite(gigabytes) || !Number.isFinite(megabitsPerSecond) ||
      gigabytes < 0.01 || gigabytes > 10000 ||
      megabitsPerSecond < 0.01 || megabitsPerSecond > 100000) {
    throw new RangeError('Use 0.01–10000 GB and 0.01–100000 Mbps.');
  }
  return Math.max(1, Math.ceil(gigabytes * 8000 / megabitsPerSecond / 60));
}

export function xboxPreloadTime(timeZone) {
  const instant = new Date('2026-11-10T00:00:00Z');
  return new Intl.DateTimeFormat('en-GB', {
    timeZone, dateStyle: 'full', timeStyle: 'long', hourCycle: 'h23'
  }).format(instant);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const [command, first, second] = process.argv.slice(2);
    if (command === 'download' && first && second) {
      console.log(JSON.stringify({ minutes: estimateMinutes(Number(first), Number(second)),
        caveat: 'Transfer estimate only; excludes installation, pauses and updates. Supply the actual download size, not the storage requirement.' }));
    } else if (command === 'xbox' && first) {
      console.log(JSON.stringify({ timeZone: first, time: xboxPreloadTime(first),
        source: 'https://support.rockstargames.com/articles/7nPqOA2uCbpEQHXx7KVrYd/grand-theft-auto-vi-pre-load-faq',
        checked: '2026-11-06', caveat: 'Scheduled Xbox pre-load time. PS5 follows local midnight instead. Recheck the official source.' }));
    } else {
      throw new Error('Usage: node launch-tools.mjs download <GB> <Mbps> | xbox <IANA time zone>');
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
