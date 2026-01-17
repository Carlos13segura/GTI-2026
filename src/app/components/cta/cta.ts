import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'iconify-icon';

@Component({
    selector: 'app-cta',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cta.html',
    styleUrl: './cta.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CtaComponent { }
