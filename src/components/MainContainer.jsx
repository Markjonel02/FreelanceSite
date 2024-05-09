import PropTypes from "prop-types";

const MainContainer = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default MainContainer;

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
