import React from 'react';

const Blog = () => {
    return (
        <section className="bg-gray-700 text-gray-100 p-20">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">

                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold text-2xl text-cyan-400">What are the different ways to manage a state in a React application?.</h3>
                        <p className="mt-1 dark:text-gray-400">1: Local state</p>
                        <p className="mt-1 dark:text-gray-400">2: Global state</p>
                        <p className="mt-1 dark:text-gray-400">3: Server state</p>
                        <p className="mt-1 dark:text-gray-400">4: URL state</p>

                    </div>
                    <div>
                        <h3 className="font-semibold text-2xl text-cyan-400">How does prototypical inheritance work ?</h3>
                        <p className="mt-1 dark:text-gray-400">When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.</p>

                    </div>
                    <div>
                        <h3 className="font-semibold text-2xl text-cyan-400">What is a unit test? Why should we write unit tests?</h3>
                        <p className="mt-1 dark:text-gray-400">What is a unit test : A unit test verifies the behavior of a unit of software in the system. It verifies whether a small and isolated piece of the codebase called “unit” behaves as the developer intended.Unit tests verify the smallest parts or components of an application by comparing their actual behavior with the expected behavior in complete isolation. Here, “complete isolation” means that, during unit testing, devs do not connect the application with external dependencies such as databases, the filesystem, or HTTP services. This allows unit tests to be fast and stable since they won’t fail due to problems integrating with those external services.</p>

                        <p className="mt-1 dark:text-gray-400">Why should we write unit tests : Usually, developers write unit tests first, then write the software code. This approach is known as test-driven development (TDD). In TDD, the requirements are turned into specific test cases, then the software is improved to pass the new tests. In the case of unit tests, it allows for the modification of code without affecting the functionality of other units or the software in its entirety. This makes the job easier for developers as the bugs are easy to locate at this stage, which saves time and money.Also, within unit test environments, the individual modules of a product become isolated from one another and have their own area of responsibility. In this scenario, tests are more reliable because they are run in a contained environment. The code too, because of said reliability, becomes reliable.</p>

                    </div>
                    <div>
                        <h3 className="font-semibold text-2xl text-cyan-400">React vs. Angular vs. Vue? ?</h3>
                        <p className="mt-1 dark:text-gray-400"> Angular: Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications.</p>

                        <p className="mt-1 dark:text-gray-400">React : One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course. With React.js, you handle the markup and the logic in the same file, which means you can output variables in a view component (JSX). React offers a type of mobile solution for applications called React-Native.</p>
                        <p className="mt-1 dark:text-gray-400">Vue: Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it’s simple to use and connect with other libraries or applications. This framework’s fast learning angle is almost a trademark. It’s a flexible framework that may be used as a library or a full-fledged framework for developing large web applications.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;