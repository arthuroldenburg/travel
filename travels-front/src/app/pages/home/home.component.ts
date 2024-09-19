import { Component, OnInit } from '@angular/core';
import { Place } from '../../models/place.model';
import { HomeService } from '../../services/home/home.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ModelComponent } from "../model/model.component";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ModelComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  places: Place[] = [];
  isModelOpen = false;

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.homeService.getAll().subscribe({
      next: (res) => (this.places = res),
    });
  }

  redirect(place: Place) {
    localStorage.setItem('de_map', JSON.stringify(place));
    // const b = localStorage.getItem('de_map');
    // var a;
    // if (b) a = JSON.parse(b);
    this.router.navigateByUrl('/info');
  }

  openModel() {
    console.log("a");

    this.isModelOpen = true;
  }

  closeModel() {
    this.isModelOpen = false;
  }
}
