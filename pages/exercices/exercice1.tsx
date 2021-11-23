import type { NextPage } from 'next'

const Exercise1: NextPage = () => {
  return (
    <p>
      <h1>Exercice 1</h1>
      <h3>Consignes :</h3>
      <ul>
        <li>Mettre en forme l&apos;exercice 1</li>
        <li>En-dessous, regrouper les noms de balises vues jusqu&apos;ici dans un tableau avec en-têtes ayant pour colonnes : Balise,
          Contenu. Dans la colonne contenu spécifier la ou les balises qu&apos;il est possible d&apos;insérer à l&apos;intérieur, ou &quot;texte&quot;
          (pour les titres par exemple).</li>
      </ul>

      <table className="table">
        <tr>
          <th>Balise</th>
          <th>Contenu</th>
        </tr>
        <tr>
          <td>h1, h2, h3, h4</td>
          <td>Titres (taille décroissante avec le numéro)</td>
        </tr>
        <tr>
          <td>p</td>
          <td>Encapsuler un paragraphe</td>
        </tr>
        <tr>
          <td>table</td>
          <td>Tableau</td>
        </tr>
        <tr>
          <td>tr</td>
          <td>Ligne dans un tableau</td>
        </tr>
        <tr>
          <td>td</td>
          <td>Colonne dans un tableau</td>
        </tr>
      </table>
    </p>
  )
}

export default Exercise1
