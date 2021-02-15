import React from 'react';
import './list.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '20px'
  },
  user: {
    textAlign: 'center',
    padding: '30px'
  }
}))

function List({userList, deleteUser, registered}) {
  const router = useHistory();
  const {id} = useParams()
  const classes = useStyles();
  const user = registered.find(el => +el.id === +id);
  return (
    <div className="list">
      <p className={classes.user}>{user.userName}</p>
      <ul className="items">
        {userList.map(user => (
          <li key={user.id} className="item">
            <div className="item__info">
              <p>{`${user.title || ''}`}</p>
              <p>{`${user.id} | ${user.userId}`}</p>
              <p>{`${user.completed}`}</p>
            </div>
            <div className="item__options">
              <div className="options">
                <Button
                  color="primary"
                  variant="outlined"
                  className={classes.button}
                  type="button"
                  onClick={() => router.push(`/edit/${user.id}`)}
                >
                  EDIT
                </Button>
                <Button
                  color="primary"
                  variant="outlined"
                  className="button"
                  type="button"
                  onClick={() => deleteUser(user._id)}
                >
                  DELETE
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
