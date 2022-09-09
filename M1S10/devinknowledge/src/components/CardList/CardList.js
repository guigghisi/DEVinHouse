import Proptypes from "prop-types";
export default function CardList({ children }) {
  return <div>{children}</div>;
}

CardList.propTypes = {
  children: Proptypes.node.isRequired,
};
