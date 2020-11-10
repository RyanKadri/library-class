import { Presentation } from "../../../../../presenter-core/src/services/types";
import { PokedexLab } from "./lab/pokedex-lab";
import { ActiveWaiting } from "./slides/active-waiting2";
import { BlockingCodeExample } from "./slides/blocking-code";
import { FetchExample } from "./slides/fetch";
import { PromisesExample } from "./slides/introduce-promises";
import { JSONExample } from "./slides/json";
import { NestedTimeouts } from "./slides/nested-timers";
import { NonBlockingMoreExamples } from "./slides/nonblocking-code";
import { RequestTemplate } from "./slides/request-examples";
import * as simple from "./slides/simple";
import { NonBlockingExample } from "./slides/timeout-problem";

export const lesson9: Presentation = {
    title: `Everything but the kitchen async`,
    description: "Asynchronous JavaScript",
    slug: "async",
    slides: [
        simple.Title,
        ActiveWaiting,
        simple.WhatIsAsynchronous,
        NonBlockingExample,
        NonBlockingMoreExamples,
        simple.AsyncCallback,
        simple.WhatIsBlocking,
        simple.BlockingCodeCharacteristics,
        BlockingCodeExample,
        simple.ConcurrencyModel,
        simple.NotAHugeProblem,
        simple.EventLoop,
        simple.RequestsResponses,
        simple.WhatIsAServer,
        simple.HowDoUseServers,
        JSONExample,
        simple.ShowExample,
        FetchExample,
        simple.WhatArePromises,
        NestedTimeouts,
        PromisesExample,
        simple.HttpRequest,
        simple.HttpResponse,
        simple.HttpHeaders,
        RequestTemplate,
    ],
    examples: [
        
    ],
    lab: {
        LabView: PokedexLab,
        slug: "using-apis",
        title: "Building a Pokedex"
    },
    recording: {
        link: "https://temple.zoom.us/rec/play/BV2LlKHeN9IWiPG5xm0s0JuontmHRkQ6pfpTSc8FII20g7Nt938HAcF-ds5v2AO4iv7IyqXWFskKSKon.n87Irpk8mkOF5lM5?continueMode=true"
    }
}