import { useRouter } from 'next/router';
import Image from 'next/image';
import useData from '../../../hooks/useData';
import priceFormat from '../../../utils/priceFormat';
import styles from './ProductPage.module.css';

export default function ItemPage() {
  const router = useRouter();
  const { i: id } = router.query;
  const { items } = useData();
  const itemData = items.find((item) => item.id === id);

  return (
    <main className={styles.itemContainer}>
      {itemData === undefined ? (
        'loading'
      ) : (
        <>
          <article className={styles.productMain}>
            <h1 className={styles.productTitle}>{itemData.name}</h1>
            <div className={styles.productGallery}>
              <div className={styles.mainImage}>
                <Image width={400} height={400} src={itemData.image} />
              </div>
              <div className={styles.secondaryImage}>
                <Image width={400} height={400} src={itemData.image} />
              </div>
              <div className={styles.thumbContainer}>
                <div className={styles.thumbImage}>Item </div>
                <div className={styles.thumbImage}>Item </div>
                <div className={styles.thumbImage}>Item </div>
                <div className={styles.thumbImage}>Item </div>
              </div>
            </div>
            <p className={styles.productDescription}>{itemData.description}</p>
          </article>

          <section className={styles.productSidebar}>
            <h2 className={styles.productPrice}>{priceFormat(itemData.price)}</h2>
          </section>
        </>
      )}
    </main>
  );
}
