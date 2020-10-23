import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import PropTypes from 'prop-types';

const UserBar = ({ loginEmail, onLogout }) => (
  <div>
    {loginEmail && (
      <>
        <h2>{loginEmail}</h2>
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </>
    )}

    {!loginEmail && <h2>Welcome, please login before to use</h2>}
  </div>
);

UserBar.propTypes = {
  loginEmail: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loginEmail: authSelectors.getLoginEmail(state),
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserBar,
);
