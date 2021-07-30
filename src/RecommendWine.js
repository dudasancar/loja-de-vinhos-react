import React from "react";
import api from "./services/api";
import styles from "./RecommendWine.module.css";

const RecommendedWine = () => {
  const [clients, setClients] = React.useState();
  const [wine, setWine] = React.useState();

  React.useEffect(() => {
    api
      .get("/clients")
      .then((response) => setClients(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function handleChange(event) {
    const cpfFormatado = event.target.value.replace(/\D/g, "");
    console.log(event);
    api
      .get(`/recommendWine/${cpfFormatado}`)
      .then((response) => setWine(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  console.log(clients);
  return (
    <div className={styles.all}>
      <h1 className={styles.title}>Recommend Wine</h1>
      <select className={styles.options} onChange={handleChange}>
        {" "}
        {clients &&
          clients.map((client) => (
            <option value={client.cpf}>{client.nome}</option>
          ))}
      </select>
      <h2 className={styles.wine}>{wine.produto}</h2>
      <ul className={styles.list}>
          <li>Variedade: {wine.variedade}</li>
          <li>País: {wine.pais}</li>
          <li>Categoria: {wine.categoria}</li>
          <li>Safra: {wine.safra}</li>
          <li>Preço: ${wine.preco}</li>
          <li>Em estoque: {wine.total}</li>
      </ul>
    </div>
  );
};

export default RecommendedWine;
