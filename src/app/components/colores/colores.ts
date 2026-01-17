import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'iconify-icon';

interface ColorOption {
    name: string;
    hex: string;
    image: string;
}

@Component({
    selector: 'app-colores',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './colores.html',
    styleUrl: './colores.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ColoresComponent {
    colors: ColorOption[] = [
        {
            name: 'Blanco Puro',
            hex: '#FFFFFF',
            image: 'https://carimages.d2cmedia.ca/newcarimages/en/cb696147923e05f/Volkswagen/Golf%20GTI/2026/2100/480339/White/front45.png'
        },
        {
            name: 'Azul Anemona',
            hex: '#002A4A',
            image: 'https://vw-olapolanco.com.mx/Assets/ModelosNuevos/img/Modelos/NUEVO-GTI/25/Colores/azul-anemona.png'
        },
        {
            name: 'Gris Moonstone',
            hex: '#393C40',
            image: 'https://vwdelcentro.com.mx/Assets/ModelosNuevos/img/Modelos/NUEVO-GTI/25/Colores/gris-moonstone.png'
        },
        {
            name: 'Rojo Kings',
            hex: '#F23054',
            image: 'https://vw-olapolanco.com.mx/Assets/ModelosNuevos/img/Modelos/NUEVO-GTI/25/Colores/rojo-kings.png'
        }
    ];

    selectedColor: ColorOption = this.colors[0];
    isColorTransitioning = false;

    selectColor(color: ColorOption): void {
        if (color === this.selectedColor || this.isColorTransitioning) return;

        this.isColorTransitioning = true;

        setTimeout(() => {
            this.selectedColor = color;
            setTimeout(() => {
                this.isColorTransitioning = false;
            }, 400);
        }, 300);
    }
}
