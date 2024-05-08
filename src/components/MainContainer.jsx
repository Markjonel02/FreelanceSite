import PropTypes from "prop-types";

const MainContainer = ({ children }) => <>{children}</>;

export default MainContainer;

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
