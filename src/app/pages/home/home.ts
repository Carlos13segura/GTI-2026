import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

// Import all components
import { NavbarComponent } from '../../components/navbar/navbar';
import { HeroComponent } from '../../components/hero/hero';
import { ConoceComponent } from '../../components/conoce/conoce';
import { InterioresComponent } from '../../components/interiores/interiores';
import { ColoresComponent } from '../../components/colores/colores';
import { TecnologiaComponent } from '../../components/tecnologia/tecnologia';
import { ExteriorComponent } from '../../components/exterior/exterior';
import { VersionesComponent } from '../../components/versiones/versiones';
import { CtaComponent } from '../../components/cta/cta';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ConoceComponent,
    InterioresComponent,
    ColoresComponent,
    TecnologiaComponent,
    ExteriorComponent,
    VersionesComponent,
    CtaComponent,
    FooterComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit, AfterViewInit {
  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 0
      });
    }
  }
}
