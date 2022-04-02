import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/service/API/api.service';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  constructor(public apiService: APIService) { }
  repositories: any[] = []
  ngOnInit(): void {
    this.apiService.getRepository().subscribe({
      next: r => {
        this.repositories = r
      }
    })
  }

}
