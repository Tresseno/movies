import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerSearch: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#415a77', // yinmn-blue
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputSearch: {
    flex: 1,
    height: 40,
    marginLeft: 5,
    color: '#e0e1dd', // texto claro
    fontSize: 16,
  },
});

export default styles;
