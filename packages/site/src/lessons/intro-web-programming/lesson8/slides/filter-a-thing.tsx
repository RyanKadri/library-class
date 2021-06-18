
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";
import code from "./filter-a-thing.md";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 26,
        userSelect: "text"
    }
}))

export function FilterThings({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Find a Thing" context={context} Content={
            <CodeBlock code={ code } className={ classes.code } />
        } />
    );
}

interface Props {
    context: PresentationContext
}