import className from 'classnames';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outlined,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    'flex items-center px-3 py-1.5 border',
    {
      'border-blue-600 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-800 text-white': secondary,
      'border-green-600 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-500 text-white': warning,
      'border-red-600 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outlined,
      'text-blue-500': outlined && primary,
      'text-gray-900': outlined && secondary,
      'text-green-500': outlined && success,
      'text-yellow-400': outlined && warning,
      'text-red-500': outlined && danger,
    }
  );

  delete rest.className;

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1)
      return new Error(
        'Only 1 of primary, secondary, success, warning, danger can be true'
      );
  },
};

export default Button;
