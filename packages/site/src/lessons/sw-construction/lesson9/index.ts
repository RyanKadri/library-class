import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { AccessControl, AllowingAccess, AwsEntities, AwsManagedServices, AwsSecurity, AwsServicesIntro, BucketPricing, HowDoSecure, IamIntro, IamPolicies, LetsMakeUsers, ProgrammaticActions, references, S3Buckets, S3Client, S3GetExample, S3Overview, S3PutExample, SamplePolicy, StorageSection, Title, UserSecurity, UsingS3 } from "./slides/simple";

export const lesson9: Presentation = {
    title: 'AWS Security and Data Storage',
    description: "Setting up secure access to your account. Using a database",
    slug: "security-and-databases",
    slides: [
        Title,
        HowDoSecure,
        UserSecurity,
        AccessControl,
        AwsSecurity,
        IamIntro,
        IamPolicies,
        SamplePolicy,
        AwsEntities,
        LetsMakeUsers,
        StorageSection,
        AwsServicesIntro,
        AwsManagedServices,
        ProgrammaticActions,
        S3Overview,
        S3Buckets,
        BucketPricing,
        AllowingAccess,
        UsingS3,
        S3Client,
        S3PutExample,
        S3GetExample,
        generateReferencesSlide(references)
    ],
    examples: [
    ],
    recording: {
        link: "https://temple.zoom.us/rec/play/EdZTGZ9y3ly2YXghriU8pvOE6JmcljucoaJ3PafFvlPr_TQe15OT7vyhuzglFfVHumLVhMocqOTsexPA.rWUmS2s4URkVXswH?continueMode=true"
    },
    references
}