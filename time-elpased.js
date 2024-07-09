import { readable, derived } from 'svelte/store';

 const time = readable(new Date(), function start(set) {
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return function stop() {
        clearInterval(interval);
    };
});

const start = new Date();

console.log(start);
console.log(typeof time);
// export const elapsed = derived(time, ($time) => Math.round(($time - start) / 1000));

console.log('Start Time:', start);

// Define elapsed store derived from time store
const elapsed = derived(time, ($time) => Math.round(($time - start) / 1000));

// Subscribe to time and elapsed stores to log their values
time.subscribe($time => console.log('Current Time:', $time));
elapsed.subscribe($elapsed => console.log('Elapsed Seconds:', $elapsed));