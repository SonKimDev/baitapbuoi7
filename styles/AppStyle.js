import { StyleSheet } from 'react-native'

const AppStyle = StyleSheet.create({
    container:{
      flex: 1,
    },
    top:{
      flex: 1,
      backgroundColor: '#ffde40',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title:{
      fontWeight: 'bold',
      color: 'black',
      fontSize: 25,
    },
    bottom:{
      flex: 9,
      paddingHorizontal: 20,
      paddingTop: 10,
    },
    itemContanier:{
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        flexDirection: 'row',
        elevation: 8,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderRadius: 8,
    },
    imageContainer:{
        marginRight: 8,
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 30,
    },
    infoContainer:{
        flex: 1,
    },
    id:{
        color: 'black',
        fontSize: 16,
    },
    titleItem:{
        color: 'black',
        fontSize: 16,
    },
  })

export default AppStyle;