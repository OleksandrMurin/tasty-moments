import { ResponsePage } from "./ResponsePage";

export interface PageModel<T> {
    content: T[],
    page: ResponsePage
}