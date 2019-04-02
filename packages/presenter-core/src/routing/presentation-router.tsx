import React from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import { Presentation, SlideManager } from "..";
import { PresentationSelector } from "../../../site/src/lessons/presentation-selector";

export function PresentationViewer({ presentations, routeProps }: Props) {
    const baseUrl = routeProps.match.url.replace(/\/$/, "");
    return (
        <Switch>
            <Route path={`${baseUrl}/presentations`} exact render={() => 
                <PresentationSelector presentations={presentations} /> }
            />
            <Route path={`${baseUrl}/presentations/:presentation/slides/:slideNum`}
                render={ props => 
                    <SlideManager presentation={presentations[props.match.params.presentation]}
                        history={ props.history }
                        match={ props.match } />
            } />
            <Route path={`${baseUrl}/`} exact render={ () => <Redirect to={`${baseUrl}/presentations`} /> } />
        </Switch>
    )
}

interface Props {
    presentations: Presentation[]
    routeProps: RouteComponentProps;
}