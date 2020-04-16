import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class DbFakeService {
  // Les recettes de cuisine en format Json

  courses: Course[] = [
    {
      id: 1,
      code: `567`,
      title: `Software development`,
      prerequisites: `768, 456`,
      restrictions: `980`,
      semester: `semester 1, semester 2`,
      description : `You will install docker`
    },
  ];
}