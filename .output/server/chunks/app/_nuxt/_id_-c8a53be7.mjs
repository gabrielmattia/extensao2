import { _ as _export_sfc, a as useRoute, u as useRouter, c as createError } from '../server.mjs';
import { u as useFetch } from './fetch-f57870df.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    useRouter();
    const { data: article, error, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(() => `/api/post/${route.params.id}`, "$eAxXoiP24p")), __temp = await __temp, __restore(), __temp);
    if (!article) {
      throw createError({ statusCode: 404, statusMessage: "Post Not Found" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9d88ca39>`);
      if (unref(pending)) {
        _push(`<p data-v-9d88ca39><span class="loading" data-v-9d88ca39></span></p>`);
      } else if (unref(error)) {
        _push(`<p data-v-9d88ca39>Error while fetching feed \u{1F494}</p>`);
      } else {
        _push(`<main data-v-9d88ca39><h2 data-v-9d88ca39>${ssrInterpolate(unref(article).title)}</h2>`);
        if (unref(article).author) {
          _push(`<p data-v-9d88ca39>By ${ssrInterpolate(unref(article).author.name)}</p>`);
        } else {
          _push(`<p data-v-9d88ca39>Unknown author</p>`);
        }
        _push(`<div data-v-9d88ca39>${unref(article).content}</div>`);
        if (!unref(article).published) {
          _push(`<button data-v-9d88ca39> Publish </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button data-v-9d88ca39>Delete</button></main>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/p/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9d88ca39"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-c8a53be7.mjs.map
