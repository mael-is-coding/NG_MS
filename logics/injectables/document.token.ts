import { InjectionToken } from '@angular/core'


export const DOCUMENT = new InjectionToken<Document>('Window object', {
  factory: () => document
})
