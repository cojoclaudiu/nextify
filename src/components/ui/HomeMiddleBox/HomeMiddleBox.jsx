import Link from 'next/link';
import SecondaryBigBox from '../../Boxes/SecondaryBigBox/SecondaryBigBox';

import WashingMachine from '../../../../public/images/washing-machine-laundry.png';
import Fridge from '../../../../public/images/fridge-freezers.png';
import Battlefield from '../../../../public/images/battlefield-2042-banner.png';
import styles from './HomeMiddleBox.module.css';
import SquareBox from '../../Boxes/_SquareBox/_SquareBox';

export default function HomeMiddleBox() {
  return (
    <section className={styles.sectionMiddle}>
      <SecondaryBigBox
        title="CHANGE THE RULES OF WAR"
        image={Battlefield}
        alt="Battlefield 2042 Portal"
        button="Pre-oreder"
      />

      <SquareBox
        position="mainTopLeft"
        image={Fridge}
        alt="Fridges and Freezers"
        footerTitle="Fridges and Freezers"
        footerDescription="Save up to £300 on selected products"
      />

      <SquareBox
        position="mainTopRight"
        image={WashingMachine}
        alt="Washing Machine and laundry basket"
        footerTitle="Washing Machines"
        footerDescription="Up to £120 off on selected products"
      />

      <Link href="/" passHref>
        <a href="replace" className={styles.btmDoubleBox}>
          <div>bottom double box</div>
        </a>
      </Link>
    </section>
  );
}
