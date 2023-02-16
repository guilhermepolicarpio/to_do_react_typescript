import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import styles from './App.module.css'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ITask } from "./interfaces/Task"
import Modal from './components/Modal';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if (display) {
      modal!.classList.remove("hide");
    }
    else {
      modal!.classList.add("hide");
    }
  }

  const editTask = (): void => {
    hideOrShowModal(true)
  }

  return (
    <div>
      <Modal>
        <TaskForm btnText="Task edit" taskList={taskList} />
      </Modal>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>What will you do ?</h2>
        </div>
        <TaskForm
          btnText={"Create task"}
          taskList={taskList}
          setTaskList={setTaskList} />
        <div>
          <h2>Your tasks</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default App;
