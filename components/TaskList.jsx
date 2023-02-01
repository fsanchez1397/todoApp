import { useRef, useState } from "react";
function TaskList({ taskList, onDelete, onAddNote, onUpdateNotes }) {
  const notes = useRef("");
  return (
    <section className="bg-red-300 mx-auto max-w-2xl">
      <div className="max-w-2xl flex flex-col  ">
        {taskList?.map((taskItem, index) => {
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
                    index: index,
                  });
                }}
                className="flex"
              >
                <input
                  ref={notes}
                  onChange={(e) => {
                    notes.current = e.target.value;
                    const notesUpdated = notes.current === taskItem.notes;
                    notesUpdated && onUpdateNotes(true, index);
                    if (taskItem.notes !== notes.current) {
                      if (taskItem.isUpdated === true) {
                        onUpdateNotes(false, index);
                      }
                    }
                  }}
                  onFocus={(e) => {
                    notes.current = e.target.value;
                  }}
                  type="text"
                  placeholder="Enter some notes"
                  className="outline-none px-2 flex-grow"
                />
                <p
                  className={`${
                    taskItem.isUpdated ? "bg-green-400" : "bg-red-400"
                  } w-32`}
                >
                  updated / not
                </p>
              </form>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TaskList;
