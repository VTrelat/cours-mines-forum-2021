import type { NextPage } from 'next'

const Exercise4: NextPage = () => {
  return (
    <>
      <h1 id="forumtitle">
        Forum Hey Story Zon
      </h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <div id="messageField">
              <div id="incomingMessage">
                Hey! How are you ?
              </div>
              <div id="sentMessage">
                I&apos;m not your friend, don&apos;t talk to me
              </div>
            </div>
          </div>
          <div className="col">
            <textarea name="textentry" id="textentry" placeholder="Your message here" />
            <form>
              <div className="mb-3">
                <label htmlFor="pseudo" className="form-label">Pseudo</label>
                <input type="pseudo" className="form-control" id="pseudo" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exercise4
