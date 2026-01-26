// Notes about creating your own React components
// - Export a function as the default
// - Name the function and the file in TitleCase
// - Your function should return JSX

import NewConcept from './NewConcept';
import ComponentWrapper from './ComponentWrapper';

export default function Hello() {
    const finalConcept = "How to wrap components for styling.";
    return <div>
        <p>In this demo we will learn:</p>
        <ul>
            <ComponentWrapper textColor="blue">
                <NewConcept concept="How to create components"/>
                <NewConcept concept="How to import components"/>
                <NewConcept concept="How to use props in a component"/>
                <NewConcept concept={finalConcept}/>
            </ComponentWrapper>
        </ul>
    </div>
}