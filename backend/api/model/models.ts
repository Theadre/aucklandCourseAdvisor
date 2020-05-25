import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, OneToMany, PrimaryColumn, OneToOne, ManyToMany } from 'typeorm';

@Entity('User')
export class User {

    @PrimaryGeneratedColumn()
    id = null;

    @Column('text')
    firstname = '';

    @Column('text')
    lastname = '';

    @Index({ unique: true })
    @Column('text')
    email = '';

    @Column('text')
    password = '';

    @Column('text')
    role = '';

    @OneToMany(() => StudentProgramme, studentProgrammes => studentProgrammes.user)
    studentProgrammes: StudentProgramme[];

    @OneToMany(() => Student, students => students.user)
    students: Student[];

    @ManyToMany(() => Course, courses => courses.users)
    courses: Course[];

    @OneToMany(() => Programme, programmes => programmes.user)
    programmes: Programme[];

    // @ManyToMany(() => CourseCode, coursecodes => coursecodes.users)
    // coursecodes: CourseCode[];

}


@Entity('Programme')
export class Programme {

    @PrimaryGeneratedColumn()
    id = null;

    @Column('text')
    title = '';

    @Column('date')
    date = new Date();

    @ManyToOne(() => User, user => user.programmes)
    user: User;

    @ManyToMany(() => Course, course => course.programmes)
    courses: Course[];

    @OneToOne(() => StudentProgramme, studentProgramme => studentProgramme.programme, { onDelete: 'CASCADE' })
    studentProgramme: StudentProgramme;
}

@Entity('StudentProgramme')
export class StudentProgramme {

    @PrimaryColumn('integer')
    studentId = null;

    @PrimaryColumn('integer')
    programmeId = null;

    @Column('date')
    date = new Date();

    @ManyToOne(() => User, users => users.studentProgrammes, { onDelete: 'CASCADE' })
    user: User;

    @OneToOne(() => Student, student => student.studentProgramme, { onDelete: 'CASCADE' })
    student: Student;

    @OneToOne(() => Programme, programme => programme.studentProgramme, { onDelete: 'CASCADE' })
    programme: Programme;
}

@Entity('Student')
export class Student {

    @PrimaryGeneratedColumn()
    id = null;

    @Column('date')
    date = new Date();

    @Column('text')
    firstName = '';

    @Column('text')
    lastName = '';

    @Column('text')
    degree = '';

    @ManyToOne(() => User, user => user.students)
    user: User;

    @OneToOne(() => StudentProgramme, studentProgramme => studentProgramme.student, { onDelete: 'CASCADE' })
    studentProgramme: StudentProgramme;
}

@Entity('Course')
export class Course {

    @PrimaryGeneratedColumn()
    id = null;

    @Column('date')
    date = new Date();

    @Column('text')
    courseCode = '';

    @Column('text')
    title = '';

    @Column('text')
    prerequisites: string[];

    @Column('text')
    restrictions: string[];

    @Column('boolean')
    semester: { first: boolean; second: boolean };

    @Column('boolean')
    valueArea: { one: boolean; two: boolean; three: boolean; four: boolean };

    @Column('text')
    description = '';

    @ManyToMany(() => Programme, programmes => programmes.courses, { onDelete: 'CASCADE' })
    programmes: Programme[];

    // @OneToOne(() => CourseCode, coursecode => coursecode.course, { onDelete: 'CASCADE' })
    // coursecode: CourseCode;

    @ManyToMany(() => User, users => users.courses, { onDelete: 'CASCADE' })
    users: User[];
}

@Entity('CourseCode')
export class CourseCode {

    @PrimaryGeneratedColumn()
    id = null;

    @Column('text')
    name = '';

    @Column('text')
    code = '';

    @Column('integer')
    courseId = 0;

    @Column('date')
    date = new Date();

    // @OneToOne(() => Course, course => course.coursecode, { onDelete: 'CASCADE' })
    // course: Course;

    // @ManyToMany(() => User, users => users.coursecodes, { onDelete: 'CASCADE' })
    // users: User[];
}


