import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'iconify-icon';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navbar.html',
    styleUrl: './navbar.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarComponent {
    isMenuOpen = false;

    navLinks = [
        { label: 'Conoce', href: '#conoce' },
        { label: 'Interiores', href: '#interiores' },
        { label: 'Colores', href: '#colores' },
        { label: 'Tecnología', href: '#tecnologia' },
        { label: 'Exterior', href: '#exterior' },
        { label: 'Versiones', href: '#versiones' }
    ];

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
        // Prevent body scroll when menu is open
        document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    }

    closeMenu(): void {
        this.isMenuOpen = false;
        document.body.style.overflow = '';
    }
}
