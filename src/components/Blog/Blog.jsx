import React from 'react';

const Blog = () => {
    return (
        <div className='my-14 font-extrabold'>
            <h2 className='text-success mb-9 text-4xl text-center bg-slate-500 p-6 rounded'>Blog</h2>

            <div className='bg-amber-800 my-5 p-6 rounded ease-out'>
                <h2 className='text-amber-300 text-3xl'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className='my-5'>Im can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code.</p>
                <p>Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them</p>
            </div>

            <div className='bg-amber-800 my-5 p-6 rounded'>
                <h2 className='text-amber-300 text-3xl'>Compare SQL and NoSQL databases?</h2>
                <p className='my-5'>Structured Query Language (SQL) ::: is a programming language that allows both technical and non-technically-minded users to query, manipulate, and change data in a relational database.

                    Organized into columns and rows within a table, SQL databases use a relational model that work best with well-defined structured data, such as names and quantities, in which relations exist between different entities. Within a SQL database, tables are linked through "foreign keys" that form relations between different tables and fields, such as customers and orders or employees and departments.</p>
                <p>NoSQL databases ::: are non-relational databases that store data in a manner other than the tabular relations used within SQL databases. While SQL databases are best used for structured data, NoSQL databases are suitable for structured, semi-structured, and unstructured data. As a result, NoSQL databases don't follow a rigid schema but instead have more flexible structures to accommodate their data-types. Furthermore, instead of using SQL to query the database, NoSQL databases use varying query languages (some don't even have a query language).</p>
            </div>
            <div className='bg-amber-800 my-5 p-6 rounded'>
                <h2 className='text-amber-300 text-3xl'>What is express js? What is Nest JS?</h2>
                <p className='my-5'>NestJS is a NodeJS framework that is used for building scalable server-side applications. With NestJS, you can have readable and predictable code, all thanks to TypeScript which makes it more popular. It is an extensible, progressive and versatile framework. In spite of API being stable in the case of ExpressJS, it cannot handle async/await functions. To avoid such issues, NestJS has taken place.

                    And, ExpressJS is a fast NodeJS framework used to build web and mobile applications.</p>
            </div>

            <div className='bg-amber-800 my-5 p-6 rounded'>
                <h2 className='text-amber-300 text-3xl'>What is MongoDB aggregate and how does it work?</h2>
                <p className='my-5'>MongoDB method for performing advanced data processing and analysis operations on collections.
                    It takes an array of stages as input, where each stage represents a specific data transformation or analysis operation.
                    Stages are executed in order, passing the resulting data from one stage to the next.
                    Common stages include filtering ($match), grouping ($group), projecting ($project), and sorting ($sort).
                    Aggregation allows for complex data manipulations and provides a flexible way to extract insights from MongoDB collections.</p>
            </div>
        </div>
    );
};

export default Blog;