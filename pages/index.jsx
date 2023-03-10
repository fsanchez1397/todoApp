import Header from "@/components/Header";
import TaskList from "@/components/TaskList";
import Head from "next/head";
import { useState, useRef } from "react";

export default function Home() {
  const [taskList, setTaskList] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);
  const task = useRef("");

  const onInputTask = (e) => {
    task.current = e.target.value;
  };
  //Submit and Delete buttons
  const onSubmitTask = (e) => {
    e.preventDefault();
    document.getElementById("taskInput").value = "";
    const newTask = { taskName: task.current, notes: "", isUpdated: true };
    setTaskList((prev) => [...prev, newTask]);
  };
  const onDeleteHandler = (deletedTask) => {
    // Updates current TaskList
    // Adds DeletedItem to deletedTasks array
    setTaskList((prev) => {
      const newTaskList = [...prev];
      const indexOfDeletedTask = newTaskList.indexOf(deletedTask);
      newTaskList.splice(indexOfDeletedTask, 1);
      return newTaskList;
    });
    // Store Deleted Tasks
    setDeletedTasks((prev) => {
      console.log(deletedTask);
      return [...prev, deletedTask];
    });
  };
  const addNoteHandler = ({ taskName, notes, index }) => {
    //add to notes prop in task obj
    setTaskList((prev) => {
      const updatedTaskList = [...prev];
      const indexOfTask = updatedTaskList.findIndex(
        (tasks) => tasks.taskName === taskName
      );
      updatedTaskList[indexOfTask].notes = notes;
      updatedTaskList[indexOfTask].isUpdated = true;
      console.log(updatedTaskList);
      return [...updatedTaskList];
    });
  };
  const onUpdateNotes = (isUpdated, index) => {
    setTaskList((prev) => {
      const newArr = prev;
      newArr[index].isUpdated = isUpdated;
      console.log(newArr);
      return [...newArr];
    });
  };
  // console.log(taskList);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <h1 className="text-center mt-4 text-lg text-red-700">
          Add your tasks
        </h1>
        <form
          onSubmit={onSubmitTask}
          className="w-[600px] mx-auto flex justify-center my-4 h-20 bg-blue-300"
        >
          <input
            type="text"
            id="taskInput"
            placeholder="Add a task"
            className="outline-none bg-red-200 border-solid border-4 px-2 text-lg"
            onChange={onInputTask}
            ref={task}
          />
        </form>
        {/* If tasks > 0 show list */}
        <section>
          {taskList.length > 0 && (
            <TaskList
              taskList={taskList}
              onDelete={onDeleteHandler}
              onAddNote={addNoteHandler}
              onUpdateNotes={onUpdateNotes}
            />
          )}
        </section>
        <section>{/* {deletedTasks.length > 0 && DeletedTasksList} */}</section>
      </main>
    </>
  );
}
