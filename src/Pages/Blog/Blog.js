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

        <div className="my-10">
          <h2 className={h2}>
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            Are you facing difficulties in making loading spinners or a pop-up
            appears at the right time? It can be because of an unmanaged state
            in React. A state is a JavaScript object. It stores a component's
            dynamic data and determines the component's behavior. In other
            words, it is the interface between any data of changes backend or
            local and the representation of this data with UI elements in the
            frontend.
          </p>
          <h4 className="text-2xl mt-4">Local state:</h4>
          <p>
            Local state in React allows you to instantiate a plain JavaScript
            object for a component and hold information that might affect its
            rendering. Local state is managed in isolation within the component
            without other components affecting it.
          </p>
          <h4 className="text-2xl mt-4">Global state:</h4>
          <p>
            Role of the global state. In React, originally, the state is held
            and modified within the same React component . In most applications,
            different components may need to access and update the same state.
            This is achieved by introducing the global states in your app.
          </p>
          <h4 className="text-2xl mt-4">Server state:</h4>
          <p>
            React Query is a library created by Tanner Linsley specifically to
            manage server state and cache, it's defined as a thin cache layer
            with a simple API surface. The principle of the architecture of this
            library is the encapsulation of business logic by extracting the
            data fetching ceremony to custom hooks
          </p>
          <h4 className="text-2xl mt-4">URL state:</h4>
          <p>
            A state can be modified based on user action or network changes.
            Every time the state of an object changes, React re-renders the
            component to the browser. The state object is initialized in the
            constructor. The state object can store multiple properties
          </p>
        </div>

        <div className="my-10">
          <h2 className={h2}>
            Why you do not set the state directly in React.?
          </h2>
          <p>
            One should never update the state directly because If you update it
            directly, calling the setState() afterward may just replace the
            update you made. When you directly update the state, it does not
            change this. If you update it directly, calling the setState()
            afterward may just replace the update you made. When you directly
            update the state, it does not change this.state immediately.
            Instead, it creates a pending state transition, and accessing it
            after calling this method will only return the present value. You
            will lose control of the state across all components.
          </p>
        </div>

        <div className="my-10">
          <h2 className={h2}>What is a unit test.?</h2>
          <p>
            This is a type of testing which is done by software developers in
            which the smallest testable module of an application - like
            functions, procedures or interfaces - are tested to ascertain if
            they are fit to use.
            <b className="block">Unit Testing Example :</b> Unit testing is
            testing the smallest testable unit of an application. It is done
            during the coding phase by the developers. To perform unit testing,
            a developer writes a piece of code (unit tests) to verify the code
            to be tested (unit) is correct.
          </p>
        </div>

        <div className="my-10">
          <h2 className={h2}>Why should write unit tests.?</h2>
          <p>
            Unit testing ensures that all code meets quality standards before
            it's deployed. This ensures a reliable engineering environment where
            quality is paramount. Over the course of the product development
            life cycle, unit testing saves time and money, and helps developers
            write better code, more efficiently. Unit tests are also especially
            useful when it comes to refactoring or re-writing a piece a code. If
            you have good unit tests coverage, you can refactor with confidence.
            Without unit tests, it is often hard to ensure the you didn't break
            anything
          </p>
        </div>
      </div>
    </main>
  );
};

export default Blog;
