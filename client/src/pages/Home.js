import React from "react";

function Paragraph(props) {
    return (
        <p className="mx-auto leading-relax text-base mb-4">
        {props.text}
        </p>
    );
}
const Home = () => {
    return (
    <div className="mb-20">
        <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-20 text-gray-900">welcome abroad 🚀</h1> 
        <Paragraph text ="React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.."/>
        <Paragraph text ="React code is made of entities called components. These components are reusable and must be formed in the SRC folder following the Pascal Case as its naming convention (capitalize camelCase). Components can be rendered to a particular element in the DOM using the React DOM library. When rendering a component, one can pass the values between components through props."/>
        <Paragraph text ="React adheres to the declarative programming paradigm. Developers design views for each state of an application, and React updates and renders components when data changes. This is in contrast with imperative programming."/>
    </div>
    )}
export default Home;