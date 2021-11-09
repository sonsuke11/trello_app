export const initialData = {
  boards: [
    {
      id: 'board-1',
      columnOrder: ['column-3', 'column-1', 'column-2'],
      columns: [
        {
          id: 'column-1',
          boardId: 'board-1',
          title: 'To do column',
          cardOrder: ['card-3', 'card-2', 'card-1', 'card-4'],
          cards: [
            {
              id: 'card-1',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of Card 1',
              cover:
                'https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80',
            },
            {
              id: 'card-2',
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
        {
          id: 'column-2',
          boardId: 'board-1',
          title: 'Inprogress column',
          cardOrder: ['card-5', 'card-6', 'card-7'],
          cards: [
            {
              id: 'card-5',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of Card 5',
              cover: null,
            },
            {
              id: 'card-6',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of Card 6',
              cover: null,
            },
            {
              id: 'card-7',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of Card 7',
              cover: null,
            },
          ],
        },
        {
          id: 'column-3',
          boardId: 'board-1',
          title: 'Done column',
          cardOrder: ['card-8', 'card-9', 'card-10'],
          cards: [
            {
              id: 'card-8',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of Card 8',
              cover: null,
            },
            {
              id: 'card-9',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of Card 9',
              cover: null,
            },
            {
              id: 'card-10',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of Card 10',
              cover: null,
            },
          ],
        },
      ],
    },
  ],
}
