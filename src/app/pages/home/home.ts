import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
export class Home implements OnInit {
  ngOnInit(): void {
    this.initAnimations();
  }

  private initAnimations(): void {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-visible');
            }
          });
        },
        { threshold: 0.1 }
      );

      setTimeout(() => {
        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
          observer.observe(el);
        });
      }, 100);
    }
  }
}
