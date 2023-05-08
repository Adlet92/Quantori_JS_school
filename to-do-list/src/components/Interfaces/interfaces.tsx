export interface PostItemProps{
    id?: number,
    title: string,
    dateValue: string,
    completed: boolean,
    remove?: (id: number) => void
}

export interface PostListProps{
  titleList: string,
  posts: PostItemProps[],
  remove?: (id: number) => void,
  isCompleted: boolean;
}

export interface PropsSearch {
    filter: {
      query: string;
    },
    setFilter: (filter: { query: string }) => void,
    setModal: () => void;
  }

export interface PostFormProps {
    create: (post: PostItemProps) => void,
    setVisible: (visible: boolean) => void;
  }

export interface WeatherData {
    current: {
        temp_c: number;
        condition: {
          icon: string;
        };
      },
    location:{
        name:string
    }
  }
  