import { Course, CourseCode, Programme, ProgrammeCode } from '../app.interfaces';

export const fakeCourseCodes: CourseCode[] = [
  { id: '6c7e72e4-4749-4dfd-89c2-127a8fc16b19', name: 'SOFTENG', code: 206 },
  { id: '2c5b7791-bb31-4e0d-8bdd-a1a9785b8860', name: 'COMPSYS', code: 998 },
  // for a weird reason it does not let me store values starting with zero, like: 098
];

export const fakeCourses: Course[] = [
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

export const fakeProgrammes: Programme[] = [
  {
    id: '',
    title: '',
    date: '2020-04-20',
  },
];

export const fakeProgrammeCodes: ProgrammeCode[] = [
  { id: '1', name: 'Programme 1'},
  { id: '2', name: 'Programme 2'},
  
];