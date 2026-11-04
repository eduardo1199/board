import z from "zod";
import { IssuesListResponseSchema } from "../list-issues";

export type Issues = z.infer<typeof IssuesListResponseSchema>