import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ExcercisesService } from '../excercises.service';
import { ActivatedRoute } from '@angular/router';
import { ExcerciseComponent } from '../excercise/excercise.component';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [ExcerciseComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  excercise: any; // Adjust type according to your data structure
  filteredexcercises: any[] = []; // Adjust type according to your data structure
  searchForm!: FormGroup;
  isLoading = true;
  errorMessage: string | null = null;

  constructor(
    public excercisesService: ExcercisesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadExcercises();
  }
  loadExcercises() {
    let category = this.route.snapshot.paramMap.get(
      'bodyPartAffected'
    ) as string;
    console.log(category);
    this.excercisesService.getAllMoviesP().then((data) => {
      this.excercise = data;
      console.log(this.excercise);
      this.filteredexcercises = this.filterCoursesByCategory(
        this.excercise,
        category
      );
      this.isLoading = false;
    });
  }
  private filterCoursesByCategory(courses: any[], searchTerm: string): any[] {
    return courses.filter((course) =>
      course.bodyPartAffected.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
