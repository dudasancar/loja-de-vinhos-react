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
    api
      .get(`/recommendWine/${cpfFormatado}`)
      .then((response) => setWine(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  function goBack() {
    window.history.back()
  }

  console.log(wine);
  /* equivalentes
  if(wine){
    console.log('a condição é verdadeira')
  } else {
    console.log('a condicao nao é verdadeira.')
  }

  wine ? console.log('a condição é verdadeira') : console.log('a condição não é verdadeira') // if ternario
*/

  /*equivalentes
if(wine){
  console.log('vinho é verdadeiro');
} else {
  return null
}

  wine ? console.log('vinho é verdadeiro'): null;
  wine && console.log('vinho é verdadeiro') // short form
  */

  return (
    <div className={styles.all}>
      <input type="button" value="←" onClick={goBack} className={styles.button}/>
      <h1 className={styles.title}>Recommend Wine</h1>
      <select className={styles.names} onChange={handleChange}>
        {" "}
        {clients &&
          clients.map((client) => (
            <option value={client.cpf}>{client.nome}</option>
          ))}
      </select>
          <h2 className={styles.wine}>{wine?.produto}</h2>
          <ul className={styles.list}>
            <li>Variedade: {wine?.variedade}</li>
            <li>País: {wine?.pais}</li>
            <li>Categoria: {wine?.categoria}</li>
            <li>Safra: {wine?.safra}</li>
            <li>Preço: ${wine?.preco}</li>
            <li>Em estoque: {wine?.total}</li>
          </ul>
    </div>
  );
};

export default RecommendedWine;
