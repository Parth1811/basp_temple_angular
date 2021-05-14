import { animation, state, query, style, transition, trigger, animate, group } from '@angular/animations';

export let slide_up  = trigger("slide-up", [
    // state('void', []),
    transition("* <=> *", [
        group([
            query('.card1-content', [
                style({ transform: "translateY(100%)" }),
                animate(500)
            ]),
            query('.card1-date, .card1-icon', [
                style({ transform: "translateY(-100%)" }),
                animate(500)
            ]),
            query('.card1-body', style({ opacity: 0 })),
            query('.card1-sep', style({ transform: "scale(0)" })),
            query('img', [
                style({ opacity: 0 }),
                animate(500, style({ opacity: 1 }))
            ])
        ]),
        group([
            query('.card1-body', animate(500, style({ opacity: 1 }))),
            query('.card1-sep', animate(500, style({ transform: "scale(1)" }))),
        ])
    ])
])