import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { AlertingIssues, Downtime, HowDoManage, HowDoWeFixIt2, HowToFix, JavaLogging, LaunchTemplates, Logging, ManageLoadBalancer, ManageScalingWithAws, ManageTargetGroups, Nines, OnAws, references, SplittingUpAService, Title, WhatCanGoWrong2, WhatCanGoWrongQuestion } from "./slides/simple";

export const lesson8: Presentation = {
    title: 'Resiliency, Logging, and Monitoring',
    description: "Deploying reliable services (and picking them up when they fall down)",
    slug: "resiliency",
    slides: [
        Title,
        WhatCanGoWrongQuestion,
        Downtime,
        Nines,
        HowToFix,
        WhatCanGoWrong2,
        HowDoWeFixIt2,
        SplittingUpAService,
        HowDoManage,
        OnAws,
        LaunchTemplates,
        ManageScalingWithAws,
        ManageTargetGroups,
        ManageLoadBalancer,
        AlertingIssues,
        Logging,
        JavaLogging,
        generateReferencesSlide(references)
    ],
    examples: [
    ],
    recording: {
        link: "https://temple.zoom.us/rec/play/fWaiOTIXJZnOlTh9rWZYys1s7h4oi_YxrtK_tqMGpAH-xFdAK0-X-vL2NdU1LxplCUBH17cQzqGEXtlP.QnQEikhVjxfAipfO?continueMode=true",
    },
    references
}