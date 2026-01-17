import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'iconify-icon';

interface GalleryImage {
    src: string;
    alt: string;
}

@Component({
    selector: 'app-exterior',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './exterior.html',
    styleUrl: './exterior.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExteriorComponent {
    gallery: GalleryImage[] = [
        { src: 'https://bonn31.com.mx/Assets/ModelosNuevos/img/Modelos/GTI/26/Galeria/web/01.jpg', alt: 'Vista frontal GTI' },
        { src: 'https://bonn31.com.mx/Assets/ModelosNuevos/img/Modelos/GTI/26/Galeria/web/02.jpg', alt: 'Vista lateral GTI' },
        { src: 'https://bonn31.com.mx/Assets/ModelosNuevos/img/Modelos/GTI/26/Galeria/web/03.jpg', alt: 'Vista trasera GTI' },
        { src: 'https://bonn31.com.mx/Assets/ModelosNuevos/img/Modelos/GTI/26/Galeria/web/04.jpg', alt: 'Detalle faros GTI' },
        { src: 'https://assets.volkswagen.com/is/image/volkswagenag/vw-gti-galeria-02?Zml0PWNyb3AsMSZmbXQ9cG5nJndpZD04MDAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmYzRiMA==', alt: 'Rines GTI' },
        { src: 'https://autotest.com.ar/wp-content/uploads/2025/08/Volkswagen-Golf-GTI-2026-teaser.jpg', alt: 'Vista dinámica GTI' }
    ];
}
