import { createTRPCReact } from "@trpc/react-query";
import { AppRouterType } from '../../server/router';

export const trpc = createTRPCReact<AppRouterType>({})