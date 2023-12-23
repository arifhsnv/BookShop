import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [getResponseData, setgetResponseData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setgetResponseData(responseData));
  }, [url]);

  return {
    getResponseData,
  };
}

export default useFetch;
