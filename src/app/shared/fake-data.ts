import { Injectable } from '@angular/core';
import { Course, CourseCode, Programme, Student } from '../app.interfaces';

Injectable({
  providedIn: 'root'
})

export class FakeData {

fakeCourseCodes: CourseCode[] = [
    { id: '6c7e72e4-4749-4dfd-89c2-127a8fc16b19', name: 'SOFTENG', code: 206 },
    { id: '2c5b7791-bb31-4e0d-8bdd-a1a9785b8860', name: 'COMPSYS', code: 998 },
    // for a weird reason it does not let me store values starting with zero, like: 098
  ];

fakeCourses: Course[] = [
    {
      id: 'f4cfddd5-747f-47d5-a70d-b6e9bbd502a2',
      title: 'Course 101',
      code: '6c7e72e4-4749-4dfd-89c2-127a8fc16b19',
      date: '2020-04-20',
      description: 'Dummy description',
      prerequisits: [],
      restrictions: ['2c5b7791-bb31-4e0d-8bdd-a1a9785b8860'],
      semester: { first: true, second: false },
      valueArea: { one: true, two: false, three: false, four: false },
      value: 30,
    },
    {
      id: '4c5152d6-883d-473c-a5d2-bbb4bbe9d5af',
      title: 'Course 102',
      code: '2c5b7791-bb31-4e0d-8bdd-a1a9785b8860',
      date: '2020-04-20',
      description: 'Another dummy description',
      prerequisits: [],
      restrictions: ['2c5b7791-bb31-4e0d-8bdd-a1a9785b8860', '6c7e72e4-4749-4dfd-89c2-127a8fc16b19'],
      semester: { first: true, second: true },
      valueArea: { one: true, two: false, three: false, four: false },
      value: 60,
    },
  ];

fakeProgrammes: Programme[] = [
    {
      id: '1',
      title: 'BE(Hans) in SE',
      date: '2020-04-20'
    },
    {
      id: '2',
      title: 'BE(Hans) in CSE',
      date: '2020-04-20'
    },
    {
      id: '3',
      title: 'BE(Hans) in CSE',
      date: '2020-04-20',
    }
  ];

  fakeStudents: Student[] = [
    {
      id: 1,
      firstName: 'Gilbert',
      lastName: 'BOUGAINVILLEA',
      degree: 'Postgraduate',
      date: '2020-04-29',
    },
    {
      id: 2,
      firstName: 'Ekta',
      lastName: 'GAYA',
      degree: 'Undergraduate',
      date: '2020-04-25',
    }
  ];

}