import { StyleSheet } from "react-native";

export const BasicStyle = StyleSheet.create({
    
      container: {
      backgroundColor: '#fff',
      paddingTop: 100,  
    },

    label: {
      
      alignSelf: 'center',
        fontSize: 25,
        paddingTop: 15,
        paddingBottom: 10,
    },

    field: {
      backgroundColor: '#fff7e6',
      alignSelf: 'center',
      textAlign:'center',
      fontSize: 25,
      width: 150,
      height: 55,
      borderRadius: 8,
      borderColor: '#00000'
    },

    radio: {
      
      alignSelf: 'center',
      paddingTop: 20,

    },

    button: {
      fontSize: 20,
      backgroundColor: '#FABE48',
      alignSelf: 'center',
      paddingTop: 10,
      width: 150,
      height: 55,
      borderRadius: 8,
      borderColor: '#00000',
    },

    text: {
      textAlign: 'center',
      fontSize: 22,
    }

  });

  export const DarkStyle = StyleSheet.create({
    container: { ...BasicStyle.container,
        backgroundColor: '#00000'},

  });