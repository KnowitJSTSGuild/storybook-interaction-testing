import React from "react";

/**
 * Provides access to (totally real) API functions.
 * Our test will mainly mock this hook's exports and verify they were called.
 */
const useApi = () => {
  const [success, setSuccess] = React.useState<boolean>(false);

  const getStuff = async (): Promise<string[]> => {
    setSuccess(true);
    return ['yes', 'this', 'is', 'dog']; // Unused return value
  }

  return {getStuff, success}
}

export default useApi;