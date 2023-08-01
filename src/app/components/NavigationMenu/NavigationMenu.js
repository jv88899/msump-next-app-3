import Link from "next/link";
import {
  FaHome,
  FaRecordVinyl,
  FaItunesNote,
  FaComment,
  FaUserCircle,
  FaHashtag,
} from "react-icons/fa";
import styles from "./navigationMenu.module.css";

export default function NavigationMenu() {
  return (
    <nav className={styles["nav-wrapper"]}>
      <div className={styles["inner-wrapper"]}>
        <Link href="/dashboard" className={styles["menu-item"]}>
          <div>
            <FaHome className={styles["menu-icon"]} />
          </div>
          <div></div>
        </Link>
        <Link href="/discover" className={styles["menu-item"]}>
          <div>
            <FaRecordVinyl className={styles["menu-icon"]} />
          </div>
          <div className={styles["menu-item-title"]}>Discover</div>
        </Link>
        <Link href="/my-albums" className={styles["menu-item"]}>
          <div>
            <FaItunesNote className={styles["menu-icon"]} />
          </div>
          <div className={styles["menu-item-title"]}>My Albums</div>
        </Link>
        <Link href="/comments" className={styles["menu-item"]}>
          <div>
            <FaComment className={styles["menu-icon"]} />
          </div>
          <div className={styles["menu-item-title"]}>Comments</div>
        </Link>
        <Link href="/profile" className={styles["menu-item"]}>
          <div>
            <FaUserCircle className={styles["menu-icon"]} />
          </div>
          <div className={styles["menu-item-title"]}>Profile</div>
        </Link>
        <Link href="/community" className={styles["menu-item"]}>
          <div>
            <FaHashtag className={styles["menu-icon"]} />
          </div>
          <div className={styles["menu-item-title"]}>Community</div>
        </Link>
      </div>
    </nav>
  );
}
