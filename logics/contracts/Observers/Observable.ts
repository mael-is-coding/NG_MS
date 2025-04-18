
import type { Observer } from "./Observer"

export abstract class Observable {
  observers: Observer[]  = []
  changed: boolean = false

  notifyObservers() {
      for(let obs of this.observers) {
        obs.update()
      }
  }

  subscribe(observer: Observer) {
    this.observers.push(observer)
  }
  
}