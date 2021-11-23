import type { NextPage } from 'next';
import MessageList from '../components/MessageList'
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
              <MessageList />
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
