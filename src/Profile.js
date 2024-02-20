const Test1 = ({name1}) => {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';

  return (
  <div>
      <img
    className="avatar"
    src={avatar}
    alt={description}
  />
    <div>{name1}</div>
  </div>
  );
};

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

const Test2 = ({name2}) => {
  return (
    <div>{formatDate(today)}{name2}</div>
  );
};

function Profile({name1, name2}) {
    return (
      <>
      <Test1 name1={name1}/>
        <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />
          <Test2 name2={name2}/>
      </>
    );
};

export default Profile;
