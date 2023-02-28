const Channels = ({ setChannel }) => {
  const changeChannel = (channel) => {
    setChannel(channel);
  };

  return (
    <aside className="channel">
      <h1>TV GUIDE</h1>
      <div className="station" id="0" onClick={changeChannel(0)}>
        <h4>Channel 0</h4>
        <p>
          A stock portfolio web app that lets users track stock holdings over
          time and read news
        </p>
      </div>
    </aside>
  );
};

export default Channels;
