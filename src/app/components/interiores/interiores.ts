import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'iconify-icon';

interface GalleryImage {
    src: string;
    alt: string;
    title?: string;
    description?: string;
}

@Component({
    selector: 'app-interiores',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './interiores.html',
    styleUrl: './interiores.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InterioresComponent {
    gallery: GalleryImage[] = [
        {
            src: 'https://assets.volkswagen.com/is/image/volkswagenag/VW_NGW6_Showroom_MY26GolfGTI_dashboardWhiteMap?Zml0PWNyb3AlMkMxJndpZD0xOTIwJmhlaT0xMDgwJmZtdD13ZWJwJnFsdD03OSZiZmM9b2ZmJmJmMTc=',
            alt: 'Interior GTI',
            title: 'Diseño Interior Premium',
            description: 'Materiales de primera calidad'
        },
        {
            src: 'https://assets.volkswagen.com/is/image/volkswagenag/volkswagen-digital-cockpit?Zml0PWNyb3AlMkMxJndpZD0xMjgwJmhlaT03MjAmZm10PWpwZWcmcWx0PTc5JmJmYz1vZmYmMmI5ZQ==',
            alt: 'Panel de instrumentos',
            title: 'Digital Cockpit',
            description: 'Pantalla digital de 10.25"'
        },
        {
            src: 'https://img.sm360.ca/images/web/sm360-plateform/images/gallery_image31761744363890.jpg',
            alt: 'Asientos deportivos',
            title: 'Asientos GTI',
            description: 'Tapicería deportiva exclusiva'
        },
        {
            src: 'assets/img/volkswagen-golf-gti-edition-50.jpg',
            alt: 'Detalles GTI',
            title: 'Detalles Exclusivos',
            description: 'Emblema GTI en cada detalle'
        }
    ];
}
