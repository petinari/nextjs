import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { Header } from "../../components/Header/Index";

import { useAppContext } from "../../contexts/AppContext";
import {  useApi } from "../../libs/useAPI";

import styles from "../../styles/Home.module.css";
import { Tenant } from "../../types/Tenant";

const Login = (data: Props) => {
  const {tenant, setTenant} = useAppContext();
  const loginText = `Login ${data.tenant.name}`;
  useEffect(()=> {setTenant(data.tenant), []})

  return (
    <div className={styles.container}>
        <Head>
            <title>{loginText}</title>
        </Head>
        <Header/>

       
       
    </div>
  );
};

export default Login;

type Props = {
  tenant: Tenant;
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
