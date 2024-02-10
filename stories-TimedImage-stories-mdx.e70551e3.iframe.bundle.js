(self.webpackChunkreact_timed_image=self.webpackChunkreact_timed_image||[]).push([[420],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Qb:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Qb});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/TimedImage.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_react_timed_image_react_timed_image_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_components_TimedImage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/TimedImage.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",blockquote:"blockquote"},(0,_home_runner_work_react_timed_image_react_timed_image_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.MN)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Qb,{title:"Components/TimedImage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1",{children:"TimedImage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"description",children:"Description"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"A TimedImage repeatedly renders an image at a timed interval."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Features optional client-side cache busting so the image reloads on every render."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:"import { TimedImage } from 'react-timed-image';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:'<TimedImage src="https://loremflickr.com/220/140" interval={3000} />\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_TimedImage__WEBPACK_IMPORTED_MODULE_2__.y,{src:"https://loremflickr.com/220/140",interval:3e3}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["The TimedImage above uses ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"https://loremflickr.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"loremflickr.com"}),", which returns a different image on every request."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["By default, client-side cache-busting is enabled via ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"https://justinmahar.github.io/react-uncached-image/",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-uncached-image"}),",\nso the image will be downloaded from the server on every render. You can disable this functionality with the prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"uncached={false}"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.th,{children:"Prop"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.th,{children:"Type"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.th,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.tbody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.td,{children:"interval"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.td,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"number"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"undefined"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.td,{children:["Optional. The re-render interval in milliseconds. Defaults to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"5000"}),"."]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.td,{children:"uncached"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.td,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"boolean"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"undefined"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.td,{children:["Optional. When ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"true"}),", the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"src"})," attribute will have a cache-busting query param attached, causing the browser to download the image on every render. When ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"false"}),", the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"src"})," will not have a cache-busting query param attached and the browser cache may be used for the image. Default ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"true"}),"."]})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["This component supports ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.strong,{children:["all ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"img"})," props"]}),", such as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"alt"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"className"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"style"}),", and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"onClick"}),". It renders as an ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"img"})," element."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"The following renders a build status badge every 5 seconds, showing the build status in real-time:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_TimedImage__WEBPACK_IMPORTED_MODULE_2__.y,{src:"https://github.com/justinmahar/react-timed-image/workflows/Deploy/badge.svg",interval:5e3}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:'<TimedImage src="https://github.com/justinmahar/react-timed-image/workflows/Deploy/badge.svg" interval={5000} />\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Note: This example has since been turned into a Markdown enabled component, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"https://justinmahar.github.io/react-build-status-badge/",target:"_blank",rel:"nofollow noopener noreferrer",children:"BuildStatusBadge"}),"."]}),"\n"]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Components/TimedImage",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_react_timed_image_react_timed_image_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.MN)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);