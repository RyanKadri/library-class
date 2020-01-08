
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const slideItems = [
    "Javascript has conditional statements",
    `Cares about "truthiness" of a value`,
];

const code = `
if (someNumber < 123) {
    // Do a thing
} else if (something > 200) {
    // Do something else
} else {
    // Do something else
}

const a = 123;
if (a) {
    // Do a thing
}
`.trim();

export function ConditionalsExample({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Conditionals" context={context} Content={
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