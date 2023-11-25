import { _ as __nuxt_component_0 } from './nuxt-link-874fad8c.mjs';
import { _ as _export_sfc, u as useRouter } from '../server.mjs';
import { reactive, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const formData = reactive({
      title: "",
      content: "",
      authorEmail: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b4481eeb><form data-v-b4481eeb><h1 data-v-b4481eeb>Create Draft</h1><input autoFocus placeholder="Title" type="text"${ssrRenderAttr("value", unref(formData).title)} data-v-b4481eeb><input placeholder="Author (email address)" type="text"${ssrRenderAttr("value", unref(formData).authorEmail)} data-v-b4481eeb><textarea cols="50" placeholder="Content" rows="8" data-v-b4481eeb>${ssrInterpolate(unref(formData).content)}</textarea><input type="submit" value="Create" data-v-b4481eeb>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "back",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` or Cancel `);
          } else {
            return [
              createTextVNode(" or Cancel ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b4481eeb"]]);

export { create as default };
//# sourceMappingURL=create-e252d1c1.mjs.map
