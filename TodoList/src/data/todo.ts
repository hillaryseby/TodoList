export const dummyData: Todo[] = [
  {
    id: 1,
    title: "Like this video 👍🏻",
    completed: false,
  },
  {
    id: 2,
    title: "Subscribe to Coding in Flow 📺",
    completed: false,
  },
  {
    id: 3,
    title: "Leave a nice comment 😊",
    completed: true,
  },
];

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
