import { interval, fromEvent } from 'rxjs';
import { map, filter, tap, take, takeLast, takeWhile, scan, reduce, switchMap } from 'rxjs/operators'

fromEvent(document, 'click').pipe(switchMap(event => {
  return interval(1000)
    .pipe(
      tap(v => console.log("Tap: ", v)),
      take(4),
      //     // map((value) => value * 45),
      //     // filter(v => v % 2 === 0),
      //     // take(10),
      //     // takeLast(5)
      //     // takeWhile(v => v < 8)
      //     // scan((acc, value) => acc += value, 0)
      reduce((acc, value) => acc += value, 0)
    );

}))
  .subscribe({
    next: v => console.log("Next", v),
    complete: () => console.log("Complete")
  });

// const stream$ = interval(1000)
//   .pipe(
//     // tap(v => console.log("Tap: ", v)),
//     take(4),
//     // map((value) => value * 45),
//     // filter(v => v % 2 === 0),
//     // take(10),
//     // takeLast(5)
//     // takeWhile(v => v < 8)
//     // scan((acc, value) => acc += value, 0)
//     reduce((acc, value) => acc += value, 0)
//   );

// stream$.subscribe({
//   next: v => console.log("Next", v),
//   complete: () => console.log("Complete")
// })