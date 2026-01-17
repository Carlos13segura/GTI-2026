import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'iconify-icon';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hero.html',
    styleUrl: './hero.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroComponent {
    heroImage = 'https://assets.volkswagen.com/is/image/volkswagenag/VW_NGW6_Showroom_MY26GolfR_Exterior_Gallery_Cover?Zml0PWNyb3AlMkMxJndpZD0xOTIwJmhlaT0xMDgwJmZtdD13ZWJwJnFsdD03OSZiZmM9b2ZmJmJmMTc=';
}
