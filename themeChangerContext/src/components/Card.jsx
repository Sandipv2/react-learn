import React from "react";

function Card() {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        MERN Stack Technology
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        The MERN stack is a popular JavaScript-based technoy stack consisting of
        MongoDB, Express.js, React, and Node.js. It enables developers to build
        scalable, full-stack web applications with a seamless flow between
        front-end and back-end development.
      </p>
    </div>
  );
}

export default Card;
