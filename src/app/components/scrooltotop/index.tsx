"use client";
import React, { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, -220);
  }, []);
  return null;
}
