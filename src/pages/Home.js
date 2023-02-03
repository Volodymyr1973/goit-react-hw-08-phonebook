import book from '../components/image/phone.jpg';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 150,
    // justifyContent: 'center',
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    // background: 'transparent',
    // backgroundRepeat: 'no-repeat',
  },
  image: {
    display: 'block',
  },
  title: {
    fontWeight: 500,
    fontSize: 64,
    textAlign: 'center',
    color: 'cornflowerblue',
  },
  page: {
    fontWeight: 500,
    fontSize: 24,
    textAlign: 'center',
    color: 'gray',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <img src={book} alt="User avatar" style={styles.image} width="500" />
      <h1 style={styles.title}>Welcome to Phonebook App</h1> <br />
      <p style={styles.page}>
        Are you looking for a free contact management tool that’ll help you
        become more productive and speed up the communication process? If yes,
        then Phonebook is the app for you.{' '}
      </p>
    </div>
  );
}
