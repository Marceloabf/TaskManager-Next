/* eslint-disable no-undef */
type TypedColumn = 'todo' | 'inprogress' | 'done'

interface Image {
  bucketId: string
  fileId: string
}

interface Todo {
  $id: string
  $createdAt: string
  title: string
  status: TypedColumn
  image?: Image
}
interface Column {
  id: TypedColumn
  todos: Todo[]
}
export interface Board {
  columns: Map<TypedColumn, Column>
}
