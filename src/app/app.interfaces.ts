export interface CourseCode {
  id: string;
  name: string;
  code: number;
}

export interface ProgrammeCode {
  id: string;
  name: string;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  date: string;
  prerequisits: string[]; // honestly i don't really know exactly how this part of the form shoudl behave
  restrictions: string[];
  semester: { first: boolean; second: boolean };
  valueArea: { one:boolean;  two:boolean; three:boolean; four:boolean };
  value: number;
  description: string;
}

export interface Programme {
  id: string;
  title: string;
  date: string;
}

