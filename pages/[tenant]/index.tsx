import { GetServerSideProps } from "next";
import { Banner } from "../../components/Banner";
import { ProductItem } from "../../components/ProductItem";
import { SearchInput } from "../../components/SearchInput";
import { getTenantResponse, useApi } from "../../libs/useAPI";

import styles from "../../styles/Home.module.css";

const Home = (data: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem Vindo (a)! 👋🏻</div>
            <div className={styles.headerSubTitle}>O que deseja para hoje?</div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.menuButton}>
              <div
                className={styles.menuButtonLine}
                style={{ backgroundColor: data.tenant.mainColor }}
              ></div>
              <div
                className={styles.menuButtonLine}
                style={{ backgroundColor: data.tenant.mainColor }}
              ></div>
              <div
                className={styles.menuButtonLine}
                style={{ backgroundColor: data.tenant.mainColor }}
              ></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput
            mainColor={data.tenant.mainColor}
            onSearch={() => null}
          ></SearchInput>
        </div>
      </header>
      <Banner />
      <div className={styles.grid}>
        <ProductItem
          data={{
            id: 1,
            image: "/tmp/OldBurger.png",
            categoryName: "Tradicional",
            name: "Old Burger",
            price: "25,50",
          }}
          mainColor="#fb9400"
          secondColor="orange"
        ></ProductItem>
        <ProductItem
          data={{
            id: 2,
            image: "/tmp/OldBurger.png",
            categoryName: "Tradicional",
            name: "Old Burger",
            price: "25,50",
          }}
          mainColor={data.tenant.mainColor}
          secondColor="orange"
        ></ProductItem>
        <ProductItem
          data={{
            id: 3,
            image: "/tmp/OldBurger.png",
            categoryName: "Tradicional",
            name: "Old Burger",
            price: "25,50",
          }}
          mainColor="#fb9400"
          secondColor="orange"
        ></ProductItem>
      </div>
    </div>
  );
};

export default Home;

type Props = {
  tenant: getTenantResponse;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tenantSlug = context.query;

  const api = useApi();
  const tenant = await api.getTenant(tenantSlug.tenant as string);
  if (!tenant) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }

  return {
    props: { tenant },
  };
};
