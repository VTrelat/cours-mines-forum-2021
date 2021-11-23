import type { NextPage } from 'next'

const Exercise3: NextPage = () => {
  return (
    <p>
      <h1>Exercice 3</h1>

      <h2>Consignes :</h2>
      <ul>

        <li>Mettre en forme l&apos;exercice 3</li>
        <li>Recopier le formulaire d&apos;inscription précédent ci-dessous</li>
        <li>Grâce au fichier style.css, mettre le texte des labels en bleu, agrandir la police dans les input texte, placer un
          bloc en position absolue à droite du champ adresse email avec un texte de votre choix en police 10px rouge.</li>
      </ul>
      <br />
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
          <a id="bloc">Red text with absolute position</a>
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

export default Exercise3
