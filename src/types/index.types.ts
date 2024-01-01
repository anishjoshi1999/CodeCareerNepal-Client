export interface JobsByCompany {
    _id: string;
    companyName: string;
    totalJobs: Job[];
    createdAt: string;
}
export interface Job {
    jobName: string;
    jobUrl: string;
    _id: string;
}
