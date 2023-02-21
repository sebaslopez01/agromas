import { ReactNode } from "react";
import Head from "next/head";
import { User } from "@prisma/client";

import NavBar from "./navigation/NavBar";
import Footer from "./navigation/Footer";

interface LayoutProps {
  title?: string;
  description?: string;
  user: User | null;
  children: ReactNode;
}

export default function Layout({
  title = "AgroMAS",
  description = "Página de AgroMAS",
  user,
  children,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavBar user={user} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
