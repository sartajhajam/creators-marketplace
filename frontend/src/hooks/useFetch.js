import { useState, useEffect } from 'react';

/**
 * Custom hook for data fetching with loading and error states
 * @param {Function} fetchFunction - The async function that fetches data
 * @param {Array} dependencies - Optional array of dependencies to trigger refetch
 * @returns {Object} State object with data, loading, error, and refetch function
 */
function useFetch(fetchFunction, dependencies = []) {
  // Initialize state
  const [state, setState] = useState({
    data: null,
    loading: true, 
    error: null,
  });

  /**
   * Function to fetch data and update state
   */
  const fetchData = async () => {
    // Set loading state
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // Call the fetch function
      const data = await fetchFunction();
      // Update state with the fetched data
      setState({ data, loading: false, error: null });
    } catch (error) {
      // Update state with the error
      setState({ data: null, loading: false, error });
    }
  };

  // Fetch data when dependencies change
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  // Return state and refetch function
  return {
    ...state,
    refetch: fetchData,
  };
}

export default useFetch;