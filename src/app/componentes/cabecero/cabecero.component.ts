import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cabecero',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {
  
  constructor(private router:Router){}
  
  ir(){
  this.router.navigate(["registrarse"])
  }
}
