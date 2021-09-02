import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  loginClick()
  {
    this.router.navigate(['/login']);
    
  }
  registerClick()
  {
    this.router.navigate(['/register']);
    
  }
  homeClick()
  {
    this.router.navigate(['/']);
    
  }


}
