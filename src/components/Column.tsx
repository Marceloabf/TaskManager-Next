import { Draggable, Droppable } from 'react-beautiful-dnd'
import { Todo, TypedColumn } from '../../typings'

type Props = {
  id: TypedColumn
  todos: Todo[]
  index: number
}
// eslint-disable-next-line no-unused-vars
const idToColumnText: { [key in TypedColumn]: string } = {
  todo: 'Afazeres',
  done: 'Finalizado',
  inprogress: 'Em andamento',
}

function Column({ id, todos, index }: Props) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Droppable droppableId={index.toString()} type="card">
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`p-2 rounded-2xl shadow-sm ${
                      snapshot.isDraggingOver ? 'bg-green-200' : 'bg-white/50'
                    }`}
                  >
                    <h2 className="flex justify-between font-bold text-xl p-2">
                      {idToColumnText[id]}{' '}
                      <span className="text-gray-500 bg-gray-200 rounded-full px-2 py-1 text-sm font-normal">
                        {todos.length}
                      </span>
                    </h2>
                    <div className="space-y-2">
                      {todos.map((todo, index) => {
                        return (
                          <h1 key={index}>teste</h1>
                          //   <Draggable
                          //     key={todo.$id}
                          //     index={index}
                          //     draggableId={todo.$id}
                          //   >
                          //     {(provided) => {
                          //       return (
                          //         <TodoCard
                          //           {...provided.draggableProps}
                          //           {...provided.dragHandleProps}
                          //           ref={provided.innerRef}
                          //         >
                          //           <Todo todo={todo} index={index} />
                          //         </TodoCard>
                          //       )
                          //     }}
                          //   </Draggable>
                        )
                      })}
                    </div>
                  </div>
                )
              }}
            </Droppable>
          </div>
        )
      }}
    </Draggable>
  )
}

export default Column
