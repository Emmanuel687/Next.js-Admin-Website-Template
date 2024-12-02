import './globals.css'

import { DashboardLayout } from "@/layouts/DashboardLayouts";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <DashboardLayout >
          {children}
        </DashboardLayout>
      </body>
    </html>
  );
}
