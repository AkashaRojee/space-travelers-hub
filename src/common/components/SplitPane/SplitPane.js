import PropTypes from 'prop-types';
import styles from './SplitPane.module.scss';

const SplitPane = ({ layout, first, second }) => (
  <div className={`${layout.componentStyles.pane} ${styles[layout.pane]}`}>
    <div className={`${layout.componentStyles.first} ${styles[layout.first]}`}>
      {first}
    </div>
    <div className={`${layout.componentStyles.second} ${styles[layout.second]}`}>
      {second}
    </div>
  </div>
);

SplitPane.propTypes = {
  layout: PropTypes.shape({
    pane: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    second: PropTypes.string.isRequired,
    componentStyles: PropTypes.objectOf(Symbol).isRequired,
  }).isRequired,
  first: PropTypes.objectOf(Symbol).isRequired,
  second: PropTypes.objectOf(Symbol).isRequired,
};

export default SplitPane;
