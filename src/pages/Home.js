const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    // background: 'transparent',
    // backgroundRepeat: 'no-repeat',
  },
  title: {
    fontWeight: 500,
    fontSize: 80,
    textAlign: 'center',
    color: 'cornflowerblue',
  },
  page: {
    fontWeight: 500,
    fontSize: 60,
    textAlign: 'center',
    color: 'gray',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Phonebook </h1> <br />
      <p style={styles.page}>welcome page</p>
    </div>
  );
}
