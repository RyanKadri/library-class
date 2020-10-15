
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
        border: "solid 2px #444"
    }
}))

const slideItems = [
    <>The global <code>document</code> object is an entrypoint to the DOM</>,
    'Gives you global properties and methods that let JavaScript ask "questions" about the page',
    'Lets you create new elements "from scratch"',
    "Gives methods to access elements on the page"
];

const code = `
const tabTitle = document.title;
const currentUrl = document.location.href;
const newHeading = document.createElement("h1");
`.trim();

export function DocumentObject({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Document Object" context={context} Content={
            <>
                <InfoList items={ slideItems }></InfoList>
                <CodeBlock language="js" code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}