import "../globals.css";

import ProvidersWrapper from "./ProvidersWrapper";
import Nav from "./nav";
import { Suspense } from "react";

export default async function UserPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <Nav />
      </Suspense>
      <ProvidersWrapper>{children}</ProvidersWrapper>
    </>
  );
}
