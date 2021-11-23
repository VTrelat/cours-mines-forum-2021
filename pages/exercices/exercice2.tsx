import type { NextPage } from 'next'

const Exercise2: NextPage = () => {
  return (
    <p>
      <h1>Exercice 2</h1>
      Consignes :
      - Mettre en forme l&apos;exercice 2
      - Créer ci-dessous un formulaire d&apos;inscription contenant les champs : Prénom, nom, email, mot de passe, checkbox pour
      accepter un quelconque règlement et un bouton de validation.
      <form method="post">
        <div>
          <label htmlFor="firstname">First name: </label>
          <input type="text" id="firstname" name="firstname" placeholder="John" />
        </div>
        <br />
        <div>
          <label htmlFor="lastname">Last name: </label>
          <input type="text" id="lastname" name="lastname" placeholder="Doe" />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="your.name@example.com" />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <br />
        <div>
          <label htmlFor="cgu">CGU</label>
          <input type="checkbox" id="cgu" name="cgu" />
        </div>
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

    </p>
  )
}

export default Exercise2
