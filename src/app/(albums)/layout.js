import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import NavigationMenu from "@/app/components/NavigationMenu/NavigationMenu";
import Community from "@/app/components/Community/Community";

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
            <div className={styles["child-wrapper"]}>{children}</div>
            <Community />
          </div>
        </div>
      </body>
    </html>
  );
}
