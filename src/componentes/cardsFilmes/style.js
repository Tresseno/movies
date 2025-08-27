import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    width: 220,
    borderRadius: 12,
    backgroundColor: '#1b263b', // oxford-blue
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    overflow: 'hidden'
  },

  image: {
    width: '100%',
    height: 320,
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#e0e1dd', // platinum
  },
});

export default styles;
