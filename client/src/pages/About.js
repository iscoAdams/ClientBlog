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
        <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900 mb-20">About</h1> 
        <Paragraph text ="Magna consequat dolor commodo cillum sit ea qui Lorem nisi est duis dolore sint. Amet qui consequat amet cillum laboris nisi amet et cupidatat proident sit consequat nisi. Reprehenderit enim Lorem esse incididunt proident magna est aute. Sunt excepteur minim consequat culpa id esse commodo eiusmod. Ipsum labore Lorem culpa in et do enim incididunt ut pariatur anim elit dolor."/>
        <Paragraph text ="Ut non adipisicing elit cupidatat elit aliqua veniam ex tempor exercitation reprehenderit nostrud proident. Ipsum consequat esse Lorem ipsum. Voluptate aute ut id est ipsum. Labore minim consectetur nostrud ex. Dolore voluptate ut anim anim aute voluptate esse consequat."/>
        <Paragraph text ="Consectetur do anim culpa aute velit fugiat. Quis veniam laboris non quis sit occaecat. Minim dolore nulla fugiat nisi laborum minim in ipsum cupidatat et in ut dolore commodo. Ullamco magna enim minim sit incididunt esse laborum do sunt dolor elit aliqua duis adipisicing. Ullamco non ea ad exercitation veniam Lorem velit nulla cupidatat minim cillum exercitation ea adipisicing."/>
    </div>
    )}
export default Home;