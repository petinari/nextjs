import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputField } from "../../components/InputField";
import { useAppContext } from "../../contexts/AppContext";
import { useApi } from "../../libs/useAPI";
import styles from "../../styles/forget.module.css";
import { Tenant } from "../../types/Tenant";

const forget = (data: Props) => {
  const [email, setEmail] = useState("");

  const { tenant, setTenant } = useAppContext();
  const loginText = `Esqueci a senha | ${data.tenant.name}`;
  useEffect(() => {
    setTenant(data.tenant), [];
  });

  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/${data.tenant.slug}/forget-success`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{loginText}</title>
      </Head>
      <Header
        color={data.tenant.mainColor}
        backHref={`/${data.tenant.slug}/login`}
      />
      <div className={styles.header}>{data.tenant.name}</div>

      <div className={styles.title}>Esqueceu sua senha?</div>

      <div
        className={styles.subtitle}
        style={{ borderBottomColor: data.tenant.mainColor }}
      >
        Preencha o campo e-mail para receber as instruções de recuperação de
        senha.
      </div>
      <div className={styles.line}></div>
      <div className={styles.formarea}>
        <div className={styles.inputarea}>
          <InputField
            color={data.tenant.mainColor}
            placeholder="Digite seu e-mail"
            value={email}
            onChange={setEmail}
          />
        </div>

        <div className={styles.inputarea}>
          <Button
            color={data.tenant.mainColor}
            label="Enviar"
            onClick={handleSubmit}
            fill
          />
        </div>
      </div>

      <div className={styles.line}></div>
    </div>
  );
};

export default forget;

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
