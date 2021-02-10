import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";
import gherkin from "highlight.js/lib/languages/gherkin";
import java from "highlight.js/lib/languages/java";
import json from "highlight.js/lib/languages/json";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import "highlight.js/styles/lightfair.css";
import React, { useEffect, useRef } from "react";
import { noop } from "../../../site/src/common/functional-utils";

export const languages = {
    "xml": xml,
    "html": xml,
    "css": css,
    "js": typescript,
    "json": json,
    "ts": typescript,
    "java": java,
    "gherkin": gherkin
}

const styles = createStyles({
    code: {
        fontSize: "1em",
        backgroundColor: "rgba(0,0,0,0.04)",
        borderRadius: 4
    }
});

const _CodeBlock = ({ classes, language, code, className, onDoubleClick }: Props) => {
    const ref = useRef(null);
    useEffect(() => {
        const lang = languages[language];
        hljs.registerLanguage(language, lang);
        hljs.highlightBlock(ref.current)
    }, [ code ]);
    return (
        <pre className={className || ""} onDoubleClick={ onDoubleClick || noop }>
            <code ref={ref} className={`${language} ${classes.code}`}>                
                { code.trim() }
            </code>
        </pre>
    )
}

export const CodeBlock = withStyles(styles)(_CodeBlock)

interface Props extends WithStyles<typeof styles> {
    code: string;
    language: keyof typeof languages;
    className?: string;
    onDoubleClick?(): void;
}