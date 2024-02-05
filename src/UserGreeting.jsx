// To learn Conditional Rendering
import React from "react";
import PropTypes from "prop-types";

export default function UserGreeting(props) {
  return props.isLoggedIn ? (
    <div>
      <h1>Welcome {props.username}</h1>
      <p>You are logged in</p>
    </div>
  ) : (
    <h1>Please Login</h1>
  );
}
UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  name: PropTypes.string,
};
