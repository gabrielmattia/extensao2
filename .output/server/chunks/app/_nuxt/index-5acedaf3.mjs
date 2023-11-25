import { _ as __nuxt_component_0 } from './Post-16fc733c.mjs';
import { u as useFetch } from './fetch-f57870df.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import './index-6a088328.mjs';
import '../server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: projetoFavorito, error, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/projetosFavoritos", "$PslAyef5YX")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Post = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><h1>My Blog</h1><main>`);
      if (unref(pending)) {
        _push(`<p><span class="loading"></span></p>`);
      } else if (unref(error)) {
        _push(`<p>Error while fetching feed \u{1F494}</p>`);
      } else {
        _push(`<div><!--[-->`);
        ssrRenderList(unref(projetoFavorito), (projeto) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-5acedaf3.mjs.map
