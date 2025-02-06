export interface iUser {
  name: string;
  email: string;
  password: string;
  username: string;
  role: string;
}
export interface iCourse {
  _id: string;
  title: string;
  description: string;
  instructor: any;
  students: string[];
  price: number;
  category: string;
  courseHighlights: string[];
  difficulty: string;
  duration: number;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}
