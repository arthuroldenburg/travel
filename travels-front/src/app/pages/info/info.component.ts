import { Component, OnInit } from '@angular/core';
import { Place } from '../../models/place.model';
import { Router } from '@angular/router';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [DragDropModule, NgFor],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent implements OnInit {
  map: Place = {
    name: '',
    country: '',
    principal_places: [],
    a_site_places: [],
    b_site_places: [],
    mid_places: [],
    spawns: [],
    thumbnail: '',
    site_images: [],
  };


  principal = [];
  aSite = [];
  bSite = [];
  mid = [];

  // items = ['a site', 'b site', 'mid'];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const ls = localStorage.getItem('de_map');
    if (ls) {
      const mapLs = JSON.parse(ls);
      this.map = mapLs;
      this.principal = mapLs.principal_places;
      this.aSite = mapLs.a_site_places;
      this.bSite = mapLs.b_site_places;
      this.mid = mapLs.mid_places;
    } else {
      this.router.navigateByUrl('');
    }
  }

  dropPrincipal(event: CdkDragDrop<string[]>) {
    const prev = event.previousIndex;
    const curr = event.currentIndex;
    moveItemInArray(this.principal, prev, curr);
  }

  dropASite(event: CdkDragDrop<string[]>) {
    const prev = event.previousIndex;
    const curr = event.currentIndex;
    moveItemInArray(this.aSite, prev, curr);
  }
  dropMid(event: CdkDragDrop<string[]>) {
    const prev = event.previousIndex;
    const curr = event.currentIndex;
    moveItemInArray(this.mid, prev, curr);
  }
  dropBSite(event: CdkDragDrop<string[]>) {
    const prev = event.previousIndex;
    const curr = event.currentIndex;
    moveItemInArray(this.bSite, prev, curr);
  }

}
