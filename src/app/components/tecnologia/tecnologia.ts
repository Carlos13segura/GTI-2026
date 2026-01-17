import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'iconify-icon';

@Component({
    selector: 'app-tecnologia',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tecnologia.html',
    styleUrl: './tecnologia.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TecnologiaComponent {
    techImage = 'https://bonn31.com.mx/Assets/ModelosNuevos/img/Modelos/GTI/26/Tecnologia/Web/vw-gti-tecno-bolsas-3.jpg';

    features = [
        {
            icon: 'mdi:monitor-dashboard',
            title: 'Digital Cockpit Pro',
            description: 'Pantalla digital de 10.25" totalmente configurable'
        },
        {
            icon: 'mdi:cellphone-link',
            title: 'App-Connect',
            description: 'Apple CarPlay y Android Auto inalámbrico'
        },
        {
            icon: 'mdi:navigation-variant',
            title: 'Navegación 3D',
            description: 'Sistema de navegación con mapas 3D'
        },
        {
            icon: 'mdi:speaker-wireless',
            title: 'Harman Kardon',
            description: 'Sistema de sonido premium de 480W'
        }
    ];
}
