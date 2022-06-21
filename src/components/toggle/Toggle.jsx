import React from 'react';
import { Switch } from '@headlessui/react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Toggle(props) {
  const { enabled, label } = props;
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    if (enabled) setActive(enabled);
  }, [enabled]);

  return (
    <Switch
      checked={active}
      onChange={setActive}
      className={classNames(
        active ? 'bg-indigo-600' : 'bg-gray-200',
        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
      )}
    >
      <span className="sr-only">{label}</span>
      <span
        aria-hidden="true"
        className={classNames(
          active ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
        )}
      />
    </Switch>
  );
}

Toggle.defaultProps = {
  enabled: false,
  label: '',
};

Toggle.propTypes = {
  enabled: PropTypes.bool,
  label: PropTypes.string,
};

export default Toggle;
export { Toggle };
