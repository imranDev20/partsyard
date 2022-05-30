import React from "react";

const Blog = () => {
  const h2 = [`text-3xl mb-3 font-medium`];
  return (
    <main>
      <h1 className="text-4xl text-center font-semibold mt-10">Blog</h1>
      <div className="container mx-auto px-10 mt-16">
        <div>
          <h2 className={h2}>
            How will you improve the performance of a React Application?
          </h2>
          <p>
            came to know that all of these are happening because of the
            unnecessary re-rendering of components. A component re-rendered like
            50 times just by doing a page refresh and no interaction on one
            page! To optimize React rendering, you need to make sure that
            components receive only necessary props. It will let you control the
            CPU consumption and avoid over-rendering unnecessary features. The
            solution is to create a functional component that will collect all
            props and redistribute them to other component Keeping component
            state local where necessary. Memoizing React components to prevent
            unnecessary re-renders. Code-splitting in React using dynamic
            import() Windowing or list virtualization in React. Lazy loading
            images in React.
          </p>
        </div>

        <div className="my-10">
          <h2 className={h2}>How does prototypical inheritance work?</h2>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the Prototype of an object,
            we use Object. getPrototypeOf and Object In a class-based model, you
            have Classes, which are represented by the triple Parents,
            Variables, Methods”. Where: Parents is the list of classes you're
            extending. Classes may only extend other classes; Variables is the
            number of variable slots that instances will have. For example, a
            “class Point2d(int x, int y) ” has 2 instance variables; Methods is
            a table of “name → function” that describes which services each
            instance of the class will support;
          </p>
        </div>
      </div>
    </main>
  );
};

export default Blog;
