import PropTypes from 'prop-types';

function LogStatusBox(props) {
  let message;
  if(props.status === true){
    message = "Logged In";
  } else {
    message = 'Please Log In';
  }

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

LogStatusBox.propTypes = {
  status: PropTypes.bool,
};

LogStatusBox.defaultProps = {
  status: false,
};

export default LogStatusBox;