import type { NextPage } from 'next'
import { isMobile } from 'react-device-detect';

const Exercise4: NextPage = () => {
  return (
    <div className="container">
      <h1>Exercice 4</h1>
      <h3>Consignes :</h3>
      <ul>
        <li>Recopier les exercices 1 et 2 ci-dessous</li>
        <li>Les adapter pour que les 2 exercices soient sur 2 colonnes différentes sur Desktop, et sur une seule colonne sur
          Mobile</li>
        <li>Adapter le formulaire pour qu&apos;il respecte les guidelines Bootstrap sur les formulaires</li>
      </ul>
      <div className="row justify-content-md-center">
        <div className="col-md-8">
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
              <td>a</td>
              <td>Texte</td>
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
            <tr>
              <td>ul</td>
              <td>Liste, contient des li</td>
            </tr>
            <tr>
              <td>li</td>
              <td>Élément d&apos;une liste</td>
            </tr>
          </table>
        </div>
        <div className="col-6 col-md-4">
          <form>
            <div className="mb-3">
              <label htmlFor="pseudo" className="form-label">Pseudo</label>
              <input type="pseudo" className="form-control" id="pseudo" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">TCU</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Exercise4
