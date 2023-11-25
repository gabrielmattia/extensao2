import { _ as __nuxt_component_0 } from './nuxt-link-874fad8c.mjs';
import { _ as _export_sfc, u as useRouter } from '../server.mjs';
import { reactive, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "signup",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const formData = reactive({
      name: "",
      email: "",
      authorEmail: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-9f9622e2><form data-v-9f9622e2><h1 data-v-9f9622e2>Signup user</h1><input autoFocus placeholder="Name" type="text"${ssrRenderAttr("value", unref(formData).name)} data-v-9f9622e2><input placeholder="Email address" type="text"${ssrRenderAttr("value", unref(formData).email)} data-v-9f9622e2><input${ssrIncludeBooleanAttr(!unref(formData).name || !unref(formData).email) ? " disabled" : ""} type="submit" value="Signup" data-v-9f9622e2>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9f9622e2"]]);

export { signup as default };
//# sourceMappingURL=signup-606577fa.mjs.map
