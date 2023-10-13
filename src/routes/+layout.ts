

import { supabase } from "$lib/supabaseConfig";
import type { PostgrestSingleResponse } from "@supabase/supabase-js";
import type { RepoUnits } from "$lib/types";
import type { LayoutLoad } from "./$types";


export const load: LayoutLoad = async () => {
    const repoTable: PostgrestSingleResponse<RepoUnits[]> = await supabase.from("repo_tb").select("*");

    return repoTable
};