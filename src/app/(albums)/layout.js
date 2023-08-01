import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import NavigationMenu from "@/app/components/NavigationMenu/NavigationMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Still Untitled Music Project",
  description: "Join us as we search for the best albums ever created",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.wrapper}>
          <div className={styles["inner-wrapper"]}>
            <NavigationMenu />
            <div>{children}</div>
            <div>Community</div>
          </div>
        </div>
      </body>
    </html>
  );
}
