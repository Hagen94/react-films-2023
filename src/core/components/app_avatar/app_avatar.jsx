
const AppAvatar = ({ name, src }) => {
  return (
    <div>
      <img
        style={{
          position: 'absolute',
          margin: '0 auto',
          left: '0',
          right: '0',
          width: '80%',
          height: '80%',
          borderRadius: '50%',
        }}
        src={src}
        alt={name}
      />
    </div>
  );
};

export default AppAvatar;