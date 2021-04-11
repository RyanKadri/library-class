import { faHammer } from "@fortawesome/free-solid-svg-icons/faHammer";
import { CourseDefinition } from "../../../../presenter-core/src/services/types";
import { ConsolidatedReferences } from "../views/lesson-list/consolidated-references";
import { lesson1 } from "./lesson1";
import { lesson10 } from "./lesson10";
import { lesson11 } from "./lesson11";
import { lesson2 } from "./lesson2";
import { lesson3 } from "./lesson3";
import { lesson4 } from "./lesson4";
import { lesson5 } from "./lesson5";
import { lesson6 } from "./lesson6";
import { lesson7 } from "./lesson7";
import { lesson8 } from "./lesson8";
import { lesson9 } from "./lesson9";
import { MidtermStudyGuide } from "./midterm-prep/study-guide";

export const practicumInSW2021: CourseDefinition = {
    title: "Practicum in Software Construction",
    description: "A practical introduction to some CS topics that you don't normally learn in school",
    slug: "cis-4360",
    lessons: [
        lesson1,
        lesson2,
        lesson3,
        lesson4,
        lesson5,
        lesson6,
        lesson7,
        lesson8,
        lesson9,
        lesson10,
        lesson11
    ],
    icon: faHammer,
    courseExtras: [
        { title: "Consolidated References", route: "references", View: ConsolidatedReferences },
        { title: "Midterm Study Guide", route: "midterm-study-guide", View: MidtermStudyGuide }
    ]
}