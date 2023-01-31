import { useRef } from "react";
function TaskList({ taskList, onDelete, onAddNote }) {
  const notes = useRef("");
  return (
    <section className="bg-red-300 mx-auto max-w-2xl">
      <div className="max-w-2xl flex flex-col  ">
        {taskList?.map((taskItem) => {
          return (
            <div key={taskItem.taskName}>
              <div className=" flex justify-between p-2 border-b-2 border-gray-600">
                <p>Task: {taskItem.taskName}</p>
                <div className="flex justify-evenly w-48 space-x-1">
                  <button
                    className="flex-grow border-x-2 border-gray-600"
                    onClick={() => {
                      onDelete(taskItem);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onAddNote({
                    taskName: taskItem.taskName,
                    notes: notes.current,
                  });
                }}
                className="flex"
              >
                <input
                  ref={notes}
                  onChange={(e) => (notes.current = e.target.value)}
                  onFocus={(e) => (notes.current = e.target.value)}
                  type="text"
                  placeholder="Enter some notes"
                  className="outline-none px-2 flex-grow"
                />
              </form>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TaskList;
