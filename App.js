import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from "@expo/vector-icons";
import { Icon } from 'react-native-elements'
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { Avatar, ListItem, withBadge, Badge, Header } from 'react-native-elements';



const Stack = createStackNavigator();

const Login = ({event}) => {
  return(
    <View style={[styles.container, {backgroundColor: 'green'}]}>
      <View style = {{marginBottom: 30, flexDirection: 'row', justifyContent: 'center', padding: 10}}>
        <Icon
          name='lock'
          type='font-awesome'
          style = {{marginRight: 10}}
          size =  {40}
          color = "white"
        />
        <Text style = {{ fontSize: 30, color: 'white' }}>Login</Text>
      </View>
      <Text style = {{marginLeft: 10, fontSize: 18, color: 'white'}}>Username:</Text>
      <Input
          placeholder='Email'
          leftIcon={{ type: 'font-awesome', name: 'user', color : "white" }}
        />
        <Text style = {{marginLeft: 10, fontSize: 18, color: 'white'}}>Password:</Text>
        <Input
          placeholder='Password'
          leftIcon={{ type: 'font-awesome', name: 'lock', color : "white" }}
        />
      
      <TouchableOpacity>
        <Text style={{textAlign: 'center', color : 'white'}}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style = {{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          onPress = {() => {
            event(false)
          }}
          buttonStyle = {{backgroundColor: "white", marginTop: 10, width: 100}}
          titleStyle = {{color: "green"}}
          icon={{
            type: 'font-awesome',
            name: 'sign-in',
            size: 15,
            color: "green"
          }}
          title="Login"
        />
      </View>
    </View>
  )
}

const HomeScreen = ({navigation}) => {
  return(
    <View style = {styles.container1}>
      <TouchableOpacity
        style = {styles.touchable}
        onPress = {() => {
          navigation.navigate('ProductsList')
        }}
      >
        <Text style = {styles.text}>Manage Products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style = {styles.touchable}
        onPress = {() => {
          navigation.navigate('EmployeesList')
        }}
      >
        <Text style = {styles.text}>Manage Employees</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style = {styles.touchable}
        onPress = {() => {
          navigation.navigate('OrdersList')
        }}
      >
        <Text style = {styles.text}>Manage Orders</Text>
      </TouchableOpacity>
    </View>
  )
}

const ProductsList = ({navigation}) => {
  return(
    <View style = {{flex: 1, alignItems: 'center', marginTop: 20}}>
      <Text style = {{fontSize: 24, fontWeight: 'bold'}}>List of Products</Text>
      <TouchableOpacity onPress = {
        () => {
          navigation.navigate('ProductDetails', {Name: 'Samsung Galaxy S10', Price: 30000, Image: "https://images.unsplash.com/photo-1571380401583-72ca84994796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"})
        }
      }>
        <Image 
          source = {{uri: 'https://images.unsplash.com/photo-1571380401583-72ca84994796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}}
          style={{ width: 200, height: 200, marginBottom: 20 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress = {
        () => {
          navigation.navigate('ProductDetails', {Name: 'Oppo F10', Price: 25000, Image: "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vYmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"})
        }}>
        <Image 
          source = {{uri: "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vYmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}}
          style={{ width: 200, height: 200, marginBottom: 20 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress = {
        () => {
          navigation.navigate('ProductDetails', {Name: 'Redmi Note 10', Price: 20000, Image: "https://images.unsplash.com/photo-1551355738-1875b6664915?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vYmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"})
        }}>
        <Image 
          source = {{uri: "https://images.unsplash.com/photo-1551355738-1875b6664915?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vYmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}}
          style={{ width: 200, height: 200, marginBottom: 20 }}
        />
      </TouchableOpacity>
    </View>
  )
}

const ProductDetails = ({navigation, route}) => {
  const Name = route.params.Name;
  const Price = route.params.Price;
   const image = route.params.Image;
  return(
    <View style = {styles.container1}>
    <Avatar
      title = {Name}
      size = "xlarge"
      containerStyle = {{marginBottom: 10}}
  rounded
  source={{
    uri: image
  }}
/>
      <Text style = {{fontSize: 20}}>Name: {Name}</Text>
      <Text style = {{fontSize: 20}}>Price: {Price}</Text>

      <TouchableOpacity style = {styles.touchable}
        onPress = {() => {
          navigation.navigate('ProductsList');
        }}
      ><Text style = {styles.text}>Back</Text></TouchableOpacity>
    </View>

    
  )
}

const EmployeesList = ({navigation}) => {
  const list = [
  {
    name: 'Sajjad Akhtar',
    designation: 'CEO',
    avatar_url: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
  },
  {
    name: 'Umair Banaras',
    designation: 'Manager',
    avatar_url: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
   {
    name: 'Waqas Sarwar',
    designation: 'Web Developer',
    avatar_url: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
]
  return(
    <View style = {styles.container1}>
      <View>
  {
    list.map((l, i) => (
      <TouchableOpacity onPress = {() => {
        navigation.navigate('EmployeeDetails', {name: l.name, designation: l.designation, image: l.avatar_url })
      }}>
        <ListItem key={i} bottomDivider>
        <Avatar source={{uri: l.avatar_url}} rounded size = "large"/>
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.designation}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      </TouchableOpacity>
    ))
  }
</View>
    </View>
  )
}

const EmployeeDetails = ({navigation, route}) => {
  const Name = route.params.name;
  const Designation = route.params.designation;
  const image = route.params.image;
  return(
    <View style = {styles.container1}>
      <Avatar
        rounded
        source={{uri: image}}
        size = "xlarge"
      />
      <Text style = {{fontSize: 20}}>Name: {Name}</Text>
      <Text style = {{fontSize: 20}}>Designation: {Designation}</Text>

      <TouchableOpacity style = {styles.touchable}
        onPress = {() => {
          navigation.navigate('EmployeesList');
        }}
      ><Text style = {styles.text}>Back</Text></TouchableOpacity>
    </View>
  )
}

const OrdersList = ({navigation}) => {
  const list = [
  {
    no: 1,
    name: 'Samsung Galaxy S 10',
    price: '30000',
    avatar_url: "https://images.unsplash.com/photo-1571380401583-72ca84994796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    no: 2,
    name: 'Oppo F17',
    price: '20000',
    avatar_url: "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vYmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
   {
     no: 3,
    name: 'Redmi Note 10',
    price: '25000',
    avatar_url: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
]
  return(
    <View style = {styles.container1}>
      <View>
  {
    list.map((l, i) => (
      <TouchableOpacity onPress = {() => {
        navigation.navigate('OrderDetails', {no: l.no, name: l.name, price: l.price, image : l.avatar_url})
      }}>
        <ListItem key={i} bottomDivider>
        <ListItem.Content>
        <Avatar source={{uri: l.avatar_url}} rounded />
        <ListItem.Title>Order No: {l.no}</ListItem.Title>
          <ListItem.Subtitle>Name: {l.name}</ListItem.Subtitle>
          <ListItem.Subtitle>Price: {l.price}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      </TouchableOpacity>
    ))
  }
</View>
    </View>
  )
}

const OrderDetails = ({navigation, route}) => {
  const Order = route.params.no;
  const Name = route.params.name;
  const Price = route.params.price;
  const Image = route.params.image
  return(
    <View style = {styles.container1}>
      <Avatar
        rounded
        source={{uri: Image}}
        size = "xlarge"
      />
      <Text style = {{fontSize: 20}}>Order No: {Order}</Text>
      <Text style = {{fontSize: 20}}>Name: {Name}</Text>
      <Text style = {{fontSize: 20}}>Price: {Price}</Text>

      <TouchableOpacity style = {styles.touchable}
        onPress = {() => {
          navigation.navigate('EmployeesList');
        }}
      ><Text style = {styles.text}>Back</Text></TouchableOpacity>
    </View>
  )
}


export default function App() {
  const [showLogin, hideLogin] = React.useState(true);
  return (
    <>
      {showLogin ? (<Login event = {hideLogin}/>) : (<NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24
          },
      }}
      >
        <Stack.Screen name="DashBoard" component={HomeScreen} options = {{ headerRight: () => (
            <Button
              onPress={() =>{
                hideLogin(true);
              }}
              title="Logout"
              color="#fff"
              buttonStyle = {{backgroundColor: 'green', marginRight: 15, borderBottomWidth: 1, borderBottomColor: "#fff", padding: 0}}
            />
          )}}/>
        <Stack.Screen name="ProductsList" component={ProductsList} options = {{title: 'Product List'}}/>
        <Stack.Screen name="ProductDetails" component={ProductDetails} options = {{title: 'Product Details'}}/>
        <Stack.Screen name="EmployeesList" component={EmployeesList} options = {{title: 'Employees List'}} />
        <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} options = {{title: 'Employee Details'}}/>
        <Stack.Screen name="OrdersList" component={OrdersList} options = {{title: 'Orders List'}}/>
        <Stack.Screen name="OrderDetails" component={OrderDetails} options = {{title: 'Order Details'}}/>
      </Stack.Navigator>
    </NavigationContainer>) }
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  touchable: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 10,
    width: 200,
    borderRadius: 5
  },
  touchable1: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 20,
    width: 250,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
  inputView: {
    width: "80%",
    backgroundColor: "green",
    borderRadius: 25,
    height: 55,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    height: 50,
    color: "white",
    flex: 1,
  },
  forgot: {
    color: "green",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  loginText: {
    color: "#fff",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  icon: {
    marginRight: 10,
    color: '#fff'
  },
});
