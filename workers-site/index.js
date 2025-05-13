// workers-site/index.js
import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

export default {
  async fetch(request, env, ctx) {
    try {
      return await getAssetFromKV({ request });
    } catch (e) {
      return new Response("Error fetching file", { status: 500 });
    }
  }
};
