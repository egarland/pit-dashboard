import type { Handle, Redirect } from '@sveltejs/kit';
import { redirect } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { base64 } from "$lib/util";





export const handle = sequence();
