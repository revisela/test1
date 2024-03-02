import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revisela - Contact Us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
