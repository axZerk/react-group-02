import * as React from 'react';

type LoadingProps = {
  error: ?Error,
  timedOut: boolean,
  pastDelay: boolean,
  retry: Function,
};

const Loading: React.StatelessFunctionalComponent<LoadingProps> = ({
  error,
  timedOut,
  pastDelay,
  retry,
}: LoadingProps) => {
  if (error) {
    return (
      <div>
        Error! <button onClick={retry}>Retry</button>
      </div>
    );
  }

  if (timedOut) {
    return (
      <div>
        Taking a long time... <button onClick={retry}>Retry</button>
      </div>
    );
  }

  if (pastDelay) {
    return <div>Loading...</div>;
  }

  return null;
};

export default Loading;
