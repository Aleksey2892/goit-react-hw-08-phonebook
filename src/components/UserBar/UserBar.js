import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import PropTypes from 'prop-types';
import spyIcon from '../../icons/spy.svg';
import s from './UserBar.module.scss';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';
import '../animations.scss';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
});

const UserBar = ({ isLoginEmail, onLogout }) => {
  const sliceEmail = email => (email ? email.slice(0, 2).toUpperCase() : '');
  const classes = useStyles();

  return (
    <CSSTransition in={true} appear timeout={500} classNames="userbar">
      <div className={s.loginWrapper}>
        {isLoginEmail && (
          <>
            <Avatar classes={{ root: classes.root }}>
              {sliceEmail(isLoginEmail)}
            </Avatar>
            <h2 className={s.userEmail}>{isLoginEmail}</h2>
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              size="small"
              onClick={onLogout}
            >
              Logout
            </Button>
          </>
        )}

        {!isLoginEmail && (
          <>
            <h2 className={s.welcome}>
              Welcome, user!
              <img className={s.userIcon} src={spyIcon} alt="spy user" />
            </h2>
          </>
        )}
      </div>
    </CSSTransition>
  );
};

UserBar.propTypes = {
  isLoginEmail: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoginEmail: authSelectors.getLoginEmail(state),
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserBar,
);
