import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import PropTypes from 'prop-types';

function UserBar({ loginEmail, onLogout }) {
  return (
    <>
      {loginEmail && (
        <div>
          <h2>{loginEmail}</h2>
          <button type="button" onClick={onLogout}>
            Logout
          </button>
        </div>
      )}

      {!loginEmail && (
        <div>
          <h2>Welcome, please login before to use</h2>
        </div>
      )}
    </>
  );
}

UserBar.propTypes = {
  loginEmail: PropTypes.string,
};

const mapStateToProps = state => ({
  loginEmail: authSelectors.getLoginEmail(state),
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserBar,
);
