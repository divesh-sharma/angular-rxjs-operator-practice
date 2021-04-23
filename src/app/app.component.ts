import { Component, VERSION, OnInit } from "@angular/core";
import { of, from, interval, Subscription, timer, zip } from "rxjs";
import { map, mapTo } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  dataOf$ = of(1, 2, 3, 4);
  dataFrom$ = from([{ name: "Divesh", age: 24 }, { softWare: "Angular" }]);
  interval$ = interval(1000);
  timeout$ = timer(5000);
  age$ = of(25, 24, 28);
  name$ = of("Divesh", "Chintu", "Testing");

  ngOnInit() {
    // this.dataOf$.pipe(map(data => data * 10)).subscribe(console.log);
    // this.dataOf$.pipe(mapTo(`i am using the mapTo`)).subscribe(console.log);
    // this.dataFrom$.subscribe(console.log);
    // const intervalSubs: Subscription = this.interval$.subscribe(count => {
    //   if (count > 10) {
    //     intervalSubs.unsubscribe();
    //   } else {
    //     console.log(count);
    //   }
    // });
    this.timeout$.subscribe(res => console.log(res));
    zip(this.age$, this.name$).subscribe(console.log);
    zip(this.age$, this.name$)
      .pipe(map(([age, name]) => ({ age, name })))
      .subscribe(console.log);
  }
}
