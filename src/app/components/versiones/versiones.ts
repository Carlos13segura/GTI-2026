import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'iconify-icon';

interface Version {
    name: string;
    image: string;
    precioLista: string;
    precioContado: string;
    precioFinanciado: string;
    rendimiento: string;
    potencia: string;
    caracteristicas: string[];
}

@Component({
    selector: 'app-versiones',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './versiones.html',
    styleUrl: './versiones.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VersionesComponent {
    versions: Version[] = [
        {
            name: 'GTI DSG 2026',
            image: 'https://bonn31.com.mx/Assets/ModelosNuevos/img/Modelos/GTI/26/Versiones/VWNGTI2601.png',
            precioLista: '$839,990',
            precioContado: '$839,990',
            precioFinanciado: '$839,990',
            rendimiento: '12.9',
            potencia: '261',
            caracteristicas: [
                'Cámara de visión trasera',
                'Control de velocidad crucero adaptativo (ACC)',
                'Sensores de estacionamiento delanteros y traseros',
                'Tanque de combustible (l) 50',
                'Luces traseras en tecnología LED dinámicas',
                'Reflectores traseros',
                'Rines de aluminio 18" / Llantas 225/40',
                'Aire Acondicionado Climatronic con panel touch de 3 zonas',
                'Botón de encendido de motor (Push to Start)',
                'Computadora de viaje',
                'Contactos de 12 Voltios frontal y posterior',
                'Elevadores eléctricos de cristales (delanteros y traseros)'
            ]
        },
        {
            name: 'Golf R 2026',
            image: 'https://carimages.d2cmedia.ca/newcars/cb695d00b12fca8/2026/Volkswagen/Golf%20R/MjkxNDg1Xk1lZGlhIEdhbGxlcnk/0-MsjbEtatyaD0Ri75gUAd2GBuTglvcZW8GFclKcL7WsHJMd82RZvXvxDKKzzDG0v1cvNIGYBY_pjKfTnrzCnSHXj6poRynioUe9ZWmNYf6r-fOnTch_h6hT-d-FcipYZgM2x0GGcJVnSB_IX975aKG-26K9OW8AgscYJ6C5xXK3ALHL6IS-og/cc_2026VWC262009186_01_640_0Q0Q.png',
            precioLista: '$1,049,990',
            precioContado: '$1,049,990',
            precioFinanciado: '$1,049,990',
            rendimiento: '11.2',
            potencia: '315',
            caracteristicas: [
                'Cámara de visión 360°',
                'Control de velocidad crucero adaptativo (ACC)',
                'Sistema de tracción 4MOTION',
                'Tanque de combustible (l) 50',
                'Luces traseras en tecnología LED dinámicas',
                'Escape deportivo con 4 salidas',
                'Rines de aluminio 19" / Llantas 235/35',
                'Aire Acondicionado Climatronic con panel touch de 3 zonas',
                'Botón de encendido de motor (Push to Start)',
                'Digital Cockpit Pro de 10.25"',
                'Sistema de sonido Harman Kardon',
                'Asientos deportivos con ajuste eléctrico'
            ]
        }
    ];

    currentVersionIndex = 0;

    get currentVersion(): Version {
        return this.versions[this.currentVersionIndex];
    }

    selectVersion(index: number): void {
        this.currentVersionIndex = index;
    }

    nextVersion(): void {
        this.currentVersionIndex = (this.currentVersionIndex + 1) % this.versions.length;
    }

    prevVersion(): void {
        this.currentVersionIndex = (this.currentVersionIndex - 1 + this.versions.length) % this.versions.length;
    }
}
