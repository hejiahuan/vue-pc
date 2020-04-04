
import Storage from 'vue-ls';

const options = {
  namespace: 'vuejs__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'session', // storage name session, local, memory
};

const storage ={
    Storage,
    options
}


export default storage