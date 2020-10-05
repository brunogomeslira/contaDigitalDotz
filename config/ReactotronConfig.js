import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import {NativeModules} from 'react-native';
import url from 'url';

if (__DEV__) {
  const {hostname} = url.parse(NativeModules.SourceCode.scriptURL);

  console.log(hostname);

  console.tron = Reactotron.configure()
    .useReactNative()
    .use(reactotronRedux())
    .configure({
      host: hostname,
    })
    .connect();
}
