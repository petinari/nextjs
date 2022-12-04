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
import styles from "../../styles/signup.module.css";
import { Tenant } from "../../types/Tenant";

const signup = (data: Props) => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const { tenant, setTenant } = useAppContext();
  const signuptext = `Cadastro`;
  useEffect(() => {
    setTenant(data.tenant), [];
  });

  const router = useRouter();

  const handleSubmit = () => {};
  const handleSignup = () => {
    router.push(`/${data.tenant.slug}/signup`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{signuptext}</title>
      </Head>
      <Header
        color={data.tenant.mainColor}
        backHref={`/${data.tenant.slug}/login`}
      />
      <div className={styles.header}>{data.tenant.name}</div>
      <div
        className={styles.subtitle}
        style={{ borderBottomColor: data.tenant.mainColor }}
      >
        Preencha os campos para se cadastrar.
      </div>
      <div className={styles.line}></div>
      <div className={styles.formarea}>
        <div className={styles.inputarea}>
          <InputField
            color={data.tenant.mainColor}
            placeholder="Digite seu nome"
            value={nome}
            onChange={setNome}
          />
        </div>
        <div className={styles.inputarea}>
          <InputField
            color={data.tenant.mainColor}
            placeholder="Digite seu e-mail"
            value={email}
            onChange={setEmail}
          />
        </div>
        <div className={styles.inputarea}>
          <InputField
            color={data.tenant.mainColor}
            placeholder="Digite sua senha"
            value={password}
            onChange={setPassword}
            password
          />
        </div>
        <div className={styles.inputarea}>
          <Button
            color={data.tenant.mainColor}
            label="Cadastrar"
            onClick={handleSubmit}
            fill
          />
        </div>
      </div>
      <div className={styles.forgetarea}>
        Já te cadastro?
        <Link href={`/${data.tenant.slug}/login`}>
          <a style={{ color: data.tenant.mainColor }}> Fazer login</a>
        </Link>
      </div>
    </div>
  );
};

export default signup;

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
