import * as React from 'react';

type ButtonProps = {
  label: string,
  type?: string,
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => mixed,
};

const Button: React.StatelessFunctionalComponent<ButtonProps> = ({
  label,
  type = 'button',
  onClick = () => null,
}: ButtonProps) => (
  <button
    style={{
      margin: '0 4px',
      padding: '8px 32px',
      fontSize: 16,
      fontWeight: 500,
      textTransform: 'uppercase',
      cursor: 'pointer',
      borderRadius: 2,
    }}
    type={type}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
