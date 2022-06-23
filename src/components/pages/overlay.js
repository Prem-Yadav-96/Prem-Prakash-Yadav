import '../../styles/overlay.scss';
function Overlay() {
 
  return (
    <div 
    className='container'>
      <div 
      className="transition-container">
        <h2 className='domain'>
          <div className="text-container domain">
            <span className='domain-span'>domain.</span>
            <div className="crc-domain"></div>
          </div>
        </h2>
        <h2>
          <div className="text-container">
            <div className="crc-front"></div>
            <span className='front'>front.end.development.</span>
          </div>
        </h2>
        <h2>
          <div className="text-container">
            <div className="crc-eng"></div>
            <span className='eng'>engineering.algorithms.</span>
          </div>
        </h2>
        <h2>
          <div className="text-container">
            <div className="crc-prem"></div>
            <span className='prem'>prem.prakash.yadav.</span>
          </div>
        </h2>
        <h2>
          <div className="text-container">
            <div className="crc-back"></div>
            <span className='back'>back.end.application.</span>
          </div>
        </h2>
        <h2>
          <div className="text-container">
            <div className="crc-design"></div>
            <span className='design'>design.user.interface.</span>
          </div>
        </h2>
        <h2 className='resp'>
          <div className="text-container resp">
            <div className="crc-resp"></div>
            <span className='resp-span'>responsive.</span>
          </div>
        </h2>
      </div>
  </div>
  )
}

export default Overlay