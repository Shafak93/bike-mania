import React from 'react';
import { Figure } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container mt-4'>
            <Figure>
                <blockquote class="blockquote">
                   <p>
                   JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.JavaScript follows the standard of JavaScript when writing programs on the other hand Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.JavaScript is mainly used to create front end web applications or develop client-side on the other hand Node.js is used on the back end development that is server-side development.JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.
                   </p>
                </blockquote>
                <figcaption class="blockquote-footer text-primary">
                Difference between javascript and Node.js
                </figcaption>
             </Figure>
            <Figure>
                <blockquote class="blockquote">
                   <p>
                   MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily. There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. That's why we use nodeJS.
                   </p>
                </blockquote>
                <figcaption class="blockquote-footer text-primary">
                When should use nodejs and when should use mongodb
                </figcaption>
             </Figure>
            <Figure>
                <blockquote class="blockquote">
                   <p>
                   SQL databases are table-based, while NoSQL databases are non-relational.SQL database contains structured data and can perform an analysis using a relational model. A NoSQL database contains unstructured data, which means it cannot be analyzed through predefined models.In SQL database data is easy to search and analyze, much like data that is laid out in a table with columns but in NoSQL models make sense for less structured data sets because it doesn't rely on a predefined model to analyze the data.Most SQL databases are vertically scalable on the other hand NoSQL databases are horizontally scalable.
                   </p>
                </blockquote>
                <figcaption class="blockquote-footer text-primary">
                Difference between SQL and NOSQL
                </figcaption>
             </Figure>
        </div>
    );
};

export default Blog;