import {
  transition,
  trigger,
  query,
  style,
  animate,
  group
} from '@angular/animations';
export const slideInAnimation =
  trigger('routeAnimations', [
       transition('contact => *', [
            query(':enter, :leave',
                 style({ position: 'fixed', width: '100%' }),
                 { optional: true }),
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.2s ease-in-out',
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.2s ease-in-out',
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ])
       ]),
       transition('home => *', [
            query(':enter, :leave',
                 style({ position: 'fixed',  width: '100%' }),
                 { optional: true }),
            group([
                 query(':enter', [
                     style({ transform: 'translateX(100%)' }),
                     animate('0.2s ease-in-out',
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform: 'translateX(0%)' }),
                     animate('0.2s ease-in-out',
                     style({ transform: 'translateX(-100%)' }))
                     ], { optional: true }),
             ])
       ]),
       transition('resume => contact', [
             query(':enter, :leave',
                 style({ position: 'fixed', width: '100%' }),
                 { optional: true }),
             group([
                 query(':enter', [
                     style({ transform: 'translateX(100%)' }),
                     animate('0.2s ease-in-out',
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform: 'translateX(0%)' }),
                     animate('0.2s ease-in-out',
                     style({ transform: 'translateX(-100%)' }))
                 ], { optional: true }),
             ])
       ]),
       transition('resume => home', [
             query(':enter, :leave',
                 style({ position: 'fixed', width: '100%' }),
                 { optional: true }),
             group([
                 query(':enter', [
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.2s ease-in-out',
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                      style({ transform: 'translateX(0%)' }),
                      animate('0.2s ease-in-out',
                      style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
             ])
      ]),
]);
