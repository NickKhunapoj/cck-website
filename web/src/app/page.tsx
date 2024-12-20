import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import Banner from '@/app/components/banner';
import styles from './page.module.scss';
import Announcement from './announcement';

export const dynamic = 'force-dynamic';

export default async function Home() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <Banner
        title="Computer Club KMUTNB"
        subtitle='"We are changing the world with technology." ~ Rookies111'
        showButton={true}
      />

      <div className={styles.pageContainer}>
        <div className={styles.title2}>ประกาศ</div>
        <div className={styles.view}>
          <Announcement />
        </div>
      </div>

      <Footer />

    </div>
  );
}