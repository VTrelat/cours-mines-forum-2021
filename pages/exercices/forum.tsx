import type { NextPage } from 'next';
import Message from '../components/Message'
import MessageForm from '../components/MessageForm'

const Forum: NextPage = () => {
  return (
    <>
      <div id="forum">
        <h1 id="forumtitle">
          Forum Hey Story Zon
        </h1>
        <br />
        <div className="container">
          <div className="row">
            <div id="messageField" className="col">
              <Message body="Salut" author="VilavaneLy" type="incoming" date={new Date} />
              <Message body="Non, tu peux m'envoyer ton projet de software engineering stp ?" author="VTrelat" type="sent" date={new Date} />
              <Message body="Non" author="VilavaneLy" type="incoming" date={new Date} />
              <Message body="Je vais le dire à PEM" author="VTrelat" type="sent" date={new Date} />
              <Message body="Genre maintenant" author="VTrelat" type="sent" date={new Date} />
              <Message body="Noooon ! Bon ok je te passe tout" author="VilavaneLy" type="incoming" date={new Date} />
              <Message body="Je veux 300€ en liquide aussi" author="VTrelat" type="sent" date={new Date} />
              <Message body="Ok 🥲" author="VilavaneLy" type="incoming" date={new Date} />
              <Message body="Je te fais un Lydia, passe ton num" author="VilavaneLy" type="incoming" date={new Date} />
              <Message body="0768207201" author="VTrelat" type="sent" date={new Date} />
              <Message body="C'est bon" author="VilavaneLy" type="incoming" date={new Date} />
              <Message body="J'ai reçu que 280" author="VTrelat" type="sent" date={new Date} />
              <Message body="J'avais que ça 😅" author="VilavaneLy" type="incoming" date={new Date} />
              <Message body="Ok j'envoie un message à PEM" author="VTrelat" type="sent" date={new Date} />
              <Message body="Je te passe 20€ en liquide demain !!" author="VilavaneLy" type="incoming" date={new Date} />
              <Message body="Non paye moi 20 oasis pomme cassis framboise" author="VTrelat" type="sent" date={new Date} />
              <Message body="Oh non videz pas la machine svp 😅😢" author="PEM" type="incoming" date={new Date} />
            </div>
            <div className="col">
              <MessageForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Forum
