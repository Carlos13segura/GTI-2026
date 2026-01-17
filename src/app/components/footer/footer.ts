import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'iconify-icon';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer.html',
    styleUrl: './footer.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FooterComponent {
    currentYear = new Date().getFullYear();

    links = [
        { label: 'Privacidad', href: '#' },
        { label: 'Términos', href: '#' },
        { label: 'Contacto', href: '#' }
    ];
}
