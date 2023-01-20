import useNavigation from '../hooks/use-navigation';

import classNames from 'classnames';

function Link({ to, children, className, activeClassName }) {
  const { currentPath, navigate } = useNavigation();

  const classes = classNames(
    'text-blue-500',
    className,
    to === currentPath && activeClassName
  );

  const handleClick = event => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={classes}>
      {children}
    </a>
  );
}

export default Link;
