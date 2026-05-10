import { ref, watch, mergeProps, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import QRCode from 'qrcode';
import { u as useHead } from './composables-CmYcacrI.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Generador de Códigos QR",
      meta: [
        {
          name: "description",
          content: "Crea códigos QR profesionales de forma gratuita. Personaliza colores y descarga en formatos de alta calidad como PNG, JPEG y SVG vectorial."
        },
        {
          name: "keywords",
          content: "generador qr gratis, crear codigo qr, qr svg bolivia, qr personalizado, salinas tech qr"
        },
        { property: "og:title", content: "Generador de Códigos QR| Salinas Tech" },
        { property: "og:description", content: "Crea y descarga tu código QR al instante con personalización de color y formatos profesionales." },
        { property: "og:image", content: "https://generadorqr.salinastech.com/preview-qr-tool.png" },
        // Asegúrate de subir una imagen de previsualización
        { property: "og:url", content: "https://generadorqr.salinastech.com/qr" },
        { property: "og:type", content: "website" },
        /* --- TWITTER --- */
        { name: "twitter:title", content: "Crea tu Código QR gratis en segundos" },
        { name: "twitter:description", content: "Herramienta gratuita para generar QRs de alta resolución." },
        { name: "twitter:image", content: "https://generadorqr.salinastech.com/preview-qr-tool.png" }
      ],
      link: [
        { rel: "canonical", href: "https://generadorqr.salinastech.com/" }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Generador de Códigos QR STPOS",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "All",
            "abstract": "Herramienta web para la creación y personalización de códigos QR en múltiples formatos.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "BOB"
            },
            "author": {
              "@type": "Organization",
              "name": "Salinas Tech",
              "url": "https://www.salinastech.com/"
            }
          })
        }
      ]
    });
    const text = ref("");
    const qrCanvas = ref(null);
    const selectedColor = ref("#000000");
    const selectedFormat = ref("image/png");
    const colors = [
      { name: "black", value: "#000000" },
      { name: "blue", value: "#ff0000" },
      { name: "orange", value: "#00ff00" },
      { name: "white", value: "#0000ff" }
    ];
    const generateQR = async () => {
      await nextTick();
      if (!qrCanvas.value) return;
      try {
        await QRCode.toCanvas(qrCanvas.value, text.value || " ", {
          width: 240,
          margin: 2,
          color: { dark: selectedColor.value, light: "#ffffff" },
          errorCorrectionLevel: "H"
        });
      } catch (err) {
        console.error("Error generando QR:", err);
      }
    };
    watch([text, selectedColor], () => generateQR());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-layout" }, _attrs))}><div class="home-page"><div class="bg-overlay"></div><div class="content-container"><section class="hero-section"><h1>Generador de Códigos QR</h1><p>Crea, personaliza y descarga tu código al instante.</p></section><main class="generator-card"><div class="modal-body"><aside class="preview-panel"><div class="qr-canvas-wrapper"><canvas></canvas></div><div class="qr-hint"><p>Escanea el código para probarlo</p></div></aside><section class="controls-panel"><div class="modal-header"><h2>Generar código QR</h2></div><div class="input-group"><label>Escribe o pega tu URL:</label><div class="input-field"><input${ssrRenderAttr("value", text.value)} type="text" placeholder="https://salinastech.com"></div></div><div class="options-row"><div class="option-item"><label>Elige un color</label><div class="color-picker"><!--[-->`);
      ssrRenderList(colors, (color) => {
        _push(`<span class="${ssrRenderClass([
          "color-dot",
          { active: selectedColor.value === color.value }
        ])}" style="${ssrRenderStyle({ backgroundColor: color.value })}"></span>`);
      });
      _push(`<!--]--></div></div></div><div class="option-item"><label>Formato de descarga</label><select class="format-select"><option value="image/png"${ssrIncludeBooleanAttr(Array.isArray(selectedFormat.value) ? ssrLooseContain(selectedFormat.value, "image/png") : ssrLooseEqual(selectedFormat.value, "image/png")) ? " selected" : ""}>PNG</option><option value="image/jpeg"${ssrIncludeBooleanAttr(Array.isArray(selectedFormat.value) ? ssrLooseContain(selectedFormat.value, "image/jpeg") : ssrLooseEqual(selectedFormat.value, "image/jpeg")) ? " selected" : ""}>JPEG</option><option value="image/svg+xml"${ssrIncludeBooleanAttr(Array.isArray(selectedFormat.value) ? ssrLooseContain(selectedFormat.value, "image/svg+xml") : ssrLooseEqual(selectedFormat.value, "image/svg+xml")) ? " selected" : ""}>SVG (Vectorial)</option></select></div><br><div class="modal-footer"><button class="btn-secondary"> Limpiar </button><button class="btn-primary"> Descargar </button></div></section></div></main></div></div></div>`);
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
//# sourceMappingURL=index-UmTG71GS.mjs.map
