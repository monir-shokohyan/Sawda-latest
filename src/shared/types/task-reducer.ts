export interface Task {
  id: number
  title: string
}

export interface Column {
  [key: string]: Task[]
  todo: Task[]
  inprogress: Task[]
  done: Task[]
}

export interface State {
  columns: Column
  loading: boolean
  error: Error | null
}

export interface Action {
  type: string
  payload?: any
}
