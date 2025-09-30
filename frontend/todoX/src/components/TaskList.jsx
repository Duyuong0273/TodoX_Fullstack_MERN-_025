import React from "react";
import TaskEmptyState from "./TaskEmptyState";
import TaskCard from "./TaskCard";

const TaskList = () => {
  let filter = "all";
  const filteredTasks = [
    {
      _id: "1",
      title: "Hoc react",
      completeAt: null,
      createAt: new Date(),
    },
    {
      _id: "2",
      title: "Hoc js",
      completeAt: new Date(),
      createAt: new Date(),
    },
  ];

  if(!filteredTasks || filteredTasks.length === 0) {
    return <TaskEmptyState filter={filter}/>
  }
  return <div className="space-y-3">
    {filteredTasks.map((task, index) => (
      <TaskCard
      key={task.id ?? index}
      task={task}
      index={index}/>
    ))}
  </div>;
};

export default TaskList;
