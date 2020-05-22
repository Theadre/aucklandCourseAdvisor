import { User, Student, StudentProgramme, Programme, Course, CourseCode } from './models';
import * as faker from 'faker';
import Container from 'typedi';
import { UserRepository } from '../repository/user.repository';
import { StudentRepository } from '../repository/student.repository';
import { StudentProgrammeRepository } from '../repository/student.programme.repository';
import { ProgrammeRepository } from '../repository/programme.repository';
import { CourseCodeRepository } from '../repository/course.code.repository';
import { CourseRepository } from '../repository/course.repository';


export class FakeData {
  private serviceUser = Container.get(UserRepository);
  private serviceStudent = Container.get(StudentRepository);
  private serviceStudentProgramme = Container.get(StudentProgrammeRepository);
  private serviceProgramme = Container.get(ProgrammeRepository);
  private serviceCourse = Container.get(CourseRepository);
  private serviceCourseCode = Container.get(CourseCodeRepository);

  constructor() { }

  async insertSomeFakeData() {
    const i = await this.serviceUser.count();
    if (i > 0) {
      return;
    }
    const count = 10;
    await this.addUser(count);
    await this.addStudent(count);
    await this.addStudentProgramme(count);
    await this.addProgramme(count);
    await this.addCourse(count);
    await this.addCourseCode(count);

    console.log('Database seeding has done succesfully');
  }

  async addUser(count) {
    const list = [...Array(count - 1).keys()].map(i => {
      const o = new User();
      o.firstname = faker.name.firstName();
      o.lastname = faker.name.lastName();
      o.email = faker.internet.email();
      o.password = faker.internet.password(6);
      o.role = 'user';
      return o;
    });

    list.push({
      firstname: 'Admin',
      lastname: 'UoA',
      email: 'admin@angular.io',
      password: '123',
      role: 'admin'
    } as any);

    await this.serviceUser.addList(list);
  }

  async addStudent(count) {
    const list = [...Array(count - 1).keys()].map(i => {
      const o = new Student();
      o.firstName = faker.name.firstName();
      o.lastName = faker.name.lastName();
      o.degree = 'Undergraduate';
      return o;
    });

    await this.serviceStudent.addList(list);
  }

  async addProgramme(count) {

    const list = [...Array(count).keys()].map(i => {
      const o = new Programme();
      o.title = faker.name.title();
      o.date = faker.date.recent();
      return o;
    });

    list.push([
      {
        id: '1',
        title: 'BE(Hans) in SE'
      },
      {
        id: '2',
        title: 'BE(Hans) in CSE'
      },
      {
        id: '3',
        title: 'BE(Hans) in CSE'
      }] as any);

    await this.serviceProgramme.addList(list);
  }

  async addStudentProgramme(count) {

    const list = [...Array(count).keys()].map(i => {
      const o = new StudentProgramme();
      o.studentId = i + 1;
      o.programmeId = i + 1;
      o.date = faker.date.future();
      return o;
    });

    await this.serviceStudentProgramme.addList(list);
  }

  async addCourse(count) {

    const list = [...Array(count).keys()].map(i => {
      const o = new Course();
      o.title = 'Course 101';
      o.courseCode = '6c7e72e4-4749-4dfd-89c2-127a8fc16b19';
      o.date = faker.date.past();
      o.description = 'Dummy description';
      o.prerequisites = [];
      o.restrictions = ['2c5b7791-bb31-4e0d-8bdd-a1a9785b8860'];
      o.semester = { first: true, second: false };
      o.valueArea = { one: true, two: false, three: false, four: false };

      return o;
    });

    await this.serviceCourse.addList(list);
  }

  async addCourseCode(count) {

    const list = [...Array(count).keys()].map(i => {
      const o = new CourseCode();
      o.id = i + 1;
      o.date = faker.date.past();
      o.name = 'ELEC';
      o.code = faker.random.number();
      o.courseId = faker.random.number({ min: 1, max: 10 });
      return o;
    });

    list.push([
      {
        id: '6c7e72e4-4749-4dfd-89c2-127a8fc16b19',
        name: 'SOFTENG',
        code: 206
      },
      {
        id: '2c5b7791-bb31-4e0d-8bdd-a1a9785b8860',
        name: 'COMPSYS',
        code: 998
      }] as any);

    await this.serviceCourseCode.addList(list);
  }
}
