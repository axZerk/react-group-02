import * as React from 'react';

type Props = {
  options: Array<string>,
  value: string,
  onChange: (value: string) => mixed,
};

const CategorySelector: React.StatelessFunctionalComponent<Props> = ({
  options,
  value,
  onChange,
}: Props) => (
  <select
    style={{
      fontSize: 20,
    }}
    value={value}
    onChange={(event: SyntheticEvent<HTMLSelectElement>) => {
      (event.currentTarget: HTMLSelectElement);

      onChange(event.currentTarget.value);
    }}
  >
    {options.map((o: string) => (
      <option key={o} value={o}>
        {o}
      </option>
    ))}
  </select>
);

export default CategorySelector;
