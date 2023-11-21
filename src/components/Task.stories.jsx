import React from "react";
import Task from "./Task.jsx";

export default {
  component: Task, // 타겟 컴포넌트
  title: "Components/Task", // 사이드바에 표시되는 스토리 분류명,
  tags: ["autodocs"], // 스토리 설명할 수 있는 auto Docs 생성
};

// 컴포넌트를 반환하는 템플릿 함수를 만들어서 재사용함
const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
