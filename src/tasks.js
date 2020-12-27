import React, { useState } from "react";
import "boxicons";

const Tasks = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  const deltask = (key) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== key;
      })
    );
  };
  const delpro = (key) => {
    setProgress(
      progress.filter((key) => {
        return progress.id !== key;
      })
    );
  };

  return (
    <>
      <div className="tasks">
        <input
          type="text"
          placeholder="To-do tasks"
          className="tinput"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />

        <button
          onClick={() => {
            console.log(tasks);
            setTasks([
              ...tasks,
              { id: new Date().getTime().toString(), todo: task },
            ]);
            console.log(tasks);
          }}
        >
          Add new
        </button>
        {tasks.map((task) => {
          return (
            <>
              <div className="tcard" key={task.id}>
                <p>{task.todo}</p>
                <div className="tbuttons">
                  <button onClick={() => deltask(task.id)}>&nbsp;Delete 🗑</button>
                  <button
                    onClick={() => {
                      let personname = prompt("What's your name?");
                      setProgress((progress) => {
                        return [
                          ...progress,
                          {
                            id: task.id,
                            todo: task.todo,
                            person: personname,
                          },
                        ];
                      });
                      deltask(task.id);
                      console.log(progress);
                    }}
                  >
                    &nbsp;Start💻
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="progress">
        <h1>In progress 🤖...</h1>
        {progress.map((p) => {
          return (
            <>
              <div className="progressmain">
                <div className="tcard pcard" key={p.id}>
                  <p>{p.todo}</p>
                  <div className="tbuttons">
                    <button
                      onClick={() => {
                        setTasks([
                          ...tasks,
                          { id: new Date().getTime().toString(), todo: p.todo },
                        ]);
                        setProgress(
                          progress.filter((pro) => {
                            return pro.id !== p.id;
                          })
                        );
                      }}
                    >
                      Return 🛌 &nbsp;
                    </button>
                    <button
                      onClick={() => {
                        setCompleted([
                          ...completed,
                          {
                            id: p.id,
                            todo: p.todo,
                            person: p.person,
                            time: new Date().toLocaleString(),
                          },
                        ]);
                        setProgress(
                          progress.filter((pro) => {
                            return pro.id !== p.id;
                          })
                        );
                      }}
                    >
                      &nbsp;Complete &#10004; &nbsp;
                    </button>
                  </div>
                </div>
                <p style={{ padding: ".3rem" }}>
                  {p.person} started working on this
                </p>
              </div>
            </>
          );
        })}
      </div>

      <div className="completed">
        <h1>Completed 😅</h1>
        {completed.map((t) => {
          return (
            <div className="progressmain">
              <div className="tcard ccard" key={t.id}>
                <p>{t.todo}</p>
                <div className="tbuttons"></div>
              </div>
              <p style={{ padding: ".3rem" }}>
                {t.person} completed this at {t.time}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { Tasks };
