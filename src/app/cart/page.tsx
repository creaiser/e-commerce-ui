import { Suspense } from "react";
import CartClient from "./CartClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading cart...</div>}>
      <CartClient />
    </Suspense>
  );
}
