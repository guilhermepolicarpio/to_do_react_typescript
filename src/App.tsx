import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import styles from './App.module.css'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ITask } from "./interfaces/Task"

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  return (
    <div>
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
           />
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default App;
