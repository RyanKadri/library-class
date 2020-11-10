
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 32,
        userSelect: "text"
    }
}))

const code = `
fetch("https://some-url.com")
    .then(response => { return response.json() })
    .then(response => { console.log(response) })
`.trim();

const items = [
    "fetch lets you make requests to a server",
    "Lets you specify URL, method, request body, headers, etc.",
    'Gives back the response in terms of a "Promise"',
    "It is a low-level function so you have to manually parse the request"
];

export function FetchExample({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="fetch" context={context} Content={
            <>
                <InfoList items={ items } />
                <CodeBlock language="js" code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}