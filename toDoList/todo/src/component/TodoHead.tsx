import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

interface TodoHeadProps {
  todos: {
    id: number;
    text: string;
    done: boolean;
  }[];
}

const TodoHead: React.FC<TodoHeadProps> = ({ todos }) => {
  const remainingTasks = todos.filter((todo) => !todo.done).length;

  return (
    <TodoHeadBlock>
      <h1>2024년 1월 25일</h1>
      <div className="day">목요일</div>
      <div className="tasks-left">할 일 {remainingTasks}개 남음</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
