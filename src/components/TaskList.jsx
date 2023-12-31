import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";

/**
 * 설명을 적고싶으면 컴포넌트 위에다가 적으면 됨
 * - 이렇게 적고 더 자세히 적고싶을 때는 MDX를 이용하자!
 */
export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const events = {
    onPinTask,
    onArchiveTask,
  };
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return (
      <div className="list-items" data-testid="loading" key={"loading"}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items" key={"empty"} data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === "TASK_PINNED"),
    ...tasks.filter((t) => t.state !== "TASK_PINNED"),
  ];
  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  /** 체크 여부 값 */
  loading: PropTypes.bool,
  /** list 데이터 */
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  /** pin 클릭했을때 실행 함수 */
  onPinTask: PropTypes.func,
  /** 활성화 됐을때 실행 함수 */
  onArchiveTask: PropTypes.func,
};

TaskList.defaultProps = {
  loading: false,
};
