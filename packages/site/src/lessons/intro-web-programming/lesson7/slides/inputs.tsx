
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 26,
        userSelect: "text",
        border: "solid #444 2px",
        marginTop: 16
    }
}))

const slideItems = [
    "HTML has some elements for user inputs",
    "The <input>, <button>, and <select> are probably the most common",
    "JavaScript can read the value of inputs"
];

const myHTML = `
<input type="text" id="my-textbox">
<input type="checkbox" id="my-checkbox">
`

const code = `
const myTextbox = document.querySelector("#my-textbox");
const myCheckbox = document.querySelector("#my-checkbox");

const userInputText = myTextbox.value;
const isCheckboxChecked = myCheckbox.checked;

if(isCheckboxChecked) {
    // ...
}
`.trim();

export function UserInputElements({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="User Inputs" context={context} Content={
            <>
                <InfoList items={ slideItems }></InfoList>
                <CodeBlock language="html" code={ myHTML } className={ classes.code }></CodeBlock>
                <CodeBlock language="js" code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}