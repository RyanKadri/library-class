
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../presenter-core/src/slide-components/code-block";
import { ContentSlide } from "../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 32,
        userSelect: "text"
    }
}))

const code = `
function processFile() {
    const fileData = readFile("budget.txt", checkExpenses);
}

function checkExpenses() {
    const largestExpense = determineLargestExpense(fileData);
    updateNetwork(largestExpense, printSuccess);
}

function printSuccess() {
    console.log("Done processing.")
}
`.trim();

export function NonBlockingCode({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Non-Blocking Code" context={context} Content={
            <CodeBlock language="js" code={ code } className={ classes.code }></CodeBlock>
        } />
    );
}

interface Props {
    context: PresentationContext
}