import { CreateUpdateNoteDto } from '../notes/dto/create-update-note.dto';
export const notes: CreateUpdateNoteDto[] = [
  {
    title: 'First task',
    content: 'First task',
    category: 'Task',
    dates: '',
    archived: false,
  },
  {
    title: '2 task',
    content: 'Second task',
    category: 'Task',
    dates: '',
    archived: false,
  },
  {
    title: '3 task',
    content: 'Third task',
    category: 'Task',
    dates: '',
    archived: false,
  },
  {
    title: 'Thought',
    content: 'Thought',
    category: 'Random Thought',
    dates: '',
    archived: false,
  },
  {
    title: '1 idea',
    content: 'First idea 1/1/2024, second time 1/2/2024',
    category: 'Idea',
    dates: '1/1/2024,1/2/2024',
    archived: false,
  },
  {
    title: '2 idea',
    content: 'Second idea',
    category: 'Idea',
    dates: '',
    archived: false,
  },
  {
    title: '3 idea',
    content: 'Last idea',
    category: 'Idea',
    dates: '',
    archived: false,
  },
];
