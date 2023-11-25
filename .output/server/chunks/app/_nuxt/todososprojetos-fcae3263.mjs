import { _ as __nuxt_component_0 } from './Post-16fc733c.mjs';
import { u as useFetch } from './fetch-f57870df.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './index-6a088328.mjs';
import '@unhead/shared';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import 'vue-router';

const _sfc_main = {
  __name: "todososprojetos",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: projetos, error, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/projetos", "$cN9fdoeklh")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Post = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-73d4ec11><h1 data-v-73d4ec11>Todos os projetos</h1><main data-v-73d4ec11>`);
      if (unref(pending)) {
        _push(`<p data-v-73d4ec11><span class="loading" data-v-73d4ec11></span></p>`);
      } else if (unref(error)) {
        _push(`<p data-v-73d4ec11>Error while fetching drafts \u{1F494}</p>`);
      } else {
        _push(`<div data-v-73d4ec11><!--[-->`);
        ssrRenderList(unref(projetos), (projeto) => {
          _push(ssrRenderComponent(_component_Post, {
            class: "post",
            key: projeto.id,
            projeto
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/todososprojetos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const todososprojetos = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-73d4ec11"]]);

export { todososprojetos as default };
//# sourceMappingURL=todososprojetos-fcae3263.mjs.map
