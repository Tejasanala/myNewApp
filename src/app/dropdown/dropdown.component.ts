import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  // courses: any; // Adjust type according to your data structure
  // filteredCourses: any[] = []; // Adjust type according to your data structure
  // searchForm!: FormGroup;
  // isLoading = true;
  // errorMessage: string | null = null;
  // ngOnInit() {
  //   this.loadCourses();
  // }
  // loadCourses() {
  //   let category = this.route.snapshot.paramMap.get('category') as string;
  //   console.log(category);
  //   this.courseService.getCourses().then((data) => {
  //     this.courses = data;
  //     this.filteredCourses = this.filterCoursesByCategory(
  //       this.courses,
  //       category
  //     );
  //     this.isLoading = false;
  //   });
  // }
  // private filterCoursesByCategory(courses: any[], searchTerm: string): any[] {
  //   return courses.filter((course) =>
  //     course.category.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // }
}
