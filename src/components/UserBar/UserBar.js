import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
});

const UserBar = ({ isLoginEmail, onLogout }) => {
  const sliceEmail = email => (email ? email.slice(0, 2).toUpperCase() : '');
  const classes = useStyles();

  return (
    <div>
      {isLoginEmail && (
        <>
          <Avatar classes={{ root: classes.root }}>
            {sliceEmail(isLoginEmail)}
          </Avatar>
          <h2>{isLoginEmail}</h2>
          <button type="button" onClick={onLogout}>
            Logout
          </button>
        </>
      )}

      {!isLoginEmail && <h2>Welcome, please login before to use</h2>}
    </div>
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
