import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem'
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
    marginTop: '10px',

  },
  section: {
    marginTop: '10px',
    marginBottom: '10px'
  },

  form: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
  },
  navbarButton: {
    color: '#fff',
    textTransform: 'initial',
  },
  transparentBackground: {
    backgroundColor: 'transparent',
  },
  error: {
    color: '#f04040',
  },
  fullWidth: {
    width: '100%',
  }
});
export default useStyles;
