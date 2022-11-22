import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputField } from "../../components/InputField";
import { useAppContext } from "../../contexts/AppContext";
import { useApi } from "../../libs/useAPI";
import styles from "../../styles/login.module.css";
import { Tenant } from "../../types/Tenant";

const Login = (data: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { tenant, setTenant } = useAppContext();
  const loginText = `Login ${data.tenant.name}`;
  useEffect(() => {
    setTenant(data.tenant), [];
  });
  const handleSubmit = () => {};

  return (
    <div className={styles.container}>
      <Head>
        <title>{loginText}</title>
      </Head>
      <Header color={data.tenant.mainColor} backHref={`/${data.tenant.slug}`} />

      <InputField
        color={data.tenant.mainColor}
        placeholder="Digite seu e-mail"
        value={email}
        onChange={setEmail}
      />

      <InputField
        color={data.tenant.mainColor}
        placeholder="Digite sua senha"
        value={password}
        onChange={setPassword}
        password
      />

      <Button
        color={data.tenant.mainColor}
        label="Entrar"
        onClick={handleSubmit}
        fill
      />
      <Button
        color={data.tenant.mainColor}
        label="Entrar"
        onClick={handleSubmit}
      />
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
