import { SearchParams } from "./SearchParams";

export interface PropsWithSearchParams {
    searchParams: Promise<SearchParams>;
  }