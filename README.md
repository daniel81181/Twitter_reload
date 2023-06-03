## Carlos Daniel Alvarez Castañeda
## Yised Denisse Apolonio Flores

# Principios SOLID
--Single Responsibility Principle: En nuestro código está muy presente este principio pues cada una de nuestras funciones se encarga de realizar un tarea en específico. En el componente de MuroScreen hay funciones como handleInputChange que define una función de controlador de eventos que se llama cuando cambia el contenido del textarea del tweet y esta actualiza el estado message con el valor del evento. También la función de Push que recibe un parámetro message y crea un nuevo tweet en la base de datos de Firebase utilizando la función push y los datos proporcionados (usuario, fecha actual y contenido del mensaje).
Otra función en donde se aplica este principio de responsabilidad única es en handleTweet, es una función de controlador de eventos que se llama cuando se hace clic en el botón de enviar el tweet, ésta verifica si el mensaje no está vacío y, en ese caso, se envía el tweet.
Se cumple el principio de responsabilidad única al tener una única responsabilidad, que es la representación y manejo de la funcionalidad relacionada con el muro de tweets. 


--Open Closed Principle: El código está diseñado de tal manera que sea fácil de extender para añadir nuevas funcionalidades. Por ejemplo, tenemos un componente llamado Navbar en la cual se pueden agregar nuevas funcionalidades para ampliar la aplicación e incluir nuevos componentes. Así mismo, se pueden agregar nuevas funcionalidades relacionadas con los tweets para editar o eliminar algún tweet, esto sin tener que alterar el código actual.
Este principio también se puede apreciar en el componente Tweet el cual renderiza una estructura que muestra la información del tweet, como el usuario, el contenido del mensaje y la fecha, Tweet se podría extender para mostrar más datos que le sean útiles al usuario para tener una mejor experiencia al usar la app, para lograr esto, no es necesario modificar el código actual, se puede expandir sin afectar lo que ya está codificado.
También MuroScreen muestra un grado de extensibilidad a través de su estructura modularizada, se pueden agregar más funcionalidades o características a la pantalla del muro de tweets, se puede hacer mediante la adición de nuevos componentes.
En Signup también se presenta este principio pues es extensible para agregar nuevas funcionalidades relacionadas con el registro de usuarios sin modificar su código existente. Si se desea agregar validaciones extras o realizar acciones adicionales durante el proceso de registro, se puede hacer mediante la adición de lógica sin cambiar el código actual.


--The Liskov Substitution Principle: Nuestro código permite que las clases o funciones que lo componen puedan ser reutilizadas en diferentes contextos sin afectar su funcionamiento. Por ejemplo, se podrían reutilizar las funciones de handleInputChange para detectar cambios en diferentes campos de texto de otros formularios que se deseen emplear en la app, así mismo esta función se podría utilizar para detectar cambios en el movimiento del mouse del usuario para analizar su interacción con la página y su navegación. 
También una subclase para enviar los tweets creados a nuestra base de datos puede ser sustituible por su clase base sin romper el comportamiento esperado del programa. 

--The Interface Segregation Principle: Nuestra aplicación cumple con este principio ya que las interfaces que la conforman son específicas para cada tarea, y no incluyen métodos innecesarios. En nuestra interfaz de inicio de sesión y también en la de registro se cumple la tarea de permitir al usuario ingresar a la app o registrarse y estas interfaces son específicas y proporcionan sólo los métodos necesarios para cada clase.
Además las clases de cada una de las interfaces no tienen dependencias innecesarias, esto nos facilita el mantenimiento, la reutilización y la extensibilidad del código.

--The Dependency Inversion Principle: Este principio se representa en LoginScreen ya que depende de los módulos y funciones externas, como firebase/auth, firebase, y react-router-dom. El uso de estos módulos externos cumple con el DIP, ya que el componente depende de abstracciones en lugar de depender directamente de implementaciones concretas.
También Signup depende de las abstracciones proporcionadas por los módulos react-router-dom y firebase,se utilizan las dependencias a través de la inyección de dependencias y no instancia directamente los módulos, sino que los importa y los utiliza en su funcionalidad.

# Patrones de Diseño
--El patrón Observer se usa en nuestro código pues cuando ocurre un cambio se notifica automáticamente al observador para que pueda actualizar su estado o realizar alguna acción. En el código, la función useEffect se utiliza para identificar cambios. Cada vez que se produce un cambio en la ubicación "tweets" de la base de datos, se llama a la función de devolución de llamada pasada a onValue. Dentro de esa función de devolución de llamada, se actualiza el estado de tweets utilizando la función setTweets, lo que provoca una actualización en la interfaz de usuario. Cuando se produce un cambio en "tweets" de la base de datos, el componente MuroScreen es notificado y actualiza su estado tweets. Cada vez que se actualiza la lista de tweets en la base de datos, el componente MuroScreen se actualiza automáticamente para reflejar los cambios en la interfaz de usuario.

--El patrón State se usó en el código al utilizar useState para gestionar el estado de las variables tweets y message. El estado de tweets se actualiza mediante la función setTweets, mientras que el estado de message se actualiza mediante la función setMessage. Estos estados se utilizan para almacenar y manipular los tweets y el mensaje del usuario en el muro.
Dependiendo del estado en el que se encuentre, las variables de estado se utilizarán para almacenar el contenido del mensaje que se ingresará en el textarea, de esta forma se obtienen los datos de los tweets que escriba el usuario y se van detectando cambios en los estados con los que trabaja el componente.

--El patrón Facade se utilizó en nuestro código en el componente MuroScreen ya que, en este componente se juntan distintas responsabilidades como por ejemplo que el usuario pueda escribir un tweet y al mismo tiempo visualizar otros tweets de otros usuarios, estas funcionalidades se realizan sin que el usuario tenga que interactuar con componentes distintos, al contrario, puede visualizarlo en una sola interfaz, esto demuestra una interfaz simple. También el objeto db es una instancia de la base de datos de Firebase, y se utiliza para realizar operaciones como consultar y agregar datos en la base de datos. No se interactúa directamente con la base de datos de Firebase y sus métodos, el código encapsula estas interacciones dentro de funciones personalizadas, como ref, onValue y push.
Con este patrón de diseño nos permite incluir solo las funcionalidades que al usuario le interesan.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
