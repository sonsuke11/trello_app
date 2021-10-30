export const initialData = {
  boards: {
    id: 'board-1',
    columnOrder: ['column-1', 'column-2', 'column-3'],
    column: {
      id: 'column-1',
      boardId: 'board-1',
      title: 'To do column',
      cardOrder: ['card-1', 'card-2', 'card-3'],
      cards: [
        {
          id: 'card-1',
          boardId: 'board-1',
          columnId: 'column-1',
          title: 'Title of Card 1',
          cover: null,
        },
        {
          id: 'card-1',
          boardId: 'board-1',
          columnId: 'column-1',
          title: 'Title of Card 2',
          cover: null,
        },
        {
          id: 'card-3',
          boardId: 'board-1',
          columnId: 'column-1',
          title: 'Title of Card 3',
          cover: null,
        },
        {
          id: 'card-4',
          boardId: 'board-1',
          columnId: 'column-1',
          title: 'Title of Card 4',
          cover: null,
        },
      ],
    },
  },
}
