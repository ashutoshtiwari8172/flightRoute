import AuthProvider from "./(components)/AuthProvider";
import Navbar from "./(components)/Navbar";
import "./globals.css";

export const metadata = {
  title: "Airbus",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>
          {/* <Nav /> */}
          <Navbar/>
          <div>{children}</div>
          
        </body>

      </AuthProvider>
    </html>
  );
}
