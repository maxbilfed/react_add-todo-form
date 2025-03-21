import usersFromServer from '../../api/users';
import { Task, User } from '../../services/types';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Task;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const taskUser: User = usersFromServer.find(
    user => user.id === todo.userId,
  ) || {
    id: 0,
    name: 'Unknown User',
    username: 'unknown',
    email: 'unknown@example.com',
  };

  return (
    <article
      id={`${todo.id}`}
      data-id={todo.id}
      className={classNames('TodoInfo', {
        'TodoInfo--completed': todo.completed,
      })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={taskUser} />
    </article>
  );
};
