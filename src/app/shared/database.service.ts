import { of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { Injectable } from '@angular/core';

import { Course, CourseCode, Programme } from '../app.interfaces';
import { FakeData } from './fake-data';

@Injectable({
  providedIn: 'root',
})

export class DatabaseService {
  saveProgramme: any;

  constructor(private db: FakeData) {}

  public generateId(): string {
    return uuidv4();
  }

  public getCourses(): Promise<Course[]> {
    return new Promise((resolve, _reject) => {
      // ============ initialize fake api ============ //
      resolve(this.db.fakeCourses);
      // =============== end fake api ================ //
    });
  }

  public getCourse(id: string): Promise<Course> {
    return new Promise((resolve, reject) => {
      // ============ initialize fake api ============ //
      if (id) {
        const selectedCourse: Course = this.db.fakeCourses.find((course) => course.id === id);
        if (selectedCourse) {
          resolve(selectedCourse);
        } else {
          reject();
        }
      } else {
        reject();
      }
      // =============== end fake api ================ //
    });
  }

  public saveCourse(course: Course): Promise<boolean> {
    return new Promise((resolve, _reject) => {
      // ============ initialize fake api ============ //
      this.db.fakeCourses.push(course);
      resolve();
      // =============== end fake api ================ //
    });
  }

  public updateCourse(course: Course): Promise<any> {
    return new Promise((resolve, reject) => {
      const uuid = course.id;
      // ============ initialize fake api ============ //
      this.getCourses().then(
        (storedCourses) => {
          const courseIndex = storedCourses.findIndex((c) => c.id === uuid);
          this.db.fakeCourses[courseIndex] = { ...this.db.fakeCourses[courseIndex], ...course };
          resolve();
        },
        () => reject()
      );
      // =============== end fake api ================ //
    });
  }

  public updateProgramme(programme: Programme): Promise<any> {
    return new Promise((_resolve, _reject) => {
      const uuid = programme.id;
      // ============ initialize fake api ============ //
      // =============== end fake api ================ //
    });
  }

  public getProgrammes(): Promise<Programme[]> {
    return new Promise((resolve, _reject) => {
      // ============ initialize fake api ============ //
      resolve(this.db.fakeProgrammes);
      // =============== end fake api ================ //
    });
  }

  public getProgramme(id: string): Promise<Programme> {
    return new Promise((resolve, reject) => {
      // ============ initialize fake api ============ //
      if (id) {
        const selectedProgramme: Programme = this.db.fakeProgrammes.find((programme) => programme.id === id);
        if (selectedProgramme) {
          resolve(selectedProgramme);
        } else {
          reject();
        }
      } else {
        reject();
      }
      // =============== end fake api ================ //
    });
  }

  public removeProgramme(id: string): Promise<any> {
    return new Promise((resolve, _reject) => {
      // ============ initialize fake api ============ //
      this.getProgrammes().then((storedProgrammes) => {
        const programmeIndex = storedProgrammes.findIndex((c) => c.id === id);
        storedProgrammes.splice(programmeIndex, 1);
        resolve();
      });
      // =============== end fake api ================ //
    });
  }

  public removeCourse(id: string): Promise<any> {
    return new Promise((resolve, _reject) => {
      // ============ initialize fake api ============ //
      this.getCourses().then((storedCourses) => {
        const courseIndex = storedCourses.findIndex((c) => c.id === id);
        storedCourses.splice(courseIndex, 1);
        resolve();
      });
      // =============== end fake api ================ //
    });
  }

  public getCourseCodes(): Promise<CourseCode[]> {
    return new Promise((resolve, _reject) => {
      // ============ initialize fake api ============ //
      resolve(this.db.fakeCourseCodes);
      // =============== end fake api ================ //
    });
  }
  
}
