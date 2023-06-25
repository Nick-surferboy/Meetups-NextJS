import "./globals.css";
import Layout from "@/app/nav-bar/Layout";

export const metadata = {
  title: "NextJS Course",
  description: "App created during the Udemy NextJS course",
};


export default function RootLayout({ Component, children }) {
  return (
    <html lang="en">
      <body >
        <Layout>{children} </Layout>
      </body>
    </html>
  );
}
