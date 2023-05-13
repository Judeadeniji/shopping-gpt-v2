import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";

const useFetch = (url) => {
  const { data, setData, isLoading, setIsLoading, error, setError } =
    useContext(ProductContext);
  async function getData(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      const message = error.message ? error.message : "Something went wrong";
      setError(message);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getData(url);
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
