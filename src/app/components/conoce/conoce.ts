import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'iconify-icon';

@Component({
    selector: 'app-conoce',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './conoce.html',
    styleUrl: './conoce.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConoceComponent {
    carImage = 'https://carimages.d2cmedia.ca/newcars/cb695d00b12fca8/2026/Volkswagen/Golf%20R/MjkxNDg1Xk1lZGlhIEdhbGxlcnk/0-MsjbEtatyaD0Ri75gUAd2GBuTglvcZW8GFclKcL7WsHJMd82RZvXvxDKKzzDG0v1cvNIGYBY_pjKfTnrzCnSHXj6poRynioUe9ZWmNYf6r-fOnTch_h6hT-d-FcipYZgM2x0GGcJVnSB_IX975aKG-26K9OW8AgscYJ6C5xXK3ALHL6IS-og/cc_2026VWC262009186_01_640_0Q0Q.png';

    specs = {
        potencia: '245 HP',
        aceleracion: '6.2s (0-100 km/h)',
        torque: '370 Nm'
    };
}
