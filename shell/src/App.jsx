// import React, { Suspense } from "react";

// const ProductList = React.lazy(() => import("products/ProductList"));

// export default function App() {
//   return (
//     <div>
//       <h1>Shell App</h1>
//       <Suspense fallback={<div>Loading Products...</div>}>
//         <ProductList />
//       </Suspense>
//     </div>
//   );
// }
// import React, { Suspense } from "react";

// // 👇 Correct lazy import for Module Federation
// const ProductList = React.lazy(() =>
//   import("products/ProductList").then((module) => ({ default: module.default }))
// );

// export default function App() {
//   return (
//     <div>
//       <h1>Shell App</h1>
//       <Suspense fallback={<div>Loading Products...</div>}>
//         <ProductList />
//       </Suspense>
//     </div>
//   );
// }
// shell/src/App.jsx
import React, { Suspense } from "react";

// SAFELY load remote component
const ProductList = React.lazy(() =>
  import("products/ProductList").then((module) => {
    if (!module?.default) {
      throw new Error("⚠️ Failed to load ProductList from products MF");
    }
    return { default: module.default };
  })
);

export default function App() {
  return (
    <div>
      <h1>Shell App</h1>
      <Suspense fallback={<div>Loading Products...</div>}>
        <ProductList />
      </Suspense>
    </div>
  );
}
